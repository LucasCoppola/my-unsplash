'use client'

import { Search, MyUnsplashLogo } from '@/components/ui/icons'
import { useSession } from 'next-auth/react'
import UserDropdown from '../ui/user-dropdown'
import SignInModal from '../ui/sign-in-modal'
import Link from 'next/link'

export default function Navbar() {
	const { data: session } = useSession()

	return (
		<nav className="relative bg-white">
			<div className="container mx-auto px-6 py-3">
				<div className="flex w-full flex-col md:flex-row md:items-center">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Link href="/">
								<MyUnsplashLogo />
							</Link>
							<div className="mx-5">
								<div className="relative">
									<span className="absolute inset-y-0 left-0 flex items-center pl-3">
										<Search className="h-5 w-5 text-gray-400" />
									</span>
									<input
										type="text"
										className="w-full rounded-xl border bg-white py-2.5 pl-10 pr-4 text-gray-700"
										placeholder="Search by name"
									/>
								</div>
							</div>
							<Link href="/dashboard">Dashboard</Link>
						</div>
					</div>
					<div className="ml-auto flex items-center">
						<button className="mr-4 rounded-xl bg-[#3DB46D] px-4 py-2 font-semibold text-white shadow-md duration-300 hover:bg-[#249A4C]">
							Add a photo
						</button>

						{session ? (
							<UserDropdown session={session} />
						) : (
							<SignInModal />
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}
