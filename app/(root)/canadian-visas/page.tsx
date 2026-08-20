import Image from "next/image";
import Link from "next/link";
import SignupDialog from "@/components/SignupDialog";
export const metadata = {
  title: "Canada Visas & Immigration Programs"
}
const visaItems = [
  {
    title: "Express Entry",
    image: "/img/g/img_expressEntry_desktop.jpg",
    href: "/canadian-visas/express-entry-system",
    imageLeft: true,
    text: "The Express Entry System allows skilled foreign workers to request permanent residency in Canada. It manages the Federal Skilled Worker Program, Skilled Trades Program and Canadian Experience Class. Once you have created an online profile, you will be scored according to the Comprehensive Ranking System (CRS) and ranked against other candidates. The Express Entry System is designed to fast-track the entire process and if successful, you will be able to relocate in as little as six months!",
  },
  {
    title: "Provincial Nominee Program",
    image: "/img/g/img_PNP_desktop.jpg",
    href: "/canadian-visas/business-immigration-programs",
    imageLeft: false,
    text: "The Provincial Nominee Program (PNP) allows foreign skilled workers to earn permanent residence if they commit to living and working in a particular region of Canada. Each province and territory has its own version of the PNP that is designed to address their specific labour market needs. With a provincial nomination, you will receive an extra 600 points to add to your Comprehensive Ranking System score, which essentially guarantees you will be invited to request Canadian permanent residency.",
  },
  {
    title: "Family Sponsorship Program",
    image: "/img/g/img_FamSponsership_desktop.jpg",
    href: "/canadian-visas/family-sponsorship-visa",
    imageLeft: true,
    text: "The Family Sponsorship Program is aimed at assisting permanent residents and citizens of Canada to sponsor their parents, spouse, children and other relatives for Canadian permanent residence. Candidates who are over 18 and legally live in Canada may be eligible.",
  },
  {
    title: "Start-up Program",
    image: "/img/g/img_startupvisa_desktop.jpg",
    href: "#",
    imageLeft: false,
    text: "Ranked by Forbes as the 6th best country for business startups, Canada is an entrepreneur's dream. The Start-up Program is designed for innovative immigrant entrepreneurs who want to start a new business in Canada that will not only be able to create jobs but also compete on a global scale.",
  },
  {
    title: "Study Permit",
    image: "/img/g/img_studentvisa_desktop.jpg",
    href: "/canadian-visas/student-visa",
    imageLeft: true,
    text: "Canadian Study Permit allow candidates to study at any tertiary institution in the country and work on a part-time basis. It is perfect for candidates who want the opportunity to earn a world-class education or for postgraduates who would like to further their tertiary education at some of the most innovative and renowned institutions in the world.",
  },
  {
    title: "Tourist Permit",
    image: "/img/g/img_touristvisa_desktop.jpg",
    href: "/canadian-visas/tourist-visa",
    imageLeft: false,
    text: "The Tourist Permit allows you to discover the best that Canada has to offer for up to six months. Canada has over 40 National parks and Reserves to explore, beautiful lakes and rivers to canoe down, magnificent ice-covered mountains to hike, never-ending coastlines to visit and the awe-inspiring northern lights to behold. There are numerous international festivals and events to attend, as well as a vibrant art scene and bustling nightlife.",
  },
  {
    title: "Working Holiday Program",
    image: "/img/g/img_workingholiday_desktop.jpg",
    href: "/canadian-visas/working-holiday-visa/",
    imageLeft: true,
    text: "The Working Holiday Program is for young adults who crave new experiences in a foreign country. This program allows applicants to travel and work in Canada for up to two years. It is aimed at those who not only want to gain experience to add to their resumes but also for those who would like to eventually request permanent residence. Options include the Working Holiday, Young Professionals and International Internship Programs.",
  },
  {
    title: "Pilot Programs",
    image: "/img/g/img_caregiver_desktop.jpg",
    href: "/canadian-visas/business-immigration-programs",
    imageLeft: false,
    text: "The Atlantic Immigration Pilot, Agri-food Pilot and the Rural & Northern Immigration Pilot are exciting new ways for hard working immigrants to become permanent residents by securing a job offer in a certain region or community, or in a specific profession in Canada. The key is to apply to these programs early, as spaces are limited.",
  },
];

export default function VisasPage() {
  return (
    <main className="w-full">
      <section
        className="w-full h-[36em] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/img/bg/canadian_visa.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="ml-12 flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
            <h1 className="text-6xl font-bold mb-6 max-sm:text-5xl text-white">Canadian Visas</h1>
            <p className="text-lg font-bold mb-10 max-sm:w-[95%] max-sm:text-center">
              A quick guide to permits and immigration programs
            </p>
            <SignupDialog>
              <button className="w-[10em] h-10 font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer">
                GET EVALUATED
              </button>
            </SignupDialog>
          </div>
        </div>
      </section>

      <section className="w-full py-4">
        <div className="w-[90%] mx-auto">
          <div className="w-full h-12 border-b border-gray-300 flex items-center mb-4">
            <h3 className="text-sm text-gray-800">
              <Link href="/" className="text-gray-400 no-underline">HOME / </Link>
              Canadian Visas
            </h3>
          </div>

          <div className="mt-2">
            <div className="w-full flex flex-col md:flex-row h-auto md:h-[27em] mb-2">
              <div className="w-full md:w-[36em] md:h-full flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-5xl text-primary font-serif mb-2 md:mb-4">Canadian Visa Types</h1>
                <div className="w-20 h-0.5 bg-red-600" />
              </div>
              <div className="w-full md:w-[36em] md:h-full flex items-center">
                <p className="w-[95%] leading-relaxed">
                  Canada is one of the most multicultural countries in the world and it's the first
                  country to officially integrate diversity into its policies. With the population
                  decreasing and the number of job opportunities increasing, the Canadian government
                  has designed over 100 different immigration programs to bring more foreign workers
                  into the country. These programs have a number of streams and categories
                  specifically dedicated to not only alleviate economic and labour market needs but
                  also to make the process of obtaining permanent residency more accessible to
                  skilled foreign workers who want to relocate to Canada.
                </p>
              </div>
            </div>

            {visaItems.map((item) => (
              <div
                key={item.title}
                className="w-full flex flex-col md:flex-row h-auto md:h-[27em] mb-2"
              >
                {item.imageLeft ? (
                  <>
                    <div className="w-full md:w-[36em] h-[25em] md:h-full relative">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="w-full md:w-[36em] md:h-full flex flex-col justify-center relative md:px-4 py-6">
                      <h2 className="text-3xl text-primary font-serif mb-4 max-sm:text-2xl">{item.title}</h2>
                      <p className="w-[95%] mb-4 leading-relaxed">{item.text}</p>
                      <Link
                        href={item.href}
                        className="font-bold no-underline text-primary md:absolute left-4 -bottom-4 md:bottom-20 hover:opacity-70 transition-opacity after:content-[''] after:inline-block after:ml-2 after:border-t-2 after:border-b-2 after:border-l-3 after:border-t-transparent after:border-b-transparent after:border-l-primary max-sm:bottom-12 md:mt-6"
                      >
                        READ MORE
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-[36em] md:h-full flex flex-col justify-center relative md:px-4 py-6">
                      <h2 className="text-3xl text-primary font-serif mb-4 max-sm:text-2xl">{item.title}</h2>
                      <p className="w-[95%] mb-4 leading-relaxed">{item.text}</p>
                      <Link
                        href={item.href}
                        className="font-bold no-underline text-primary md:not-odd:absolute left-4 bottom-20 hover:opacity-70 transition-opacity after:content-[''] after:inline-block after:ml-2 after:border-t-2 after:border-b-2 after:border-l-3 after:border-t-transparent after:border-b-transparent after:border-l-primary max-sm:bottom-12"
                      >
                        READ MORE
                      </Link>
                    </div>
                    <div className="w-full md:w-[36em] h-[25em] md:h-full relative">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="w-full h-[17em] bg-cover bg-center flex flex-col items-center justify-center gap-4 text-white"
        style={{ backgroundImage: "url('/img/g/img_banner_howwecanhelp_desktop.jpg')" }}
      >
        <h2 className="text-3xl md:text-5xl font-mono">How We Can Help</h2>
        <p className="w-[90%] text-center leading-relaxed">
          Interested in pursuing a new life in Canada? Our team of Regulated Canadian Immigration
          Consultants (RCICs) are highly qualified to help you understand and navigate through the
          immigration process. All you have to do is sign up for our service today and we'll do the
          rest. Let us make your journey effortless.
        </p>
      </section>
    </main>
  );
}