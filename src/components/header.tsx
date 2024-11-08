"use client"

import { NavigationOptionsModel } from "@/data/_model/navigation.options.model";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";
import { Search } from "lucide-react";

const navigationOptions: NavigationOptionsModel[] = [
    {
        label: 'Home',
        path: '/',
    },

    {
        label: 'Recipes',
        path: '/recipes'
    },



];
const Header = () => {
    const pathname = usePathname();


    return (
        <header className='fixed top-0 left-0 w-full  bg-background  border-b border-border   z-50'>

            <section className=' container '>
                <div className=" flex  justify-between items-center gap-5  py-2.5">
                    <div className=" flex items-center gap-12">
                        <Logo />
                        <nav className="left-line pl-4 flex items-center gap-4 font-semibold text-base">
                            {navigationOptions.map((navOption, index) => (
                                <Link className={`${pathname === navOption?.path ? ' bg-primary text-white' : ""} px-4 py-1  duration-300 transition-all relative`} href={navOption?.path} key={index}>
                                    {navOption?.label}
                                </Link>
                            ))}



                        </nav>
                    </div>
                    <div className="  flex items-center gap-3">
                        <Link className={`${buttonVariants({ variant: "outline", size: "icon" })}`} href='/search'>

                            <Search />
                            <span className="sr-only">Search Recipe</span>
                        </Link>
                        <ThemeToggle />
                    </div>

                </div>

            </section>
        </header >
    )
}

export default Header