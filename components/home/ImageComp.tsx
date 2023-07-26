/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'

type ImageComponentProps = { label: string; src: string; id: number }

export default function ImageComponent({
	label,
	src,
	id
}: ImageComponentProps) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div
			className="group relative"
			onMouseOver={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img
				key={id}
				className="mb-6 rounded-2xl transition duration-200 ease-in-out hover:brightness-50"
				src={src}
				alt=""
			/>
			{label && isHovered && (
				<span className="absolute bottom-2 left-2 text-white">
					{label}
				</span>
			)}
		</div>
	)
}
