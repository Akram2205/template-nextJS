import Image from "next/image";

const heroContent = {
    text:{
        subHeading: "welcom from Famsec",
        heading: "Protecting Families, Securing Futures",
        description: "We understand that protecting your loved ones is of utmost importance Thats why we are dedicated to providing comprehensive solutions tailored to your family  unique needs. Our expert team is committed to creating a solid foundation of security and peace of mind for you and your loved ones"
    },
    images:{
        img1:'/images/hero-img-1-min.webp',
        img2:'/images/hero-img-2-min.webp',
        img3:'/images/hero-img-3-min.webp',
        img4:'/images/hero-img-4-min.webp',
        img5:'/images/hero-img-5-min.webp',
    }
    
}

const Hero=()=>{
    return(
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="lg:flex justify-between items-center">
                    <div className="lg:w-5/12 mb-10 lg:mb-0">
                        <span className="inline-block relative mb-7 px-2 before:content-[''] before:absolute
                          before:bg-yellowLight before:h-full before:w-4/6 before:top-0 before:left-0 before:z-[-1]">
                            {heroContent.text.subHeading}
                        </span>
                        <h1 className="text-5xl font-bold mb-7">
                            {heroContent.text.heading}
                        </h1>
                        <p className="text-body mb-7">
                            {heroContent.text.description}
                        </p>
                        <div className="flex space-x-3">
                            <button className="bg-primary text-white p-5 rounded-lg duration-300 relative bottom-0 hover:bottom-1 hover:shadow-2xl">
                                Get started
                            </button>
                            <button className="bg-secondary text-white p-5 rounded-lg duration-300 relative bottom-0 hover:bottom-1 hover:shadow-2xl">
                                How it works?
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-6/12 space-y-2">
                        <div className="flex space-x-2 items-stretch">
                            <div className="w-8/12">
                                <Image className="rounded-2xl object-cover h-full w-full" src={heroContent.images.img1} 
                                width={397} height={406}></Image>
                            </div>
                            <div className="w-4/12 pt-28">
                                <div className="grid grid-cols-2 gap-x-2 mb-2">
                                    <Image className="w-full h-full rounded-2xl" src={heroContent.images.img2} width={50} height={50}></Image>
                                    <div className="w-[50] h-[50] bg-orange-100 rounded-tr-full"></div>
                                </div>
                                <div>
                                    <Image className="w-full rounded-2xl" src={heroContent.images.img3} width={150} height={150}></Image>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <div className="grid grid-cols-2 gap-x-2 w-4/12">
                                <div className="h-28 bg-blue-200 rounded-bl-full"></div>
                                <Image className="w-full h-28 rounded-2xl" src={heroContent.images.img4} width={50} height={50}></Image>
                            </div>
                            <div className="w-5/12">
                                <Image className="w-full h-full rounded-2xl" src={heroContent.images.img5} width={150} height={150}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;