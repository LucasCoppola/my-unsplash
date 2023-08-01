import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogTrigger
} from '@/components/ui/dialog'
import { Camera } from './icons'
import { FileUpload } from './FileUpload'

export function AddImage() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="mr-4 rounded-xl">
					<Camera className="mr-2 h-5 w-5" />
					Add Image
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<FileUpload />
			</DialogContent>
		</Dialog>
	)
}
