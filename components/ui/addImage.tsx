import { Button } from '@/components/ui/shadcn/button'
import {
	Dialog,
	DialogContent,
	DialogTrigger
} from '@/components/ui/shadcn/dialog'
import { Camera } from './icons'
import { FileUpload } from './FileUpload'
import { useState } from 'react'

export function AddImage() {
	const [open, setOpen] = useState(false)

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className="mr-4 rounded-xl">
					<Camera className="mr-2 h-5 w-5" />
					Add Image
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<FileUpload setOpen={setOpen} />
			</DialogContent>
		</Dialog>
	)
}
