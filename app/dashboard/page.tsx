import ImageComponent from '@/components/ui/ImageComp'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { getImages } from '../server'
import Image from 'next/image'

export default async function Dashboard() {
	const session = await getServerSession(authOptions)
	const userId = session?.userId || ''
	const { images } = await getImages({ userId })
	if (!session) {
		redirect('/')
	}

	return (
		<main className="mt-8 flex flex-col items-center justify-between p-6">
			{images?.length ? (
				<div className="columns-auto gap-6 md:columns-3">
					{images?.map(({ src, id, label }) => (
						<ImageComponent
							key={id}
							src={src}
							label={label}
							id={id}
						/>
					))}
				</div>
			) : (
				<Image
					src="/empty-page.svg"
					alt="empty page image"
					width={500}
					height={500}
					className="m-auto"
				/>
			)}
		</main>
	)
}
