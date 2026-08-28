import SignupDialog from "@/components/SignupDialog"
import TableOfContents from "@/components/TableOfContents"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Discover the Benefits of Life in Alberta | MDC Canada"
}

const tocItems = [
    { id: "about", label: "About Alberta" },

];

function Alberta() {
    return (
        <main className="w-full">
            <section
                className="w-full h-[36em] bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url('/img/bg/img_header_Ontario_desktop.webp')" }}
            >
                <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
                <div className="container relative z-10 h-full flex flex-col justify-center">
                    <div className="flex flex-col justify-center w-full max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
                        <h1 className="text-white text-5xl font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
                            Life in Ontario
                        </h1>
                        <p className="text-lg font-bold mb-10 w-[50%] max-sm:text-center">
                            Learn everything you need to know about life in Ontario, and how to get permanent residency through the Ontario Immigrant Nominee Program (OINP).
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
                    <Link href="/canadian-visas" className="text-gray-400 no-underline"> ABOUT CANADA /</Link>
                    {" "} LIFE IN ONTARIO
                </h3>
            </div>

            <div className="flex gap-8 px-8 py-10 w-full max-w-5xl mx-auto">
                <TableOfContents items={tocItems} />
                <article className="flex-1 min-w-0 flex flex-col gap-12">
                    <div className="flex flex-col gap-6">

                        <p className="text-gray-700 leading-relaxed font-normal">
                            <Link href="/about-canada" target="_blank" className="text-primary hover:underline">Ontario</Link>   is a province known for its cultural diversity and vibrant communities. It is located in east-central Canada and stands as a beacon for immigrants seeking a prosperous and inclusive environment. Home to a diverse population, Ontario proudly embraces individuals from all walks of life, contributing to its rich tapestry of cultures. As of the 2021 census, Ontario boasts a thriving immigrant population of over 3.8 million, representing 23% of the province's total population. This makes it the province with the highest proportion of immigrants in Canada.
                        </p>
                        <div className="flex justify-center">
                            <SignupDialog>
                                <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                                    Start Your Canadian Journey
                                </button>
                            </SignupDialog>
                        </div>
                    </div>
                    <section id="about" className="flex flex-col gap-4 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">About Ontario</h2>
                        <div className="w-full relative h-[28em]">
                            <Image
                                src="/img/province/293c49b1f9222cf0cc5efd049018ce3b.jpg"
                                alt="About Alberta"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-gray-700 leading-relaxed font-normal font-normal">
                            Ontario, Canada's vibrant heartland, beckons with a kaleidoscope of experiences. It's a province where sprawling forests whisper secrets to ancient lakes, bustling cities ignite innovation, and charming towns exude warmth and history. From the thundering roar of Niagara Falls to the serene allure of Algonquin Park, Ontario captivates every sense.
                        </p>
                    </section>
                    <section id="geography" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Geography & Landscape</h2>

                        <p className="text-gray-700 leading-relaxed font-normal">
                            Ontario is Canada's second-largest province, boasting a vast area of over 1 million square kilometers. To put it in perspective, it's larger than France and Spain combined! Imagine a landscape encompassing towering forests, sparkling lakes, rolling hills, and bustling urban centers – that's Ontario!
                        </p>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Ontario's beauty lies in its incredible diversity. Imagine dense boreal forests in the north, home to moose and wolves, transitioning to rolling farmlands and charming towns in the south. The Canadian Shield forms the province's backbone, dotted with thousands of sparkling lakes and rivers. In the south, the majestic Great Lakes – Ontario, Erie, Huron, and Superior – hug the border with the United States, shaping stunning coastlines and offering ample recreational opportunities.
                        </p>

                    </section>
                    <section id="economy" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">What is the population of Ontario?</h2>

                        <p className="text-gray-700 leading-relaxed font-normal">
                            As of 2021, Ontario is home to over 14.5 million people, making it Canada's most populous province. This vibrant population contributes to a dynamic and multicultural society.
                        </p>

                    </section>

                    <section id="culture" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Ontario Economy</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Ontario's economic engines roar with a diverse and dynamic mix of industries. While the province is often recognized for its manufacturing prowess, a closer look reveals a rich tapestry of sectors fueling its success.
                        </p>

                        <p className="text-gray-700 leading-relaxed font-normal">
                            Ontario’s Leading Industries
                        </p>
                        <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                            <li>
                                Manufacturing
                            </li>
                            <li>
                                Finance and Insurance
                            </li>
                            <li>
                                Information and Communications Technology (ICT)
                            </li>
                            <li>
                                Tourism and Hospitality
                            </li>
                            <li>
                                Mining and Forestry
                            </li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Ontario's economic prowess plays a vital role in Canada's national success. The province contributes over 40% of the country's GDP, acting as the engine that drives the nation's economic growth and prosperity. Its diverse industries generate jobs, attract investment, and fuel international trade, solidifying Canada's place on the global economic stage.
                        </p>
                    </section>

                    <section id="tourism" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Ontario's Culture & Heritage</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Ontario's cultural tapestry shimmers with diversity, woven from threads of vibrant festivals, artistic expression, and a rich historical tapestry. From the electrifying beat of the Scotiabank Toronto Caribbean Carnival to the serene echoes of Indigenous powwows, the province pulsates with celebrations throughout the year.
                        </p>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Foodies flock to Niagara-on-the-Lake's Icewine Festival, while art enthusiasts revel in the Toronto International Film Festival. Summer explodes with music at the Stratford Festival, while winter lights up with dazzling displays like the Niagara Falls Winter Festival of Lights.
                        </p>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Ontario, a vibrant mosaic of cultures and backgrounds, reflects this diversity in its linguistic landscape. While English may be the official language, Ontario embraces its multilingual character through various initiatives. Government services are available in French in designated areas, signage often reflects multiple languages, and educational institutions offer support for language learning. Additionally, community centers and cultural organizations provide platforms for celebrating linguistic diversity and fostering understanding.
                        </p>
                    </section>
                    <section id="education" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Tourism</h2>
                        <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                            <li>
                                Ontario's natural splendor and cultural vibrancy paint an unforgettable travel canvas. Thrill to the majestic roar of Niagara Falls, a wonder of nature that mesmerizes with its cascading power.
                            </li>
                            <li>
                                Embark on a wilderness adventure in Algonquin Park, where pristine lakes reflect ancient pine forests and playful moose roam free.
                            </li>
                            <li>
                                Explore the cosmopolitan heart of Toronto, where towering skyscrapers kiss the clouds and diverse neighborhoods brim with artistic flair.
                            </li>
                            <li>
                                In Ottawa, witness the stately Parliament Buildings stand guard over Canada's political pulse, then stroll through charming ByWard Market, a treasure trove of local delights.
                            </li>
                        </ul>
                    </section>
                    <section id="education" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Education</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Ontario boasts a thriving education system renowned for its  {" "}<Link href="/about-canada/saskatchewan" target="_blank" className="text-[#007bff] hover:underline ">world-class universities</Link>, diverse institutions, and innovative approach to learning. Explore a landscape where academic aspirations take flight, fueled by renowned institutions and adaptable systems.
                        </p>
                    </section>
                    <section id="healthcare" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Healthcare</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta's commitment to healthcare is exemplified by a system renowned for its efficiency and accessibility. Prioritizing the well-being of residents, the province offers top-tier medical services that ensure individuals receive the utmost care for their health needs. Whether it's preventative measures, specialized treatments, or emergency care, Alberta's healthcare system is designed to provide comprehensive and high-quality services, contributing to its population's overall health and well-being.
                        </p>
                        <p className="text-gray-700 leading-relaxed font-semibold">
                            Prestigious Universities
                        </p>
                    </section>

                    <section id="transportation" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Transportation</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta boasts efficient transportation networks that seamlessly facilitate travel throughout the province. The well-connected road systems and accessible public transit options simplify daily commutes, promoting connectivity across urban and rural areas. Whether navigating the bustling cityscapes or exploring the vast landscapes, Alberta's transportation infrastructure ensures ease of movement, contributing to the accessibility and interconnectedness of communities across the province.
                        </p>
                    </section>
                    <section id="hclimate" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Climate</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta offers a climate that spans diverse extremes, providing a rich experience of changing seasons. Winters blanket the province in snow, creating a picturesque landscape for winter sports enthusiasts. In contrast, summers bring warmth and sunshine, inviting outdoor activities and exploration. This climatic variability caters to a spectrum of preferences, ensuring there's something for everyone, whether you prefer the serene beauty of snow-covered landscapes or the vibrant energy of summer adventures. Alberta's climate truly offers a dynamic and ever-changing backdrop for residents and visitors alike.
                        </p>
                    </section>
                    <section id="government" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Government and Politics</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta's political landscape is characterized by stability, fostering an environment conducive to residents and newcomers. The province's government is transparent and responsive, ensuring security and inclusivity among its populace. The commitment to open governance creates a framework that promotes citizen engagement and trust, contributing to a robust and harmonious relationship between the government and the people of Alberta. This stability and transparency make Alberta an inviting and secure place for individuals to call home, with a government prioritizing the welfare and participation of its diverse population.
                        </p>
                    </section>
                    <section id="language" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Language</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            English stands as the predominant language in Alberta, playing a pivotal role in fostering effective communication across the province. This linguistic unity serves as a common thread that binds residents together and significantly eases the integration process for newcomers. The prevalence of English in daily life, business, and social interactions creates a sense of community and inclusivity, making it easier for individuals from diverse backgrounds to connect, engage, and seamlessly integrate into the vibrant tapestry of Alberta's society. This valuable linguistic cohesion promotes a shared understanding and a welcoming atmosphere for all.
                        </p>
                    </section>
                    <section id="sport" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Sports and Recreation</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta boasts a dynamic sports and recreation scene, offering a variety of activities for enthusiasts of all kinds. From winter sports like skiing to hiking trails that showcase nature's beauty, the province caters to outdoor lovers. Cultural events, including music festivals and art exhibitions, add vibrancy to the recreational calendar, highlighting Alberta's diverse arts scene. With facilities for sports like hockey and soccer, Alberta promotes a healthy and active lifestyle, ensuring a vibrant and diverse range of recreational options for its residents.
                        </p>
                    </section>
                    <section id="wildlife" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Wildlife and Environment</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            The majestic Rockies are a testament to the province's awe-inspiring landscapes, providing a stunning backdrop for outdoor enthusiasts. Alberta's diverse wildlife further enhances the experience, offering a sanctuary for nature lovers. From the elusive grizzly bears to the graceful elk, the province's ecosystems harbor a rich variety of flora and fauna. Alberta's commitment to preserving its environment ensures that residents and visitors can revel in the serenity and biodiversity that define this natural haven. Whether hiking the Rockies or observing wildlife, Alberta invites individuals to experience the tranquility and grandeur of its unspoiled natural spaces.
                        </p>
                    </section>

                    <section id="cost-living" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Cost of Living</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta's cost of living is roughly 5% higher than the national average. This means you can expect to pay slightly more for things like housing, groceries, and transportation in Alberta compared to other parts of Canada. However, it's important to note that costs can vary significantly within Alberta. Calgary and Edmonton, as the largest cities, naturally have higher living costs than smaller towns and rural areas.
                        </p>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Housing is the main driver of Alberta's higher cost of living. While homeownership has become more affordable in recent years, rent prices in Calgary and Edmonton remain above the national average.
                        </p>

                        <p className="text-gray-900 leading-relaxed font-semibold">
                            Factors Contributing to Alberta's Cost of Living:
                        </p>
                        <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                            <li>
                                Geography and isolation - Alberta's location can add to transportation costs, as goods must be shipped further than central provinces.
                            </li>
                            <li>
                                Energy and utilities - Alberta's economy relies heavily on the energy sector, which can translate to higher fuel and utility costs. However, residents also benefit from lower provincial taxes.
                            </li>
                            <li>
                                Wage differences - Average wages in Alberta are generally higher than the national average, which helps offset the higher cost of living for many residents.
                            </li>
                        </ul>

                    </section>
                    <section id="business-inovation" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Business and Innovation</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta is a prime hub for fostering entrepreneurship, offering an innovative and business-friendly environment for startups and established enterprises. With strategic support systems, accessible funding, and a collaborative network, the province encourages and celebrates the entrepreneurial spirit. Across diverse sectors, from technology to agriculture, Alberta's location, infrastructure, and progressive policies contribute to a dynamic marketplace, providing a launchpad for growth and success. The province is a thriving ecosystem where ambition and innovation converge, driving economic prosperity and establishing a legacy of business excellence.
                        </p>
                        <div className="flex justify-center">
                            <SignupDialog>
                                <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                                    Move to Alberta
                                </button>
                            </SignupDialog>
                        </div>
                    </section>

                </article>
            </div>

        </main>
    )
}

export default Alberta