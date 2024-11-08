'use client'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
    SheetDescription,
    SheetTitle,
} from "@/components/ui/sheet"
import Link from "next/link"
import React, { useState } from "react"
import { NavigationOptionsModel } from "@/data/_model/navigation.options.model"
import Logo from "./logo"
import { Search } from "lucide-react"

const MobileMenu = (props: {
    children: React.ReactNode,
    navigationOptions: NavigationOptionsModel[],
    pathName: string
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const newNav = [...props.navigationOptions, { label: 'Search', path: '/search', icon: <Search /> }]
    return (
        <Sheet open={open} onOpenChange={setOpen} >
            <SheetTrigger asChild>
                {props?.children}
            </SheetTrigger>
            <SheetContent className=" px-0 pt-2" side='left'>
                <SheetHeader className=" px-6  mb-6">
                    <SheetTitle className=" hidden">Aromaa</SheetTitle>
                    <SheetDescription className=" hidden">
                        Food Recipe App
                    </SheetDescription>
                    <Logo />
                </SheetHeader>

                <div className=" text-base font-medium mb-4">


                    {newNav?.map((item, i) => {
                        return <Link key={i} href={item?.path} onClick={() => setOpen(false)}
                            className={`  flex items-center gap-3 transition-all duration-300 px-6 py-3 
                                 ${props?.pathName === item.path ? " bg-accent/60" :
                                    " hover:bg-accent/60"} `} >
                            <span>{item?.icon}</span>

                            <span>    {item?.label}</span>

                        </Link>
                    })}


                </div>


            </SheetContent>
        </Sheet>

    )
}

export default MobileMenu;