import Image from 'next/image'

export default function Navbar() {
	return (
		<nav className="relative bg-white shadow ">
			<div className="container mx-auto px-6 py-3">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<a href="#">
								<Image
									className="h-6 w-auto sm:h-7"
									src="https://merakiui.com/images/full-logo.svg"
									alt="logo"
									width={100}
									height={100}
								/>
							</a>
							<div className="mx-10 hidden md:block">
								<div className="relative">
									<span className="absolute inset-y-0 left-0 flex items-center pl-3">
										<svg
											className="h-5 w-5 text-gray-400"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</span>
									<input
										type="text"
										className="-300 w-full rounded-md border bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300    focus:ring-opacity-40"
										placeholder="Search by name"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute inset-x-0 top-24 z-20 w-full bg-white px-6 py-2 transition-all duration-300 ease-in-out  md:relative md:top-0 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100">
						<div className="my-4 md:hidden">
							<div className="relative">
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<svg
										className="h-5 w-5 text-gray-400"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</span>
								<input
									type="text"
									className="-300 w-full rounded-md border bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300    focus:ring-opacity-40"
									placeholder="Search"
								/>
							</div>
						</div>
					</div>
					<button>Add a photo</button>
				</div>
			</div>
		</nav>
	)
}
