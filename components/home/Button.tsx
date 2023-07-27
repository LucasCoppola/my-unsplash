export default function Button({
	children,
	className
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<button
			className={`rounded-xl px-4 py-3 font-semibold shadow-md duration-100 hover:-translate-y-0.5 ${className}`}
		>
			{children}
		</button>
	)
}
