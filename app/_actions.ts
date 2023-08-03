'use server'

import { revalidatePath } from 'next/cache'
import { ImageType, deleteImage, postImage } from './server'

export async function postImageAction({ src, label, userId, id }: ImageType) {
	await postImage({ src, label, userId, id })
	revalidatePath('/dashboard')
}

export async function deleteImageAction(id: string) {
	await deleteImage({ id })
	revalidatePath('/dashboard')
}
