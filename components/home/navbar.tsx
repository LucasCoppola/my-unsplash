'use client'

import Search from '../icons/search'
import MyUnsplashLogo from '../icons/my-unsplash-logo'
import { SignInButton, SignedIn, UserButton, SignedOut } from '@clerk/nextjs'

export default function Navbar() {
	return (
		<nav className="relative bg-white">
			<div className="container mx-auto px-6 py-3">
				<div className="flex w-full flex-col md:flex-row md:items-center">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<a href="#">
								<MyUnsplashLogo />
							</a>
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
						</div>
					</div>
					<div className="ml-auto flex items-center">
						<SignedIn>
							<button className="mr-4 rounded-xl bg-[#3DB46D] px-4 py-2 font-semibold text-white shadow-md duration-300 hover:bg-[#249A4C]">
								Add a photo
							</button>
							<UserButton
								afterSignOutUrl="/"
								appearance={{
									elements: {
										avatarBox: 'w-10 h-10 shadow-md'
									}
								}}
							/>
						</SignedIn>

						<SignedOut>
							<SignInButton mode="modal">
								<button className="rounded-xl bg-[#0a0a0a] px-4 py-1.5 font-sans font-semibold text-white shadow-md duration-300 hover:bg-white hover:text-black">
									Log In
								</button>
							</SignInButton>
						</SignedOut>
					</div>
				</div>
			</div>
		</nav>
	)
}
