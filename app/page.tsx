import ImageComponent from '@/components/home/ImageComp'
import Navbar from '@/components/home/navbar'

const images = [
	{
		id: 1,
		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1689975352/Store/zygsbm2ra0w6cf7tyy9d.jpg'
	},
	{
		id: 2,
		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1689953788/sample.jpg'
	},
	{
		id: 3,
		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1688737914/powerlifting_x8zwhg.jpg'
	},
	{
		id: 4,
		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1688737804/001-Rogue-Fitness-Calisthenics-Parallettes-004-opt_prexfz.jpg'
	},
	{
		id: 5,
		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1688737328/bg-image_n18nut.jpg'
	},
	{
		id: 6,
		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1676568161/YelpCamp/nv2gaq8uilqxg17tp6lr.jpg'
	},
	{
		id: 7,
		src: 'https://res.cloudinary.com/dotpfjpno/image/upload/v1675862370/YelpCamp/cblohpx9wtwgnd5gzets.jpg'
	}
]

export default function Home() {
	return (
		<div className="mx-10 mt-3">
			<Navbar />
			<main className="mt-8 flex flex-col items-center justify-between p-6">
				<div className="columns-auto gap-6 md:columns-3">
					{images.map(({ src, id }) => (
						<ImageComponent
							key={id}
							label="I'm the Label"
							src={src}
							id={id}
						/>
					))}
				</div>
			</main>
		</div>
	)
}
