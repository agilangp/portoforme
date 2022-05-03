interface CardProps {
    title?: string
    children: React.ReactNode
}
const Card = ({ title, children }: CardProps) => {
    return (
        <div className="bg-white dark:bg-zinc-900 mt-6 p-4 rounded-xl shadow-xl">
            <p className="lg:text-left text-center mb-2 font-semibold underline text-2xl decoration-orange-500">
                {title}
            </p>
            {children}
        </div>
    )
}

export default Card
