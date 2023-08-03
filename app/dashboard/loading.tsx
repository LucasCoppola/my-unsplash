export default function Loading() {
	return (
		<div className="mt-8 p-6">
			<div className="animate-pulse">
				<div className="grid grid-cols-3 gap-6">
					{Array.from({ length: 6 }).map((_, index) => (
						<div
							key={index}
							className="h-64 w-full rounded-md bg-gray-200"
						></div>
					))}
				</div>
			</div>
		</div>
	)
}
