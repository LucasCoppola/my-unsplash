import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { Dialog, DialogFooter } from './shadcn/dialog'
import { useToast } from './shadcn/use-toast'
import { Button } from './shadcn/button'
import { getImagesAction, postImageAction } from '@/app/_actions'
import { useSession } from 'next-auth/react'

type statusTypes = {
	loading: boolean
	error: boolean
	success: boolean
}

export function FileUpload({ setOpen }: { setOpen: (open: boolean) => void }) {
	const { data: session } = useSession()
	const { toast } = useToast()
	const [file, setFile] = useState<File | null>(null)
	const [label, setLabel] = useState('')
	const [status, setStatus] = useState<statusTypes>({
		loading: false,
		error: false,
		success: false
	})

	const onDrop = useCallback((files: File[]) => {
		setFile(files[0])
	}, [])

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: false,
		accept: { 'image/*': [] },
		maxSize: 10000000
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!file) return
		setStatus({ ...status, loading: true })

		const formData = new FormData()
		formData.append('file', file)
		formData.append('upload_preset', 'my-unsplash')

		const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL
		if (!URL) {
			console.error('Cloudinary URL is not defined.')
			return
		}
		const data = await fetch(URL, {
			method: 'POST',
			body: formData
		}).then((res) => res.json())

		if (data.error || !data) {
			setStatus({ ...status, loading: false, error: true })
			return
		}

		const { images } = await getImagesAction({
			userId: session?.userId || ''
		})
		if (images && images.length >= 25) {
			setStatus({ ...status, loading: false, error: true })
			toast({
				title: 'You have reached the limit of images',
				description: 'You can only upload 25 images',
				className: 'bg-[#18181b] text-[#FAFAFA]'
			})
			return
		}

		await postImageAction({
			label: label,
			src: data.secure_url,
			id: data.asset_id,
			userId: session?.userId || ''
		})
		setStatus({ ...status, loading: false, success: true })
		setOpen(false)
	}

	// Revoke object URL when the component unmounts to avoid memory leaks
	useEffect(() => {
		return () => {
			if (file) {
				URL.revokeObjectURL(URL.createObjectURL(file))
			}
		}
	}, [file])

	return (
		<form onSubmit={handleSubmit} className="space-y-4 p-4">
			<div>
				<label
					htmlFor="label"
					className="block pb-1 text-sm font-medium text-gray-900"
				>
					Label
				</label>
				<input
					id="label"
					name="label"
					value={label}
					onChange={(e) => setLabel(e.target.value)}
					maxLength={30}
					className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200"
					autoComplete="off"
				/>
			</div>
			<div {...getRootProps()}>
				{file ? (
					<Image
						src={URL.createObjectURL(file)}
						width={600}
						height={200}
						alt="Uploaded preview"
						className="max-h-96 rounded-lg"
						aria-label="uploaded-image"
					/>
				) : (
					<Dropzone>
						<input {...getInputProps({})} />
					</Dropzone>
				)}
			</div>
			<Dialog>
				<DialogFooter className="flex-row">
					<FormButton status={status} />
				</DialogFooter>
			</Dialog>
		</form>
	)
}

export function FormButton({ status }: { status: statusTypes }) {
	const { toast } = useToast()

	useEffect(() => {
		if (status.success) {
			toast({
				title: 'Success',
				description: 'Image uploaded successfully',
				className: 'bg-green-500 text-white',
				duration: 3000
			})
		} else if (status.error) {
			toast({
				title: 'Error',
				description: 'Something went wrong',
				className: 'bg-red-500 text-white'
			})
		}
	}, [status.success, status.error, toast])

	return (
		<Button
			type="submit"
			disabled={status.loading || status.error || status.success}
			style={{
				opacity: status.loading ? 0.5 : 1,
				backgroundColor: status.error ? '#ef4444' : ''
			}}
		>
			{status.loading ? 'Loading...' : status.error ? 'Failed!' : 'Add'}
		</Button>
	)
}

export function Dropzone({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex w-full items-center justify-center">
			<label
				htmlFor="dropzone-file"
				className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:hover:border-gray-500"
			>
				<div className="flex flex-col items-center justify-center pb-6 pt-5">
					<svg
						className="mb-4 h-8 w-8 text-gray-500"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 16"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
						/>
					</svg>
					<p className="mb-2 text-sm text-gray-500">
						<span className="font-semibold">Click to upload</span>{' '}
						or drag and drop
					</p>
				</div>
				{children}
			</label>
		</div>
	)
}
