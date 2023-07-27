'use client'

import Search from '../icons/search'
import MyUnsplashLogo from '../icons/my-unsplash-logo'
import Image from 'next/image'
import { SignUpButton, SignInButton, useUser } from '@clerk/nextjs'
import Button from './Button'
import User from '../icons/user'

export default function Navbar() {
	const { isSignedIn, user } = useUser()
	if (isSignedIn) {
		console.log(user.imageUrl)
	}
	return (
		<nav className="relative bg-white">
			<div className="container mx-auto px-6 py-3">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between">
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
										className="w-full rounded-xl border bg-white py-2.5 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300    focus:ring-opacity-40"
										placeholder="Search by name"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex">
						<Button className="bg-[#3DB46D] text-white">
							Add a photo
						</Button>
						{isSignedIn ? (
							<Image
								src={user.imageUrl ?? <User />}
								alt=""
								width={50}
								height={50}
								className="ml-4 cursor-pointer rounded-full shadow-md duration-100 hover:-translate-y-0.5"
							/>
						) : (
							<SignInButton>
								<Button className="ml-4 cursor-pointer text-gray-800">
									Sign In
								</Button>
							</SignInButton>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}
