import ImageComponent from '@/components/ui/ImageComp'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { getImages } from '../server'

// const images = [
// 	{
// 		id: 1,
// 		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1689975352/Store/zygsbm2ra0w6cf7tyy9d.jpg',
// 		label: 'label'
// 	},
// 	{
// 		id: 2,
// 		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1689953788/sample.jpg',
// 		label: 'label'
// 	},
// 	{
// 		id: 3,
// 		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1688737914/powerlifting_x8zwhg.jpg',
// 		label: 'label'
// 	},
// 	{
// 		id: 4,
// 		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1688737804/001-Rogue-Fitness-Calisthenics-Parallettes-004-opt_prexfz.jpg',
// 		label: 'label'
// 	},
// 	{
// 		id: 5,
// 		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1688737328/bg-image_n18nut.jpg',
// 		label: 'label'
// 	},
// 	{
// 		id: 6,
// 		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1676568161/YelpCamp/nv2gaq8uilqxg17tp6lr.jpg',
// 		label: 'label'
// 	},
// 	{
// 		id: 7,
// 		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1675862370/YelpCamp/cblohpx9wtwgnd5gzets.jpg',
// 		label: 'label'
// 	}
// ]

export default async function Dashboard() {
	const { images } = await getImages()
	const session = await getServerSession(authOptions)
	if (!session) {
		redirect('/')
	}

	return (
		<main className="mt-8 flex flex-col items-center justify-between p-6">
			<div className="columns-auto gap-6 md:columns-3">
				{images?.map(({ src, id, label }) => (
					<ImageComponent
						key={id}
						src={src}
						label={label}
						id={Number(id)}
					/>
				))}
			</div>
		</main>
	)
}
