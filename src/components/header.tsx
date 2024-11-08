"use client"

import { NavigationOptionsModel } from "@/data/_model/navigation.options.model";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./logo";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

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
    const [addNavColor, setAddNavColor] = useState<boolean>(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setAddNavColor(true);
        } else {
            setAddNavColor(false);
        }
    };

    useEffect(() => {
        changeBackground();
    }, [])

    useEffect(() => {

        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <header className={` fixed top-0 left-0 w-full   z-50 ${addNavColor
            ? " bg-background shadow-2xl  transition-all duration-150 border-b border-border "
            : ""
            }`}>

            <section className=' container '>
                <div className=" flex  justify-between items-center gap-5  py-2.5">
                    <div className=" flex items-center gap-16">
                        <Logo />
                        <nav className=" border-l-2 border-primary pl-4 flex items-center gap-4 font-semibold text-base">
                            {navigationOptions.map((navOption, index) => (
                                <Link className={`${pathname === navOption?.path ? ' bg-primary text-white' : ""} px-4 py-1  duration-300 transition-all relative`} href={navOption?.path} key={index}>
                                    {navOption?.label}
                                </Link>
                            ))}



                        </nav>
                    </div>

                    <ThemeToggle />
                </div>

            </section>
        </header >
    )
}

export default Header