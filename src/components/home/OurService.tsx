import Image from "next/image"

function OurService() {
    return (
        <section className="my-12 container">
            <div className="flex flex-col justify-center items-center space-y-6">
                <h1 className="text-2xl md:text-5xl text-center ">Our Services</h1>
                <span className="h-0.5 w-20 bg-red-500 relative" />
            </div>
            <p className="text-center text-gray-500 font-semibold my-12">
                Our process, refined over many years, takes the frustration and mystery out of applying for a visa.
            </p>
            <div className="grid grid-cols-4 overflow-scroll no-scrollbar gap-4 relative">
                <div className="flex flex-col items-center rounded shadow h-105 space-y-12 shrink-0 bg-[#F7F7F7] p-4">
                    <div className="size-20  relative">
                        <Image alt="" src={"/img/icon/Icon_Services_ProfConsultants.svg"} fill className="object-fit" />
                    </div>
                    <h1 className="text-center text-2xl">
                        Professional Help From Qualified RCICs
                    </h1>

                    <p className="text-center">
                        As licensed consultants, we have the legal authority to consult with clients about living, working or studying in Canada.
                    </p>
                </div>
                <div className="flex flex-col items-center rounded shadow h-105 space-y-12 shrink-0 bg-[#F7F7F7] p-4">
                    <div className="size-20  relative">
                        <Image alt="" src={"/img/icon/Icon_Services_fullEvaluation.svg"} fill className="object-fit" />
                    </div>
                    <h1 className="text-center text-2xl">
                        Personal and Family Eligibility Evaluation
                    </h1>
                    <p className="text-center">
                        We offer cost-effective personal and family immigration evaluation packages to find the best immigration program for you.
                    </p>
                </div>
                <div className="flex flex-col items-center rounded shadow h-105 space-y-12 shrink-0 bg-[#F7F7F7] p-4">
                    <div className="size-20  relative">
                        <Image alt="" src={"/img/icon/Group 453.svg"} fill className="object-fit" />

                    </div>
                    <h1 className="text-center text-2xl">
                        Over 100+ Different Options
                    </h1>
                    <p className="text-center">
                        There is more than one way to immigrate to Canada. We offer advice and tailored solutions across all available categories.
                    </p>
                </div>
                <div className="flex flex-col items-center rounded shadow h-105 space-y-6 shrink-0 bg-[#F7F7F7] p-4">
                    <div className="size-20  relative">
                        <Image alt="" src={"/img/icon/Group 452.svg"} fill className="object-fit" />
                    </div>
                    <h1 className="text-center text-2xl">
                        Step-By-Step Guidance
                    </h1>
                    <p className="text-center">
                        You’re not alone. Our certified professionals will guide and support you through every step of the immigration process.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OurService