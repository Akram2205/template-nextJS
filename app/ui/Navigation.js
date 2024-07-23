'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md"

const navigationMenu ={ 
    logo:"/images/logo.webp",
    menu:[
        {
        href: '#',
        label: 'Home'
        },
        {
            href: '#',
            label: 'How we work'
        },
        {
            href: '#',
            label: 'Our mission'
        },
        {
            href: '#',
            label: 'About'
        },
        {
            href: '#',
            label: 'Contact'
        },
    ],
    cta:{
        href:"#",
        label:"Get Started"
    }
}

function Navigation(){
    const [navOpen, setNavOpen]= useState(false);
    function change(){
        setNavOpen(!navOpen);
    }
    return(
        <>
            <div  className="container mx-auto px-4">
                <div className="flex justify-between items-center py-5">
                    <div>
                        <Image src={navigationMenu.logo} width={100} height={100}></Image>
                    </div>
                    <ul className="lg:flex hidden space-x-5 text-body">                            {navigationMenu.menu.map((el)=>(
                            <li><Link href={el.href}>{el.label}</Link></li>
                        ))}
                    </ul>
                    <div className="">
                        <Link className="hidden relative lg:inline-block bg-primary text-white p-5 rounded-lg bottom-0 transition-all duration-300 hover:bottom-1 hover:shadow-lg" href={navigationMenu.cta.href}>{navigationMenu.cta.label}</Link>
                        <RiMenuFill onClick={change} className="lg:hidden text-2xl"/>
                    </div>    
                </div>
            </div>
            {/*for mobile */}
            <div onClick={change} className={`${navOpen ? "z-50 fixed bg-black opacity-50 w-full h-screen top-0" : "hidden"}`}>
            </div>
            <div className={`${navOpen ? " fixed bg-white h-screen w-[380px] z-50 top-0 right-0" : "hidden"}`}>
                <div className="flex px-10 py-4 space-x-4 border-b items-center">
                    <IoCloseOutline onClick={change} className="text-black text-2xl" />
                    <p className="text-body">Close</p>
                </div>
                <div className="px-10 pt-5 space-y-4">
                    {navigationMenu.menu.map((el)=>(
                        <ul>
                            <li className="flex text-body items-center space-x-2 group transition-all duration-300 hover:text-primary ">
                                <Link href={el.href}>{el.label}</Link>
                                <MdArrowForwardIos className="relative text-xs opacity-0 left-0 group-hover:opacity-100 group-hover:left-2 transition-all duration-300 "/>
                            </li>
                        </ul>
                    ))}
                    <Link className="relative inline-block bg-primary text-white p-5 rounded-lg bottom-0 transition-all duration-300 hover:bottom-1 hover:shadow-lg" href={navigationMenu.cta.href}>{navigationMenu.cta.label}</Link>
                </div>
                <div>
                
                </div>
              </div>
        </>
    ) 
}


export default Navigation;
