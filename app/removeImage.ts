'use server'

import { v2 as cloudinary } from 'cloudinary'

const regex = /\my-unsplash\/([^\/]+)/

const extractFolderAndPublicId = (url: string) => {
	const matches = url.match(regex)
	if (matches) {
		return matches[0].substr(0, matches[0].lastIndexOf('.')) || matches[0]
	} else {
		console.error('URL does not match the pattern.')
		return null
	}
}

export const deleteImageFromCloudinary = (src: string) => {
	const match = extractFolderAndPublicId(src)
	if (!match) {
		console.error('There is not a match')
		return
	}

	cloudinary.config({
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
		api_key: process.env.CLOUDINARY_API_KEY as string,
		api_secret: process.env.CLOUDINARY_API_SECRET as string
	})
	console.log('Deleting image from Cloudinary...', match)

	cloudinary.uploader
		.destroy(match)
		.then((result) => {
			console.log('Image deleted successfully:', result)
		})
		.catch((error) => {
			console.error('Error deleting image:', error)
		})
}
