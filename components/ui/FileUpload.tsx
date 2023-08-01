import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { Dialog, DialogFooter } from './dialog'
import { Button } from './button'

export function FileUpload() {
	const [file, setFile] = useState<File | null>(null)

	const onDrop = useCallback((files: File[]) => {
		setFile(files[0])
	}, [])

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: false,
		accept: { 'image/*': [] }
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!file) return

		const formData = new FormData()
		formData.append('file', file)

		if (!process.env.NEXT_CLOUDINARY_PRESET) {
			console.error('Cloudinary preset is not defined.')
			return
		}
		formData.append('upload_preset', process.env.NEXT_CLOUDINARY_PRESET)

		const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL
		if (!URL) {
			console.error('Cloudinary URL is not defined.')
			return
		}
		const data = await fetch(URL, {
			method: 'POST',
			body: formData
		}).then((res) => res.json())

		console.log(data)
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
					className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200"
					required
				/>
			</div>
			<div {...getRootProps()}>
				{file ? (
					<Image
						src={URL.createObjectURL(file)}
						width={600}
						height={200}
						alt="Uploaded preview"
						className="rounded-lg"
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
					<Button type="submit">Add</Button>
				</DialogFooter>
			</Dialog>
		</form>
	)
}

export function Dropzone({ children }: { children?: React.ReactNode }) {
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
					<p className="text-xs text-gray-500">
						SVG, PNG, JPG, or GIF (MAX. 800x400px)
					</p>
				</div>
				{children}
			</label>
		</div>
	)
}
