'use client'

import { useState } from 'react'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import { deleteImageAction } from '@/app/_actions'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/shadcn/alert-dialog'

type ImageComponentProps = { label?: string; src: string; id: string }

export default function ImageComponent({
	label,
	src,
	id
}: ImageComponentProps) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div
			className="group relative transition duration-200 hover:scale-[1.02]"
			onMouseOver={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Image
				key={id}
				className={`mb-6 rounded-2xl ease-in-out ${
					isHovered ? 'brightness-50 transition duration-200' : ''
				}`}
				src={src}
				width={400}
				height={400}
				alt={label || 'image preview'}
			/>
			{isHovered && (
				<>
					<AlertDialog>
						<AlertDialogTrigger className="absolute right-5 top-5 cursor-pointer text-red-600">
							<Trash />
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									Are you absolutely sure?
								</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be undone. This will
									permanently delete your account and remove
									your data from our servers.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction
									className="bg-red-200 font-semibold text-red-600 hover:bg-red-300"
									onClick={() => deleteImageAction(id, src)}
								>
									Yes
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
					{label && (
						<span className="absolute bottom-3 left-3 text-base font-semibold text-white brightness-100">
							{label}
						</span>
					)}
				</>
			)}
		</div>
	)
}
