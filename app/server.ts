import prisma from '@/lib/prisma'

export type ImageType = {
	id: string
	src: string
	label: string
	userId: string
}

export async function getImages({ userId }: { userId: string }) {
	try {
		const images = await prisma.image.findMany({
			where: {
				userId
			}
		})
		return { images }
	} catch (e) {
		console.error(e)
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
		console.error(e)
		return { e }
	}
}

export async function deleteImage({ id }: { id: string }) {
	try {
		await prisma.image.delete({
			where: {
				id
			}
		})
	} catch (e) {
		console.error(e)
		return { e }
	}
}
