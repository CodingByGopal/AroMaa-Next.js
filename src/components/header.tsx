"use client"

import { NavigationOptionsModel } from "@/data/_model/navigation.options.model";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Book, GitFork, Home, Text } from "lucide-react";
import MobileMenu from "./mobile-menu";

const navigationOptions: NavigationOptionsModel[] = [
    {
        label: 'Home',
        path: '/',
        icon: <Home />
    },

    {
        label: 'Recipes',
        path: '/recipes',
        icon: <Book />
    },
    {
        label: 'Github',
        path: 'https://github.com/CodingByGopal/AroMaa-Next.js',
        icon: <GitFork />,
        target: '_blank',
        rel: "noopener noreferrer"
    },



];
const Header = () => {
    const pathname = usePathname();


    return (
        <header className='fixed top-0  w-screen   bg-background  border-b border-border   z-50'>

            <section className=' container '>
                <div className=" flex  justify-between items-center gap-5  py-3">


                    <div className=" flex items-center md:gap-6 gap-3">
                        <div className=" md:hidden  block">
                            <MobileMenu pathName={pathname} navigationOptions={navigationOptions} >
                                <Button variant='secondary' size='icon'>
                                    <Text className=" !w-5 !h-5" />
                                    <span className="sr-only">Mobile Menu Button</span>
                                </Button>
                            </MobileMenu>


                        </div>
                        <Logo />
                        <nav className=" border-l-2 border-border pl-6 hidden md:flex items-center gap-5 font-semibold text-base">
                            {navigationOptions.map((navOption, index) => (
                                <Link prefetch={false} className={`${pathname === navOption?.path ? 'bottom-line' : " "} 
                                   duration-300 transition-all `} rel={navOption?.rel} target={navOption?.target} href={navOption?.path} key={index}>
                                    {navOption?.label}
                                </Link>
                            ))}



                        </nav>
                    </div>


                    <div className=" flex-none">
                        <ThemeToggle />
                    </div>


                </div>

            </section>
        </header >
    )
}

export default Header