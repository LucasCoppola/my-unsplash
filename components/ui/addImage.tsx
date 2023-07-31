import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Camera } from './icons'

export function AddImage() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="mr-4 rounded-xl">
					<Camera className="mr-2 h-5 w-5" />
					Add Image
				</Button>
			</DialogTrigger>
			<DialogContent className="p-4 sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Image</DialogTitle>
				</DialogHeader>

				<DialogFooter className="flex-row">
					<Button>Cancel</Button>
					<Button type="submit">Add</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
