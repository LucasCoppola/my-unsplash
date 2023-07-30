'use client'

import { signOut } from 'next-auth/react'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'

import Image from 'next/image'
import { Session } from 'next-auth'
import { LogOut } from 'lucide-react'

export default function UserDropdown({ session }: { session: Session }) {
	const { email, image } = session?.user || {}

	if (!email) return null

	return (
		<div className="relative inline-block text-left">
			<Popover>
				<PopoverTrigger className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9">
					<Image
						alt={email}
						src={
							image ||
							`https://avatars.dicebear.com/api/micah/${email}.svg`
						}
						width={40}
						height={40}
					/>
				</PopoverTrigger>
				<PopoverContent align="end" sideOffset={10}>
					<div className="w-full rounded-md bg-white p-2 sm:w-56">
						<button
							className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
							onClick={() =>
								signOut({ redirect: true, callbackUrl: '/' })
							}
						>
							<LogOut className="h-4 w-4" />
							<p className="text-sm">Logout</p>
						</button>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	)
}
