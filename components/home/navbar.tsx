'use client'

import { useState } from 'react'
import {
	Search,
	MyUnsplashLogo,
	LoadingCircle,
	Google
} from '@/components/icons'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger
} from '@/components/ui/dialog'
import { signIn } from 'next-auth/react'
import { Session } from 'next-auth'
import UserDropdown from './User'

export default function Navbar({ session }: { session: Session | null }) {
	const [signInClicked, setSignInClicked] = useState(false)

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
						<button className="mr-4 rounded-xl bg-[#3DB46D] px-4 py-2 font-semibold text-white shadow-md duration-300 hover:bg-[#249A4C]">
							Add a photo
						</button>

						{session ? (
							<UserDropdown session={session} />
						) : (
							<Dialog>
								<DialogTrigger className="rounded-xl bg-[#0a0a0a] px-4 py-1.5 font-sans font-semibold text-white shadow-md duration-300 hover:bg-white hover:text-black">
									Log In
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
											<button
												disabled={signInClicked}
												className={`${
													signInClicked
														? 'cursor-not-allowed border-gray-200 bg-gray-100'
														: 'border border-gray-200 bg-white text-black hover:bg-gray-50'
												} flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
												onClick={() => {
													setSignInClicked(true)
													signIn('google')
												}}
											>
												{signInClicked ? (
													<LoadingCircle />
												) : (
													<>
														<Google className="h-5 w-5" />
														<p>
															Sign In with Google
														</p>
													</>
												)}
											</button>
										</div>
									</DialogHeader>
								</DialogContent>
							</Dialog>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}
