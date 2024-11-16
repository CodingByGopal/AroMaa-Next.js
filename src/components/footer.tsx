const Footer = () => {
    return (
        <footer className='md:mt-14 mt-8 md:p-6 p-4 border-y border-secondary dark:bg-secondary/40 bg-secondary text-sm text-center'>
            <div className="container">
                <div className="text-foreground/60 flex flex-col sm:flex-row items-center sm:gap-2 gap-1 justify-center">
                    <p>
                        &#169; Made by{" "}
                        <a
                            className="text-foreground hover:underline hover:underline-offset-4 underline underline-offset-4"
                            href="https://www.linkedin.com/in/gopal-ji/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gopal Ji
                        </a>{" "}
                        with
                    </p>
                    <div className="flex items-center gap-1 justify-center [&>a]:underline  [&>a]:underline-offset-4">
                        <a
                            className="text-foreground hover:underline hover:underline-offset-4"
                            href="https://nextjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Next.js,
                        </a>
                        <a
                            className="text-foreground hover:underline hover:underline-offset-4"
                            href="https://tailwindcss.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tailwind
                        </a>
                        <span>&</span>
                        <a
                            className="text-foreground hover:underline hover:underline-offset-4"
                            href="https://ui.shadcn.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            shadcn/ui
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
