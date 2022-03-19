const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full">
            <hr className="dark:border-zinc-800" />
            <p className="text-center font-semibold text-sm p-2">
                Alwin Gilang Permana <b>@{new Date().getFullYear()}</b>
            </p>
        </div>
    )
}

export default Footer
