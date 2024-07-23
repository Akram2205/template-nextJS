import Image from "next/image"
import Link from "next/link"

const testimonialContent={
    text:{
        subHeading: "Welcome to testimonials",
        heading:"Hear What Our Customers Say",
        description: "From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with",
        btn:{
            href:"#",
            label:"Get Started"
        }
    },
    persons:[
        {
            img:"/images/person-1-min.webp",
            name:"Jane Cooper",
            role:"Customer - Dallas, TX",
            description:"“With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!”"
        },
        {
            img:"/images/person-2-min.webp",
            name:"Alisa Richardson",
            role:"Customer - Miami, FL",
            description:"“Installing Family Home Security was the best decision we made for our family's safety. Their quick response during emergencies gave us peace of mind.”"
        },
        {
            img:"/images/person-3-min.webp",
            name:"Davon McKenny",
            role:"Customer - Seattle, WA",
            description:"“After moving to a new neighborhood, I felt vulnerable. Thanks to Family Home Security, I can now sleep soundly, knowing our home is well-protected.”"
        }
    ]
}
function Testimonial(){
    return(
        <section className="bg-light py-20">
            <div className="container px-4 mx-auto">
                <div className="lg:flex lg:space-x-16">
                    <div className="lg:w-4/12">
                        <span className="inline-block relative z-40 mb-4 before:content-[''] before:absolute
                          before:bg-yellowLight before:h-full before:w-4/6 before:top-0 before:left-0 before:-z-10">{testimonialContent.text.subHeading}</span>
                        <h1 className="tracking-wide text-4xl mb-5 font-bold">{testimonialContent.text.heading}</h1>
                        <p className="text-body mb-5">{testimonialContent.text.description}</p>
                        <Link className="inline-block bg-primary w-fit text-white p-5 mb-5 rounded-lg bottom-0 duration-300 ease-in-out relative hover:bottom-1 hover:shadow-2xl" href={testimonialContent.text.btn.href}>
                            {testimonialContent.text.btn.label}
                        </Link>
                    </div>
                    <div className="lg:w-8/12 md:flex md:space-x-8">                        
                        <div className="md:w-6/12 mb-6">
                            {testimonialContent.persons.map((el,idx)=>{
                                if(idx==2){return(null)}
                                return(
                                <div className={`bg-white p-7 rounded-lg w-full ${idx == 0 ? 'mb-6' : ''}`}>
                                    <div className="flex space-x-4 pb-4 items-center">                                            <Image className="rounded-full w-14 h-14" src={el.img} width={50} height={50}></Image>
                                        <div>
                                            <h2 className="text-lg font-semibold">{el.name}</h2>
                                            <p className="text-body text-sm font-thin">{el.role}</p>
                                        </div>
                                    </div>
                                    <p className="font-extralight">{el.description}</p>
                                </div>
                            )})}
                        </div>
                        <div className="md:w-6/12 relative z-30">
                            <div className="md:absolute md:top-10 md:flex md:flex-col md:space-y-8">
                                <div className="hidden md:block w-16 h-16 bg-green-200 rounded-full">
                                </div>
                                {testimonialContent.persons.map((el,idx)=>{
                                    if(idx==0){return(null)}
                                    if(idx==1){return(null)}
                                    return(
                                    <div className={`bg-white p-7 rounded-lg w-full`}>
                                        <div className="flex space-x-4 pb-4 items-center">                                            <Image className="rounded-full w-14 h-14" src={el.img} width={50} height={50}></Image>
                                            <div>
                                                <h2 className="text-lg font-semibold">{el.name}</h2>
                                                <p className="text-body text-sm font-thin">{el.role}</p>
                                            </div>
                                        </div>
                                        <p className="font-extralight">{el.description}</p>
                                    </div>
                                )})}
                                <div className="hidden md:block w-20 h-20 bg-red-300 rounded-2xl rounded-bl-[200px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonial