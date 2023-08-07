'use client'

import { Search, MyUnsplashLogo } from '@/components/ui/icons'
import UserDropdown from '../ui/user-dropdown'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Button } from '../ui/shadcn/button'
import SignInModal from '../ui/sign-in-modal'
import { useSession } from 'next-auth/react'
import { AddImage } from '../ui/addImage'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
	const [searchValue, setSearchValue] = useState<string>('')
	const { data: session } = useSession()
	const pathname = usePathname()
	const router = useRouter()
	const searchParams = useSearchParams()

	useEffect(() => {
		const search = searchParams.get('search')
		if (search && typeof search === 'string') {
			setSearchValue(search)
		} else {
			setSearchValue('')
		}
	}, [searchParams])

	const handleSearch = () => {
		if (searchValue.length > 0) {
			router.push(`/dashboard?search=${encodeURIComponent(searchValue)}`)
		} else {
			router.push('/dashboard')
		}
	}

	return (
		<nav className="relative z-10">
			<div className="container mx-auto px-6 py-3">
				<div className="flex w-full flex-col md:flex-row md:items-center">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Link href="/">
								<MyUnsplashLogo />
							</Link>
							{pathname === '/dashboard' && (
								<div className="mx-5">
									<div className="relative">
										<span className="absolute inset-y-0 left-0 flex items-center pl-3">
											<Search className="h-5 w-5 text-gray-400" />
										</span>
										<input
											type="text"
											className="w-full rounded-xl border bg-white py-2.5 pl-10 pr-4 text-gray-700 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200"
											placeholder="Search"
											value={searchValue}
											onChange={(e) =>
												setSearchValue(e.target.value)
											}
											onBlur={handleSearch}
											onKeyPress={(e) => {
												if (e.key === 'Enter') {
													handleSearch()
												}
											}}
										/>
									</div>
								</div>
							)}
						</div>
					</div>
					{session ? (
						<div className="ml-auto flex items-center">
							{pathname === '/dashboard' ? (
								<AddImage />
							) : (
								<Link href="/dashboard">
									<Button className="mr-6 rounded-xl">
										Dashboard
									</Button>
								</Link>
							)}
							<UserDropdown session={session} />
						</div>
					) : (
						<div className="ml-auto flex items-center">
							<SignInModal text="Sign in" />
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}
