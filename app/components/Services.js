import Image from "next/image";

const servicesContent = {
    heading:{
        headingSub : "Our Awesome Services",
        heading: "our services",
        description: "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs."
    },
    items:[
        {
            icon: "/images/icon.png",
            title: "Financial Planning",
            description:"Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security."
        },
        {
            icon: "/images/icon.png",
            title: "Financial Planning",
            description:"Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security."
        },
        {
            icon: "/images/icon.png",
            title: "Financial Planning",
            description:"Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security."
        },
        {
            icon: "/images/icon.png",
            title: "Financial Planning",
            description:"Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security."
        },
        {
            icon: "/images/icon.png",
            title: "Financial Planning",
            description:"Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security."
        },
        {
            icon: "/images/icon.png",
            title: "Financial Planning",
            description:"Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security."
        },
  
    ]
}

function Services(){
    return(
        <section className="py-20 bg-light relative z-[-2]">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-20">
                    <span className="inline-block relative mb-4 before:content-[''] before:absolute
                          before:bg-yellowLight before:h-full before:w-4/6 before:top-0 before:left-0 before:z-[-1] ">{servicesContent.heading.headingSub}</span>
                    <h1 className=" tracking-wide text-4xl mb-4 font-bold">{servicesContent.heading.heading}</h1>
                    <p className="w-3/6 mx-auto text-body">{servicesContent.heading.description}</p>
                </div> 
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {servicesContent.items.map((el)=>(
                        <div className="flex items-start">
                            <Image className="mr-7 w-20" src={el.icon} width="50" height="50"></Image>
                            <div>
                                <h2 className="font-semibold mb-3">{el.title}</h2>
                                <p className="text-body">{el.description}</p>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>

        </section>
    )
    
}

export default Services;