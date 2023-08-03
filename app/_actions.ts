'use server'

import { revalidatePath } from 'next/cache'
import { ImageType, deleteImage, postImage } from './server'
import { deleteImageFromCloudinary } from './removeImage'

export async function postImageAction({ src, label, userId, id }: ImageType) {
	await postImage({ src, label, userId, id })
	revalidatePath('/dashboard')
}

export async function deleteImageAction(id: string, src: string) {
	deleteImageFromCloudinary(src)
	await deleteImage({ id })
	revalidatePath('/dashboard')
}
