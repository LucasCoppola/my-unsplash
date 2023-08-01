import prisma from '@/lib/prisma'

export type ImageType = {
	id: string
	src: string
	label: string
	userId: string
}

export async function getImages() {
	try {
		const images = await prisma.image.findMany()
		return { images }
	} catch (e) {
		console.log(e)
		return { e }
	}
}

export async function postImage({ src, label, userId }: ImageType) {
	try {
		const image = await prisma.image.create({
			data: {
				src,
				label,
				userId
			}
		})
		return { image }
	} catch (e) {
		console.log(e)
		return { e }
	}
}
