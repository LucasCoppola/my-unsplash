/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import Trash from '../icons/trash'

type ImageComponentProps = { label: string; src: string; id: number }

export default function ImageComponent({
	label,
	src,
	id
}: ImageComponentProps) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div
			className="group relative transition duration-200"
			onMouseOver={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img
				key={id}
				className={`mb-6 rounded-2xl ease-in-out ${
					isHovered ? 'brightness-50' : ''
				}`}
				src={src}
				alt={label}
			/>
			{isHovered && (
				<>
					<Trash className="absolute right-5 top-5 text-red-600" />
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
