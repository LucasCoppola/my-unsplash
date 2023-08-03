'use client'

import { useState } from 'react'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import { deleteImageAction } from '@/app/_actions'

type ImageComponentProps = { label: string; src: string; id: string }

export default function ImageComponent({
	label,
	src,
	id
}: ImageComponentProps) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div
			className="group relative transition duration-200 ease-in-out"
			onMouseOver={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Image
				key={id}
				className={`mb-6 rounded-2xl ease-in-out ${
					isHovered ? 'brightness-50' : ''
				}`}
				src={src}
				width={400}
				height={400}
				alt={label}
			/>
			{isHovered && (
				<>
					<Trash
						onClick={() => deleteImageAction(id, src)}
						className="absolute right-5 top-5 cursor-pointer text-red-600"
					/>
					{label && (
						<span className="absolute bottom-5 left-5 text-lg font-semibold text-white brightness-100">
							{label}
						</span>
					)}
				</>
			)}
		</div>
	)
}
