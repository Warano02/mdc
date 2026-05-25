
import Link from "next/link";
import SignupDialog from "@/components/SignupDialog";
import CanadaStatsSidebar from "@/components/CanadaStatsSidebar";
export const metadata = {
    title: "Meet the Experts: Roli Mathur | MDC Canada",
    description: "Meet Roli Mathur, discover her expertise, insights, and role in helping clients succeed in Canada."
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

export default function RoliMathurPage() {
    return (
        <main className="w-full">
            <section className="w-full h-[36em] bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url('/img/home_1.webp')" }}>
                <div className="absolute inset-0 bg-linear-to-r from-[rgba(3,8,59,0.57)] to-[rgba(20,4,92,0.23)]" />
                <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="ml-12 flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full max-md:px-6">
                        <h1 className="text-5xl font-serif mb-6">Meet the Experts: Roli Mathur</h1>
                        <p className="font-semibold leading-relaxed mb-8 max-w-sm">
                            Meet Roli Mathur, discover her expertise, insights, and role in helping clients succeed in Canada.
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
                <h3 className="text-xs text-gray-800">
                    <Link href="/" className="text-gray-400 no-underline">HOME /</Link>
                    {" "}MEET THE EXPERTS: ROLI MATHUR
                </h3>
            </div>

            <div className="flex gap-8 px-8 py-10 w-full max-w-5xl mx-auto max-md:flex-col">
                <article className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed text-gray-700">
                        Roli (RCIC Identification{" "}
                        <Link href="" className="text-red-600 hover:underline">#R708113</Link>
                        ) has had years of experience with immigration both in Canada and in his country of origin, bringing hundreds of hopeful applicants to a better life overseas. As an immigrant herself, Roli knows exactly why people are so desperate to move to Canada and knows exactly what to expect at every turn of the application process.
                    </p>
                </article>
                <CanadaStatsSidebar stats={stats} />
            </div>
        </main>
    );
}