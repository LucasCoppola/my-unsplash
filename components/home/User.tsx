'use client'

import { useState } from 'react'
// import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { Session } from 'next-auth'

export default function UserDropdown({ session }: { session: Session }) {
	const { email, image } = session?.user || {}
	const [openPopover, setOpenPopover] = useState(false)
	console.log(session, image)

	if (!email) return null

	return (
		<div className="relative inline-block text-left">
			<button
				onClick={() => setOpenPopover(!openPopover)}
				className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
			>
				<Image
					alt={email}
					src={
						image ||
						`https://avatars.dicebear.com/api/micah/${email}.svg`
					}
					width={40}
					height={40}
				/>
			</button>
		</div>
	)
}
