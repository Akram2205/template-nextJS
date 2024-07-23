import Image from "next/image";
import Link from "next/link";
import { MdDone } from "react-icons/md";

const solutionContent ={
    text:{
        headingSub: "Our Solutions",
        headingTitle: "From safeguarding your home with state-of-the-art alarm systems",
        description:"From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our Family Security Plan, you can rest easy knowing that you've taken the necessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most – your family's well-being",
        features:[
            {
                title: "Home Fire Safety"
            },
            {
                title: "Cybersecurity Solutions"
            },
            {
                title: "Emergency Preparedness"
            },
            {
                title: "Identity Theft Protection"
            },
        ],
        cta:{
            btn1:{
                href:"#",
                label: "Get Started"
            },
            btn2:{
                href: "#",
                label: "How it works?"
            }
        }
    },
    images:{
        img1:"/images/solution-img-1-min.webp",
        img2:"/images/solution-img-2-min.webp",
        img3:"/images/solution-img-3-min.webp",
    },
    experience:{
        year: "25+",
        label:"years of experience"
    }
}

function Solutions(){
    return(
        <section className="py-20 bg-light overflow-x-hidden">
            <div className="container px-4 mx-auto">
                <div className="lg:flex lg:space-x-5 ">
                    <div className="lg:w-7/12 mb-14">
                        <div className="flex space-x-2">
                            <div className="flex space-y-2 flex-col items-end">
                                <Image className="rounded-lg" src={solutionContent.images.img1} width="350" height="350"></Image>
                                <div className="flex space-x-2">
                                    <div className="w-20 h-20 bg-blue-300 rounded-bl-full"></div>
                                    <Image className="rounded-lg" src={solutionContent.images.img3} width="200" height="200"></Image>
                                </div>
                            </div>
                            <div className="flex space-y-2 flex-col">
                                <div className=" bg-purple-400 w-20 h-20 rounded-tr-full"></div>
                                <Image className="rounded-lg" src={solutionContent.images.img2} width="250" height="250"></Image>
                                <div className="shadow-2xl text-center p-6 rounded-lg bg-white">
                                    <h1 className=" text-center text-4xl font-semibold text-primary">{solutionContent.experience.year}</h1>
                                    <p className="text-body">{solutionContent.experience.label}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-5/12">
                        <span className="inline-block relative mb-5 z-40 before:content-[''] before:absolute
                          before:bg-yellowLight before:h-full before:w-4/6 before:top-0 before:left-0 before:-z-10">{solutionContent.text.headingSub}</span>
                        <h1 className="tracking-wide text-4xl mb-5 font-bold">{solutionContent.text.headingTitle}</h1>
                        <p className="text-body mb-7">{solutionContent.text.description}</p>
                        <div className="grid grid-cols-2 mb-6"> 
                            {solutionContent.text.features.map((el)=>(
                                <div className="flex space-x-2 mb-4 items-center">
                                    <MdDone className=" bg-primary text-2xl rounded-full text-white" />
                                    <p className="text-body">{el.title}</p>
                                </div>
                            ))}                            
                        </div>
                        <div className="flex space-x-4">
                            <Link href={solutionContent.text.cta.btn1.href} className="bg-primary text-white p-5 rounded-lg hidden lg:block bottom-0 duration-300 ease-in-out relative hover:bottom-1 hover:shadow-2xl">{solutionContent.text.cta.btn1.label}</Link>
                            <Link href={solutionContent.text.cta.btn2.href} className="bg-secondary text-white p-5 rounded-lg hidden lg:block bottom-0 duration-300 ease-in-out relative hover:bottom-1 hover:shadow-2xl">{solutionContent.text.cta.btn2.label}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solutions