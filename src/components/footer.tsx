
const Footer = () => {
    return (
        <footer className='mt-14 p-6 border-t border-secondary dark:bg-secondary/40 bg-secondary text-center'>
            <div className="container">
                <div className=" text-center text-foreground/60 flex items-center gap-2 justify-center">
                    <p >&#169;Made by {" "}
                        <a className=" text-foreground hover:underline hover:underline-offset-4" href="https://www.linkedin.com/in/gopal-ji/" target="_blank" rel="noopener noreferrer">Gopal Ji</a>
                        {" "}  with</p>
                    <div className="flex  items-center gap-1 justify-center">
                        <a className=" text-foreground hover:underline hover:underline-offset-4" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                            Next.js,
                        </a>
                        <a className=" text-foreground hover:underline hover:underline-offset-4" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                            Tailwind
                        </a>
                        <span>&</span>
                        <a className=" text-foreground hover:underline hover:underline-offset-4" href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
                            shadcn/ui
                        </a>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer