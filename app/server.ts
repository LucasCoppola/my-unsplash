import prisma from '@/lib/prisma'

export async function getImages() {
	try {
		const images = await prisma.image.findMany()
		return { images }
	} catch (e) {
		console.log(e)
		return { e }
	}
}
