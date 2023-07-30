'use client'

import { Search, MyUnsplashLogo } from '@/components/ui/icons'
import { useSession } from 'next-auth/react'
import UserDropdown from '../ui/user-dropdown'
import Link from 'next/link'
import { useSignInModal } from '../ui/sign-in-modal'
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const { SignInModal, setShowSignInModal } = useSignInModal()
	const { data: session } = useSession()
	const pathname = usePathname()

	return (
		<>
			<SignInModal />
			<nav className="relative z-10">
				<div className="container mx-auto px-6 py-3">
					<div className="flex w-full flex-col md:flex-row md:items-center">
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<Link href="/">
									<MyUnsplashLogo />
								</Link>
								{session && (
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
								)}
							</div>
						</div>
						{session ? (
							<div className="ml-auto flex items-center">
								{pathname === '/dashboard' ? (
									<button className="mr-4 rounded-xl bg-green-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
										Add photo
									</button>
								) : (
									<Link
										href="/dashboard"
										className="mr-6 text-lg duration-300"
									>
										Dashboard
									</Link>
								)}
								<UserDropdown session={session} />
							</div>
						) : (
							<div className="ml-auto flex items-center">
								<button
									onClick={() => setShowSignInModal(true)}
									className="rounded-xl bg-[#0a0a0a] px-4 py-1.5 font-sans font-semibold text-white shadow-md duration-300 hover:bg-[#2e2e2e]"
								>
									Sign In
								</button>
							</div>
						)}
					</div>
				</div>
			</nav>
		</>
	)
}
