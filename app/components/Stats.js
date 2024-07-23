import Link from "next/link"

const statContent={
    stats:[
        {
            number: "99.9%",
            label: "Child Sefety Solution"
        },
        {
            number: "3.19",
            label: "Happy Customers"
        },
        {
            number: "4.8",
            label: "Rating Reviews"
        },
    ],
    getStarted:{
        heading:"Get started with our service?",
        description:"We understand that protecting your loved ones is of utmost importance.",
        cta:{
            cta_href: "#",
            cta_label: "Learn more"
        }
    }
}

function Stats(){
    return(
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="lg:flex space-x-2 items-center">
                    <div className="grid grid-cols-3 gap-x-2 w-full mb-10 lg:mb-0 lg:w-7/12 text-center">
                        {statContent.stats.map((el)=>(
                            <div>
                            <h1 className="text-primary font-bold text-3xl xl:text-5xl mb-3">
                                {el.number}
                            </h1>
                            <p className="text-body">
                                {el.label}
                            </p>
                            </div>                            
                        ))}
                    </div>
                    <div className="bg-light p-4 w-full lg:w-5/12">
                        <h2 className="text-xl font-bold mb-3">{statContent.getStarted.heading}</h2>
                        <p className="text-body mb-2">{statContent.getStarted.description}</p>
                        <div className="pb-3">
                            <Link className="text-primary font-semibold" href={statContent.getStarted.cta.cta_href}>
                                {statContent.getStarted.cta.cta_label}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Stats