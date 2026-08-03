import SignupDialog from '@/components/SignupDialog'
import Image from 'next/image'
import Link from 'next/link'
export const metadata = {
    title: "Our RCIC - Canadian Immigration & Visa Services | MDC Canada"
}
const members = [
    {
        name: "Roli Mathur",
        id: "#R708113",
        bio: "Roli has a deep passion for immigration and international policies. Her enduring interest has shaped her academic journey, focusing on areas related to governance and international affairs.",
        src: "/img/pp/5c96549ea33199fc038a08de1b7471a6.png",
        href: "/about-us/roli-mathur",
    },
    {
        name: "Alireza Motahari",
        id: "#R533723",
        bio: "Alireza Motahari is a hugely experienced RCIC who has been instrumental in helping dozens of hopeful immigrants follow their dreams in Canada. Alireza is a certified professional and is highly knowledgeable about the Canadian immigration process through his role as an RCIC and as someone who immigrated to Canada himself in 2012. As an RCIC, Alireza is highly experienced and passionate about getting more people the chance to live the life of their dreams in Canada. His advice and guidance can ensure you get the start you're looking for.",
        src: "/img/pp/1a6c7b48041dd5e63de87848fe5bc68a.png",
        href: "/about-us/alireza-motahari",
    },
    {
        name: "Giovanni Mariella",
        id: "#R705710",
        bio: "With a Master's Degree in Law, Master's in Business Administration and Administrative Law, and a Diploma in European policies, Giovanni Mariella has 20 years of international experience in supporting private firms and public entities even in topics as immigration and public policies for the local development. Today Giovanni is a qualified RCIC serving the Canadian dream with an innate passion for helping the people.",
        src: "/img/pp/037c70dbc1c812f6b2091688804d7b17.png",
        href: "/about-us/giovanni-mariella",
    },
];

function page() {
    return (
        <main>
            <section className="w-full h-[36em] bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url('/img/title/intro.jpg')" }}>
                <div className="absolute inset-0 " />
                <div className="container not-only-of-type:relative z-10 h-full flex flex-col justify-center">
                    <div className="flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
                        <h1 className="text-white text-5xl font-serif mb-6">About Us</h1>
                        <p className="font-semibold leading-relaxed mb-8 max-w-sm">
                            We provide the guidance and services to make your Canadian immigration process easy, affordable, and reliable.
                        </p>
                        <SignupDialog>
                            <button className="border border-white text-white px-8 py-3 w-fit tracking-widest text-sm font-semibold hover:bg-white hover:text-primary transition-colors">
                                GET EVALUATED
                            </button>
                        </SignupDialog>
                    </div>
                </div>
            </section>
            <section className="w-full py-16 flex flex-col items-center gap-12">
                <h1 className="text-5xl font-serif text-primary">Meet Our Team</h1>

                <div className="flex gap-12 w-full container items-start max-md:flex-col max-md:items-center">
                    <Image
                        src="/img/pp/172522ec1028ab781d9dfd17eaca4427.png"
                        alt="David Allon"
                        width={200}
                        height={220}
                        className="shrink-0 object-contain"
                    />

                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl font-bold text-primary">David Allon</h2>
                        <p className="font-bold text-sm text-gray-800">Chief Executive Officer, MDC</p>
                        <p className="text-sm leading-relaxed text-gray-700">
                            David Allon serves as the Chief Executive Officer of MDC, bringing with him extensive leadership experience and a strong background in public administration and strategic management. With a Master's in Public Administration (MPA), a Bachelor's Degree in Business and Government, and a Diploma in European Studies, David combines academic excellence with a practical, results-driven approach to organizational growth.
                        </p>
                        <p className="text-sm leading-relaxed text-gray-700">
                            As CEO, David is responsible for overseeing the company's strategic direction, operational performance, and long-term vision. His leadership is defined by a commitment to transparency, innovation, and creating high-impact solutions that drive the company's success in a competitive global market.
                        </p>
                        <p className="text-sm leading-relaxed text-gray-700">
                            Under his guidance, MDC is focused on expanding its presence, strengthening its partnerships, and delivering exceptional value to his clients. David is passionate about building strong teams and fostering a culture of integrity, excellence, and accountability.
                        </p>
                    </div>
                </div>

                <p className="text-sm text-center text-gray-700 w-[60%] max-md:w-[90%]">
                    Our{" "}
                    <Link href="/rcic" className="text-blue-600 hover:underline">
                        Regulated Canadian Immigration Consultants (RCICs)
                    </Link>{" "}
                    know what it takes to guide you through the immigration process until you safely arrive in Canada.
                </p>
            </section>
            <div className="flex flex-col gap-12  container py-10">
                {members.map((member) => (
                    <div key={member.name} className="flex gap-10 items-start max-md:flex-col max-md:items-center">
                        <Image
                            src={member.src}
                            alt={member.name}
                            width={200}
                            height={220}
                            className="shrink-0 object-contain"
                        />
                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl font-bold text-primary">{member.name}</h2>
                            <p className="text-sm text-gray-600">
                                RCIC Identification{" "}
                                <span className="text-red-600 font-semibold">{member.id}</span>
                            </p>
                            <p className="text-sm leading-relaxed text-gray-700">{member.bio}</p>
                            <Link
                                href={member.href}
                                className="mt-2 w-fit bg-red-600 text-white text-xs font-bold tracking-widest px-6 py-3 hover:bg-red-700 transition-colors no-underline"
                            >
                                READ THE FULL BIO
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default page