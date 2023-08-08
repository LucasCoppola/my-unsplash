import { Button } from '@/components/ui/shadcn/button'
import SignInModal from '@/components/ui/sign-in-modal'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth/next'
import Link from 'next/link'

export default async function Home() {
	const session = await getServerSession(authOptions)

	return (
		<div className="relative isolate px-6 lg:px-8">
			<div
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
					}}
				/>
			</div>
			<div className="mx-auto max-w-4xl py-12 md:py-32 lg:py-32">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Welcome to My Unsplash.
						<br />
						Unleash Your Creativity!
					</h1>
					<p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-gray-600">
						Create Your Stunning Gallery Today - Upload and Share
						Your Photos!
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						{session ? (
							<Link href="/dashboard">
								<Button
									size="lg"
									className="rounded-xl text-lg"
									aria-controls="unique-control-id"
								>
									Get Started
								</Button>
							</Link>
						) : (
							<SignInModal
								text="Get Started"
								btnSize="lg"
								className="text-lg"
							/>
						)}
					</div>
				</div>
			</div>
			<div
				className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
					}}
				/>
			</div>
		</div>
	)
}
