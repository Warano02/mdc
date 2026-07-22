import SignupDialog from '@/components/SignupDialog'
import Link from "next/link";
import CanadaStatsSidebar from "@/components/CanadaStatsSidebar";
import Image from 'next/image';
export const metadata = {
    title: "Meet the Experts: Alireza Motahari | MDC Canada",
    description: "Meet Alireza Motahari, discover her expertise, insights, and role in helping clients succeed in Canada."
}
const stats = [
    { iconSrc: "/img/icon/Icon_capitalCity.svg", label: "Capital City", value: "Ottawa" },
    { iconSrc: "/img/icon/Icon_Salary.svg", label: "Average Salary", value: "$64,500" },
    { iconSrc: "/img/icon/icon_unemployment.svg", label: "Unemployment Rate", value: "5.7%" },
    { iconSrc: "/img/icon/Icon_costofliving.svg", label: "Average Living Expenses", value: "$1,024 for one person" },
    { iconSrc: "/img/icon/icon_housingprice.svg", label: "Average price per house", value: "$480,743" },
    { iconSrc: "/img/icon/icon_population.svg", label: "Population", value: "37,297,951" },
    { iconSrc: "/img/icon/icon_industries.svg", label: "Top Industries", value: "Service, Energy, Agriculture, Fishing, Manufacturing, Mining and Tourism" },
    { iconSrc: "/img/icon/icon_temperature.svg", label: "Average Temperatures", value: "Summer average high of 20 to 25°C\nWinter average low of -5 to -15°C" },
];

function page() {
    return (
        <main className="w-full">
            <section className="w-full h-[36em] bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url('/img/home_1.webp')" }}>
                <div className="absolute inset-0 bg-linear-to-r from-[rgba(3,8,59,0.57)] to-[rgba(20,4,92,0.23)]" />
                <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="ml-12 flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full max-md:px-6">
                        <h1 className="text-5xl font-serif mb-6">Meet the Experts: Alireza Motahari</h1>
                        <p className="font-semibold leading-relaxed mb-8 max-w-sm">
                            Meet Alireza Motahari, discover her expertise, insights, and role in helping clients succeed in Canada.
                        </p>
                        <SignupDialog>
                            <button className="border border-white text-white px-8 py-3 w-fit tracking-widest text-sm font-semibold hover:bg-white hover:text-primary transition-colors">
                                GET STARTED
                            </button>
                        </SignupDialog>
                    </div>
                </div>
            </section>
            <div className="w-full border-b border-gray-300 flex items-center px-8 h-12">
                <h3 className="text-xs text-gray-800 max-w-5xl mx-auto">
                    <Link href="/" className="text-gray-400 no-underline">HOME /</Link>
                    {" "}MEET THE EXPERTS: ALIREZA MOTAHARI
                </h3>
            </div>

            <div className="flex gap-12 px-8 py-10 w-full max-w-5xl mx-auto max-md:flex-col">
                <div className="flex flex-col gap-6 flex-1 min-w-0">
                    <h1 className="text-4xl font-bold text-primary border-b border-gray-300 pb-4">Alireza Motahari</h1>
                    <div className="flex gap-8 items-start max-md:flex-col">
                        <Image
                            src="/img/pp/1a6c7b48041dd5e63de87848fe5bc68a.png"
                            alt="Alireza Motahari"
                            width={200}
                            height={220}
                            className="shrink-0 object-contain"
                        />
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-3">
                                <Image src="/img/icon/cicc.png" alt="RCIC Licence" width={36} height={36} className="shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold text-sm text-gray-800">RCIC Licence</p>
                                    <p className="text-sm text-gray-500">RCIC Identification <span className="text-red-600 font-semibold">#R533723</span></p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Image src="/img/icon/location.png" alt="Location" width={36} height={36} className="shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold text-sm text-gray-800">Location</p>
                                    <p className="text-sm text-gray-500">Vancouver, Canada</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Image src="/img/icon/linkedin.png" alt="LinkedIn" width={36} height={36} className="shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold text-sm text-gray-800">Alireza Motahari</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 px-8 py-10 w-full max-w-5xl mx-auto max-md:flex-col">
                <article className="flex-1 min-w-0 flex flex-col gap-4">
                    <p className="text-sm leading-relaxed text-gray-700">
                        Giovanni (RCIC Identification{" "}
                        <Link href="" className="text-red-600 hover:underline">#R705710</Link>
                        ) has had years of experience with immigration both in Canada and in his country of origin, bringing hundreds of hopeful applicants to a better life overseas. As an immigrant himself, Giovanni knows exactly why people are so desperate to move to Canada and knows exactly what to expect at every turn of the application process.
                    </p>
                    <p className="text-sm leading-relaxed text-gray-700">
                        As a result, Giovanni provides realistic, clear advice to ensure applicants get through their application process as easily and effectively as possible. He makes it his mission to present applicants with realistic expectations and to understand and aid every aspect of their application as much as possible.
                    </p>
                    <p className="text-sm leading-relaxed text-gray-700">
                        Giovanni knows the importance of understanding the situation of each and every applicant and will make a point of understanding your circumstances and utilizing them to get you the best results possible.
                    </p>
                    <p className="text-sm leading-relaxed text-gray-700">
                        Giovanni knows exactly what the IRCC wants from you and knows what you need in order to draft the most accurate application. The combination of years of experience and several qualifications has given him an encyclopedic knowledge of the immigration process and a genuine understanding of both the IRCC and the applicant's position.
                    </p>
                    <p className="text-sm leading-relaxed text-gray-700">
                        With Giovanni, you can be sure you get some of the most established and experienced support available, giving you the best possible chance of completing your journey to Canada.
                    </p>
                    <div className="w-full mt-4">
                        <Image
                            src="/img/Ask_Ali_Motahari (1)-1673615255843.jpg"
                            alt="Ask The Expert: Giovanni Mariella"
                            width={600}
                            height={300}
                            className="w-full object-cover"
                        />
                    </div>
                </article>
                <CanadaStatsSidebar stats={stats} />
            </div>
        </main>
    )
}

export default page