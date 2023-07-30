'use client'

import { Google, LoadingCircle } from '@/components/ui/icons'
import { signIn } from 'next-auth/react'
import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from './dialog'

export default function SignInModal({
	showSignInModal,
	setShowSignInModal
}: {
	showSignInModal: boolean
	setShowSignInModal: Dispatch<SetStateAction<boolean>>
}) {
	const [signInClicked, setSignInClicked] = useState(false)

	return (
		<Dialog open={showSignInModal}>
			<DialogContent>
				<div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
					<h3 className="font-display text-2xl font-bold">Sign In</h3>
					<p className="text-sm text-gray-500">
						This is strictly for demo purposes - only your email and
						profile picture will be stored.
					</p>
				</div>

				<div className="flex flex-col space-y-4 bg-gray-50 px-4 pb-8 pt-4 md:px-16">
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
								<p>Sign In with Google</p>
							</>
						)}
					</button>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export function useSignInModal() {
	const [showSignInModal, setShowSignInModal] = useState(false)

	const SignInModalCallback = useCallback(() => {
		return (
			<SignInModal
				showSignInModal={showSignInModal}
				setShowSignInModal={setShowSignInModal}
			/>
		)
	}, [showSignInModal, setShowSignInModal])

	return useMemo(
		() => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
		[setShowSignInModal, SignInModalCallback]
	)
}
