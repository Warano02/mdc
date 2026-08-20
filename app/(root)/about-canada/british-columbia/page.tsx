import SignupDialog from "@/components/SignupDialog"
import TableOfContents from "@/components/TableOfContents"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Life in British Columbia, Canada|MDC Canada"
}

const tocItems = [
    { id: "what-is", label: "What is Express Entry Canada?" },
    { id: "how-to-apply", label: "How To Apply for Express Entry" },
    { id: "faqs", label: "FAQs" },
];

function BritishColumbia() {
    return (
        <main className="w-full">
            <section
                className="w-full h-[36em] bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url('/img/title/img_header_knownagents_desktop.webp')" }}
            >
                <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
                <div className="container relative z-10 h-full flex flex-col justify-center">
                    <div className="flex flex-col justify-center w-full max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
                        <h1 className="text-white text-5xl font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
                            Life in British Columbia
                        </h1>
                        <p className="text-lg font-bold mb-10 max-sm:w-[95%] max-sm:text-center">
                            Get on the path to claiming permanent residency in British Columbia with our detailed compilation of life in British Columbia!
                        </p>
                        <SignupDialog>
                            <button className="w-[10em] h-10 font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer">
                                GET STARTED
                            </button>
                        </SignupDialog>
                    </div>
                </div>
            </section>


            <div className="container w-full border-b border-gray-300 flex items-center px-8 h-12">
                <h3 className="text-xs text-gray-800">
                    <Link href="/" className="text-gray-400 no-underline">HOME /</Link>
                    <Link href="/canadian-visas" className="text-gray-400 no-underline"> CANADIAN VISAS /</Link>
                    {" "}EXPRESS ENTRY SYSTEM
                </h3>
            </div>

            <div className="flex gap-8 px-8 py-10 w-full max-w-5xl mx-auto">
                <TableOfContents items={tocItems} />
                <article className="flex-1 min-w-0 flex flex-col gap-12">
                    <div className="flex flex-col gap-6">
                        <p className="text-gray-700 leading-relaxed">
                            Nestled between the rugged Pacific coastline and the majestic Rocky Mountains, British Columbia is a province that beckons with a tapestry of natural wonders and vibrant cityscapes. From the urban allure of Vancouver to the historic charm of Victoria, the province is a mosaic of diverse experiences.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Explore the top educational hubs in Canada, where international students thrive amidst vibrant cultures and academic excellence, from the bustling metropolis of Toronto to the coastal charm of Halifax!
                        </p>
                        <div className="flex justify-center">
                            <SignupDialog>
                                <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                                    Start Your Canadian Journey
                                </button>
                            </SignupDialog>
                        </div>
                    </div>
                    <section id="what-is" className="flex flex-col gap-4 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">About British Columbia</h2>
                        <div className="w-full relative h-[20em]">
                            <Image
                                src="/img/4659756bc8a5b2fcc15d652c8135023e.jpg"
                                alt="How to apply for Express Entry"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Nestled in the westernmost part of Canada,{" "}  <Link href="/about-canada/british-columbia" className="text-primary hover:underline">British Columbia</Link> is a province that boasts a myriad of fascinating facts. To start, it houses the stunning  {" "}  <Link href="#" className="text-primary hover:underline">Pacific Rim National Park Reserve</Link>, a haven for nature enthusiasts, where rainforests meet the ocean in a mesmerizing blend.
                            <Link href="https://parks.canada.ca/pn-np/bc/pacificrim" target="_blank" className="text-primary hover:underline">Immigration, Refugees, and Citizenship Canada</Link>

                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            The province is home to the iconic Whistler Blackcomb, one of the largest and most renowned ski resorts globally, drawing winter sports enthusiasts from around the globe. British Columbia's coastline stretches over 27,000 kilometers, showcasing a diverse range of marine life, from orcas to sea lions. Vancouver, one of its vibrant cities, consistently ranks as one of the most livable cities globally, with a dynamic mix of cultures and a thriving arts scene.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The historic gold rush town of Barkerville provides a glimpse into British Columbia's rich history, immersing visitors in the 19th-century atmosphere. Lastly, the provincial flag proudly displays a Union Jack, reflecting its historical ties to the British Empire.
                        </p>

                    </section>
                    <section id="how-to-apply" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Where is British Columbia on The Map?</h2>

                        <p className="text-gray-700 leading-relaxed">
                            British Columbia is situated on the west coast of Canada, bordered by the Pacific Ocean to the west and the province of  {" "}  <Link href="/about-canada/alberta" className="text-primary hover:underline">Alberta</Link> to the east. It shares its southern border with the United States, specifically the states of Alaska, Washington, Idaho, and Montana.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The capital city of British Columbia is Victoria, located on Vancouver Island, while the largest city is Vancouver, considered one of the most livable cities in the world.
                        </p>
                    </section>
                    <section id="how-to-apply" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Economy and Industries in British Columbia</h2>

                        <p className="text-gray-700 leading-relaxed">
                            British Columbia has a diverse and robust economy, driven by various industries. One of the main contributors to the province's economy is the resource sector, including forestry, mining, and natural gas extraction. The coastal region is rich in timber, making forestry a significant industry in British Columbia. Additionally, the province is abundant in mineral resources which contribute to the mining sector's growth. This includes:
                        </p>
                        <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                            <li>Coal,</li>
                            <li>Copper,</li>
                            <li>Gold,</li>
                            <li>Silver, and</li>
                            <li>Molybdenum.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            The technology sector in British Columbia is also thriving, with Vancouver being dubbed as "Silicon Valley North." The city has a vibrant start-up ecosystem and is home to numerous tech companies, attracting talent from around the world. Other notable industries in British Columbia include film and television production, tourism, agriculture, and manufacturing.
                        </p>
                    </section>

                    <section id="how-to-apply" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Climate/ Weather in British Columbia</h2>
                        <p className="text-gray-700 leading-relaxed">
                            British Columbia experiences a diverse climate due to its vast geographical features. The province is known for its mild winters and warm summers, making it an ideal destination for outdoor activities throughout the year. The hottest month is July when daily highs reach 28°C (82.4°F) and lows come to around 11°C (51.8°F) according to Weatherspark.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            The coastal regions, including Vancouver and Victoria, have a temperate climate, with mild winters and moderate rainfall. In contrast, the interior regions have a drier and more continental climate, with hotter summers and colder winters. Winter temperatures reach lows around -21°C (5.8°F) and highs of 7°C (44.6°F) based on information from  {" "}  <Link href="https://weatherspark.com/countries/CA/02/about-canada/alberta" target="_blank" className="text-primary hover:underline">Weatherspark</Link>.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The province's mountainous areas, such as Whistler and the Rocky Mountains, offer excellent winter sports opportunities with abundant snowfall. The northern regions of British Columbia have a subarctic climate, with long, cold winters and shorter, cool summers.
                        </p>
                    </section>

                    <section id="how-to-apply" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Demographics in British Columbia</h2>
                        <p className="text-gray-700 leading-relaxed">
                            British Columbia is a diverse province with a multicultural population. The province has a significant immigrant population, with people from various backgrounds and cultures calling it home. Vancouver, in particular, is known for its cultural diversity, attracting individuals from all over the world.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            The indigenous population of British Columbia is also an essential part of the province's identity and culture. Major immigrant ethnic groups in Canada include: Chinese, Indian, Ukrainian, Dutch, Filipino, Italian, and Polish.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            English is the primary language spoken in British Columbia, followed by Punjabi, Chinese, Tagalog, and various Indigenous languages.
                        </p>
                        <div className="flex justify-center">
                            <SignupDialog>
                                <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                                    Find Your Pathway
                                </button>
                            </SignupDialog>
                        </div>
                    </section>

                    <section id="how-to-apply" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Education in British Columbia</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Children in British Columbia between the ages of 5 and 18 attend Kindergarten from elementary or secondary school (from Kindergarten to Grade 12). You can enroll your child in either a public or independent school. There are approximately 360 independent schools and 1,590 public schools in British Columbia.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Many schools in British Columbia provide support services for students whose first language is not English. Public schools in British Columbia follow the  {" "}  <Link href="https://curriculum.gov.bc.ca/" target="_blank" className="text-primary hover:underline"> British Columbia Curriculum</Link>, which focuses on a well-rounded education and prepares students for higher education or the workforce.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The province is also home to several renowned universities and colleges, including the:
                        </p>
                        <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                            <li>University of British Columbia,</li>
                            <li>Simon Fraser University,</li>
                            <li>GUniversity of Victoria, and</li>
                            <li>University of Canada West.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            These institutions offer a wide range of programs and attract students from around the world. British Columbia is the first province in Canada that provides students with a globally recognized seal of quality for tertiary institutions, the Education Quality Assurance (EQA) designation.
                        </p>
                    </section>
                    <section id="how-to-apply" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Major Cities in British Columbia</h2>
                        <p className="text-gray-700 leading-relaxed">
                            British Columbia is home to several major cities, each with its unique charm and attractions. Vancouver, the largest city in the province, is a bustling metropolis known for its stunning skyline, vibrant arts scene, and diverse culinary offerings. The city offers a mix of urban amenities and outdoor recreational opportunities, with nearby mountains and the Pacific Ocean just a short drive away.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Victoria, the capital of British Columbia, is located on Vancouver Island and offers a more laid-back and picturesque setting. Known for its historic architecture, beautiful gardens, and charming harbor, Victoria is a popular destination for tourists and residents alike.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Other notable cities in British Columbia include Kelowna, known for its wineries and outdoor activities, and Whistler, renowned for its world-class ski resorts and mountain biking trails.
                        </p>

                    </section>

                </article>
            </div>

        </main>
    )
}

export default BritishColumbia