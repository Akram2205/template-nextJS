import React from "react";
import Image from "next/image";
import Link from "next/link";
import {BiChevronRight} from 'react-icons/bi'
import { MdPhone } from "react-icons/md";
import { MdLocationOn,MdEmail } from "react-icons/md";

const footerContent={
    about:{
        logo:"/images/logo.webp",
        description:"From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with",
        cta:{
            href:"#",
            label:"Learn more"
        }
    },
    footerLinks:[
        {
            heading: "company",
            links:[
                {
                    href:"#",
                    label:'Home'
                },
                {
                    href:"#",
                    label:'How we work'
                },
                {
                    href:"#",
                    label:'Our mission'
                },
                {
                    href:"#",
                    label:'About'
                },
                {
                    href:"#",
                    label:'Careers'
                },
                {
                    href:"#",
                    label:'About'
                },
                {
                    href:"#",
                    label:'Contact'
                },
            ]
        },
        {
            heading:"Resoureces",
            links:[
                {
                    href:"#",
                    label:"Blog"
                },                
                {
                    href:"#",
                    label:"Support"
                },
                {
                    href:"#",
                    label:"Terms & Condition"
                },
                {
                    href:"#",
                    label:"Privacy and policy"
                },
            ]
        }
    ],
    contact:{
        heading:"Contact",
        description:"Please feel free to reach out to us with any inquiries, questions, or assistance you may need.",
        adress:{
            street:"ouled rahmoune, constantine, Algerie",
            num:"(213) 782404921",
            email:"akramhamlaoui200@gmail.com"
        }
    },
    copyright:{
        label:"Copyright 2023. Designed with  by joefreycodes.com All rights reserved"
    }
}

function Footer(){
    return(
        <section className="py-20 ">
            <div className="container px-4 mx-auto ">
                <div className="lg:flex lg:space-x-20 pb-16 relative after:content-[''] after:absolute after:bg-gray-200 after:w-full after:h-px after:bottom-0 after:left-0">
                    <div className="pb-10 lg:mb-0 lg:w-1/3">
                        <Image className="pb-6" src={footerContent.about.logo} width={100} height={100}></Image>
                        <p className="leading-6 text-body pb-6">{footerContent.about.description}</p>
                        <div className="flex items-center space-x-3">
                            <Link className="text-primary font-semibold" href={footerContent.about.cta.href}>{footerContent.about.cta.label}</Link>
                            <BiChevronRight className="text-xl bg-primary text-white rounded-full"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-20 pb-12 lg:pb-0">
                        {footerContent.footerLinks.map((el)=>(
                            <div>
                                <h2 className="text-lg font-medium pb-6">{el.heading}</h2>
                                {el.links.map((link)=>(
                                    <ul>
                                        <li className="text-body pb-2"><Link href={link.href}>{link.label}</Link></li>
                                    </ul>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-1/3">
                        <h2 className="text-lg font-medium pb-4">{footerContent.contact.heading}</h2>
                        <p className="text-body pb-6">{footerContent.contact.description}</p>
                        <ul>
                            <li className="flex space-x-4 text-body items-center pb-6">
                                <MdLocationOn className="text-primary text-2xl"/>
                                <p>{footerContent.contact.adress.street}</p>
                            </li>
                            <li className="flex space-x-4 text-body items-center pb-4">
                                < MdPhone className="text-primary text-2xl"/>
                                <p>{footerContent.contact.adress.num}</p>
                            </li>
                            <li className="flex space-x-4 text-body items-center pb-4">
                                <MdEmail className="text-primary text-2xl"/>
                                <p>{footerContent.contact.adress.email}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center p-10">
                    <p className="text-body">Copyright 2024. Designed with  by Akram hamlaoui.</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;