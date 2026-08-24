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
    { id: "geography", label: "Geography" },
    { id: "economy", label: "Economy" },
    { id: "culture", label: "Culture and Heritage" },
    { id: "tourism", label: "Tourism" },
    { id: "education", label: "Education" },
    { id: "healthcare", label: "Healthcare" },
    { id: "transportation", label: "Transportation" },
    { id: "hclimate", label: "Climate" },
    { id: "government", label: "Government and Politics" },
    { id: "language", label: "Language" },
    { id: "sport", label: "Sports and Recreation" },
    { id: "wildlife", label: "Wildlife and Environment" },
    { id: "cost-living", label: "Cost of Living" },
    { id: "business-inovation", label: "Business and Innovation" },
];

function Alberta() {
    return (
        <main className="w-full">
            <section
                className="w-full h-[36em] bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url('/img/bg/img_header_Alberta_desktop.webp')" }}
            >
                <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
                <div className="container relative z-10 h-full flex flex-col justify-center">
                    <div className="flex flex-col justify-center w-full max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
                        <h1 className="text-white text-5xl font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
                            Life in Alberta
                        </h1>
                        <p className="text-lg font-bold mb-10 w-[50%] max-sm:text-center">
                            Learn everything you need to know about life in Alberta, and how to get permanent residency through the Alberta Immigrant Nominee Program (AINP).
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
                    {" "} LIFE IN ALBERTA
                </h3>
            </div>

            <div className="flex gap-8 px-8 py-10 w-full max-w-5xl mx-auto">
                <TableOfContents items={tocItems} />
                <article className="flex-1 min-w-0 flex flex-col gap-12">
                    <div className="flex flex-col gap-6">
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta,{" "}<Link href="/about-canada" target="_blank" className="text-primary hover:underline">Canada</Link>, is a testament to this remarkable province's breathtaking beauty and boundless opportunities. Alberta has diverse landscapes, from the majestic mountains to the expansive prairies. Beyond its scenic allure, Alberta boasts a thriving economy, a rich cultural heritage, and a welcoming atmosphere that makes it a sought-after destination for those seeking a new chapter in life.
                        </p>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Join us as we embark on a journey through the heart of Canada, exploring the wonders of Alberta and delving into the unique blend of nature, prosperity, and cultural richness that define this extraordinary province. We will also take you through some options for gaining Canadian permanent residency.
                        </p>
                        <div className="flex justify-center">
                            <SignupDialog>
                                <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                                    Learn More About Alberta
                                </button>
                            </SignupDialog>
                        </div>
                    </div>
                    <section id="about" className="flex flex-col gap-4 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">About Alberta</h2>
                        <div className="w-full relative h-[28em]">
                            <Image
                                src="/img/province/About Alberta-50-1704872641702.jpg"
                                alt="About Alberta"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-gray-700 leading-relaxed font-normal font-normal">
                            Home to the Rocky Mountains, rolling prairies, and myriad natural wonders, Alberta beckons nature enthusiasts and adventure seekers alike. Boasting a robust economy driven by industries such as oil and gas, the province stands as an economic powerhouse, offering a promising environment for career growth. Alberta's cultural tapestry is woven with a rich heritage, seamlessly blending traditional roots with contemporary influences.
                        </p>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            With top-tier educational institutions, world-class healthcare, and efficient transportation networks, Alberta creates an environment that fosters personal and professional success. Whether exploring its vibrant cities or immersing oneself in the serene wilderness, Alberta is a province where opportunity, natural beauty, and a high quality of life converge in perfect harmony.
                        </p>

                    </section>
                    <section id="geography" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Geography</h2>

                        <p className="text-gray-700 leading-relaxed font-normal">
                            Imagine a majestic tapestry woven from the threads of diverse landscapes: snow-capped mountains piercing the clouds, endless emerald prairies swaying in the wind, and whispering boreal forests teeming with life. This is the essence of Alberta, a captivating province nestled in the west-central heart of Canada. Its western edge brushes against the towering Canadian Rockies, forming a natural border with British Columbia.  {" "}<Link href="/about-canada/saskatchewan" target="_blank" className="text-[#007bff] hover:underline ">Saskatchewan</Link> whispers across the prairies in the east while the  {" "}<Link href="/about-canada/saskatchewan" target="_blank" className="text-[#007bff] hover:underline ">Northwest Territories</Link> stretch northward, their vast wilderness beckoning adventurous souls. To the south, the 49th parallel forms a gentle border with the United States, Montana's plains mirroring Alberta's endless grasslands.
                        </p>

                    </section>
                    <section id="economy" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Economy</h2>

                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta's economic prowess is undeniable, primarily fueled by industries such as oil and gas. This province is a thriving hub for career development and financial stability, making it an attractive destination for professionals seeking prosperity.
                        </p>

                    </section>

                    <section id="culture" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Culture and Heritage</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta's cultural and heritage diversity is a vibrant blend of indigenous traditions and multicultural influences. Indigenous communities, including the Cree, Blackfoot, and Métis, contribute significantly to the cultural fabric, celebrated through festivals and events. The province's commitment to multiculturalism is evident in various cultural gatherings, museums, and galleries, fostering inclusivity.
                        </p>

                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta's arts scene, represented by institutions like the Alberta Ballet, showcases a harmonious blend of tradition and innovation. Historic sites like Fort Edmonton Park and Head-Smashed-In Buffalo Jump provide tangible connections to the past, preserving the stories of settlers and indigenous cultures. Through Powwows, multicultural celebrations, and historical landmarks, Alberta's cultural and heritage landscape thrives, offering a dynamic tapestry that reflects its rich history and contemporary diversity.
                        </p>

                    </section>

                    <section id="tourism" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Tourism</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta beckons both residents and tourists with a wealth of diverse attractions. Banff National Park, a UNESCO World Heritage Site, is enchanting with its pristine landscapes and alpine charm. Calgary, the province's largest city, offers a vibrant urban experience, highlighted by the iconic Calgary Stampede. For history enthusiasts, the Badlands and Drumheller showcase geological wonders and house the renowned Royal Tyrrell Museum. From Jasper National Park to Writing-on-Stone Provincial Park, Alberta's tourism promises a varied and unforgettable experience, catering to outdoor adventurers, culture seekers, and history enthusiasts alike.
                        </p>
                    </section>
                    <section id="education" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Education</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta boasts world-class educational institutions, such as the University of Alberta and the University of Calgary, renowned for offering diverse programs and fostering academic excellence. These institutions provide students with a supportive learning environment, emphasizing innovation and personal development. Alberta's education system prepares students for the modern world, offering a range of opportunities for learners at different academic levels and disciplines.
                        </p>
                    </section>
                    <section id="healthcare" className="flex flex-col gap-6 scroll-mt-32">
                        <h2 className="text-4xl text-primary font-serif">Healthcare</h2>
                        <p className="text-gray-700 leading-relaxed font-normal">
                            Alberta's commitment to healthcare is exemplified by a system renowned for its efficiency and accessibility. Prioritizing the well-being of residents, the province offers top-tier medical services that ensure individuals receive the utmost care for their health needs. Whether it's preventative measures, specialized treatments, or emergency care, Alberta's healthcare system is designed to provide comprehensive and high-quality services, contributing to its population's overall health and well-being.
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