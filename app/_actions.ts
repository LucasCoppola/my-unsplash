'use server'

import { revalidatePath } from 'next/cache'
import { ImageType, postImage } from './server'

export async function postImageAction({ src, label, userId, id }: ImageType) {
	await postImage({ src, label, userId, id })
	revalidatePath('/dashboard')
}
