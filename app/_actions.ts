'use server'

import { revalidatePath } from 'next/cache'
import { ImageType, deleteImage, postImage } from './server'
import { deleteImageFromCloudinary } from './removeImage'

export async function postImageAction({ src, label, userId, id }: ImageType) {
	await postImage({ src, label, userId, id })
	revalidatePath('/dashboard')
	return
}

export async function deleteImageAction(id: string, src: string) {
	try {
		await deleteImageFromCloudinary(src)
		await deleteImage({ id })
		revalidatePath('/dashboard')
		return true
	} catch (error) {
		console.error('Error deleting image:', error)
		return false
	}
}
