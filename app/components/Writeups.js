'use client'

import React, {useRef,useState,useCallback,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'



const writeupsContent={
    heading:{
        headingSub: "Our Writeups",
        headingTitle: "Our Latest Articles",
        description:"We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations."
    },
    recentUps:[
        {
            premaLink: "#",
            img:"/images/post-1-min.webp",
            title:"10 essential tips for protecting your home from burglaries",
            except:"Learn the best practices and simple steps to sefeguard your home and loved ones from potential break-ins and theft",
            author:{
                img:"/images/person-1-min.webp",
                name:"Alisa Richalison"
            }
        },
        {
            premaLink: "#",
            img:"/images/post-3-min.webp",
            title:"10 essential tips for protecting your home from burglaries",
            except:"Learn the best practices and simple steps to sefeguard your home and loved ones from potential break-ins and theft",
            author:{
                img:"/images/person-2-min.webp",
                name:"jane cooper"
            }
        },
        {
            premaLink: "#",
            img:"/images/post-2-min.webp",
            title:"10 essential tips for protecting your home from burglaries",
            except:"Learn the best practices and simple steps to sefeguard your home and loved ones from potential break-ins and theft",
            author:{
                img:"/images/person-3-min.webp",
                name:"Daven mackeny"
            }
        },
        {
            premaLink: "#",
            img:"/images/post-3-min.webp",
            title:"10 essential tips for protecting your home from burglaries",
            except:"Learn the best practices and simple steps to sefeguard your home and loved ones from potential break-ins and theft",
            author:{
                img:"/images/person-1-min.webp",
                name:"Alisa Richalison"
            }
        },
        {
            premaLink: "#",
            img:"/images/post-1-min.webp",
            title:"10 essential tips for protecting your home from burglaries",
            except:"Learn the best practices and simple steps to sefeguard your home and loved ones from potential break-ins and theft",
            author:{
                img:"/images/person-1-min.webp",
                name:"Alisa Richalison"
            }
        },

    ]

}

function Writeups(){
    const slideRef = useRef(null)

 
    const prevHandler =useCallback(()=>{
        if(!slideRef.current) return;
        slideRef.current.swiper.slidePrev();
    })

    const nextHandler =useCallback(()=>{
        if(!slideRef.current) return;
        slideRef.current.swiper.slideNext();
    })

    return(
        <section className='py-20 bg-light overflow-hidden'>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex justify-between items-center mb-10'>
                    <div className='lg:w-5/12 mb-10 lg:mb-0'>
                        <span className='inline-block z-50 p-1 relative bottom-4 before:content-[""] before:w-9/12 before:h-full before:absolute before:top-0 before:left-0
                         before:bg-yellowLight before:-z-10'>{writeupsContent.heading.headingSub}</span>
                        <h1 className='tracking-wide text-4xl font-bold mb-4'>{writeupsContent.heading.headingTitle}</h1>
                        <p className='text-body'>{writeupsContent.heading.description}</p>
                    </div>
                    
                    <div className='flex space-x-3 w-5/12 text-right lg:justify-end'>
                        <div onClick={prevHandler} className='group transition-all duration-300 w-12 h-12 cursor-pointer bg-gray-200 rounded-full flex justify-center items-center hover:bg-primary'>
                            <MdChevronLeft className={`text-3xl text-primary transition-all duration-300 group-hover:text-white`}/>
                        </div>
                        <div onClick={nextHandler} className={`group transition-all duration-300 w-12 h-12 cursor-pointer bg-gray-200 rounded-full flex justify-center items-center hover:bg-primary`}>
                            <MdChevronRight className={`text-3xl text-primary transition-all duration-300 group-hover:text-white `}/>
                        </div>
                    </div>
                </div>
                <Swiper breakpoints={{
                    640:{
                        spaceBetween: 20, 
                        slidesPerView:1,
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 2
                    },
                    968: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}
                ref={slideRef}
                speed={700} 
                className='z-40 py-32 mb-24 relative flex items-stretch
                !overflow-visible before:content-[""] before:z-50 before:py-32
                before:right-full before:w-screen before:absolute before:top-5
                before:bottom-5 before:bg-light'>

                    {writeupsContent.recentUps.map((blog,index)=>(
                        <SwiperSlide className='overflow-visible h-full'>
                            <div className='p-5 rounded-lg bg-white relative mt-10'>
                                <Link className='relative -mt-10 inline-block overflow-hidden rounded-lg' href={blog.premaLink}>
                                    <Image src={blog.img} width={782} height={467}></Image>
                                </Link>
                                <h2 className='text-heading text-lg font-bold mb-5'>
                                    <Link className='relative text-heading' href={blog.premaLink}>
                                        {blog.title}
                                    </Link>
                                </h2>
                                <p className='relative mb-6'>{blog.except}</p>
                                <div className='flex items-center space-x-4'>
                                    <div className='flex-shrink-0'>
                                        <Image className='rounded-full w-14 h-14 object-cover' src={blog.author.img} width={50} height={50}></Image>
                                    </div>
                                    <div className='leading-5'>
                                        <strong className='text-primary ='>{blog.author.name}</strong>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className='inline-block p-4 rounded-3xl border hover:border-gray-800 transition-all duration-300 -translate-x-1/2 relative left-1/2'>
                    <Link href='#' className='flex space-x-4 items-center '>
                        <p className='text-body'>To view all posts <span className='text-primary  relative before:content-[""] before:absolute before:h-full before:w-px before:bg-body before:left-20 before:bottom-0'>click here</span></p>
                        <MdChevronRight className='text-3xl text-white rounded-full bg-primary relative before:content-[""] before:absolute before:h-full before:w-1 before:bg-primary before:left-0 before:bottom-0'/>
                    </Link>
                </div>
            </div>
        </section>
    )


}

export default Writeups;

