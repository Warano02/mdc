import Image from "next/image";
import Link from "next/link";
import SignupDialog from "@/components/SignupDialog";
import FAQAccordion from "@/components/why-us/FAQAccordion";

export const metadata={
  title:"Canada Working Holiday Visa | MDC Canada"
}
const badges = [
  {
    src: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/icon/new_icon/icon_certifiedimmigration_blue.svg",
    label: "Certified Immigration Consultants",
  },
  {
    src: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/icon/new_icon/icon_10yearsexperience_blue.svg",
    label: "Years of Experience",
  },
  {
    src: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/icon/new_icon/icon_1000Applications_blue.svg",
    label: "1000s of Satisfied Clients",
  },
  {
    src: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/icon/new_icon/icon_guidance_blue.svg",
    label: "24/7 Support and Guidance",
  },
];

const didYouKnow = [
  {
    src: "https://mdccanada.ca/assets/icon/new_icon/icon_immigrants.svg",
    text: "Thousands of people use the IEC program to eventually become permanent residents in Canada",
  },
  {
    src: "https://mdccanada.ca/assets/icon/new_icon/icon_fluent.svg",
    text: "The experience you earn during your working holiday is a great way to improve your CRS score.",
  },
  {
    src: "https://mdccanada.ca/assets/icon/new_icon/icons_personalized.svg",
    text: "The average turnaround time for this process is only 12 weeks",
  },
];

const whyMDC = [
  {
    src: "https://mdccanada.ca/assets/icon/icon_whyuseMDC_CRSscore@2x.png",
    text: "Detailed eligibility evaluation and CRS (Comprehensive Ranking System) score.",
  },
  {
    src: "https://mdccanada.ca/assets/icon/icon_whyuseMDC_Profguidance@2x.png",
    text: "Professional personalized guidance & assistance through every step of the immigration process",
  },
  {
    src: "https://mdccanada.ca/assets/icon/icon_whyuseMDC_Documents@2x.png",
    text: "Assistance with what's needed; list of required documents, document verification and full service solutions.",
  },
];

const team = [
  {
    name: "David Allon",
    id: "#R513335",
    role: "CEO of",
    src: "/img/pp/David-Allon-RCIC-Picture-MDC-Canada-new.png",
  },
  {
    name: "Jimmy Park",
    id: "#R510391",
    role: "Working with",
    src: "/img/pp/Jimmy-Park-RCIC-picture-MDC-Canada-new.png",
  },
  {
    name: "Giovanni Mariella",
    id: "#R705710",
    role: "Working with",
    src: "/img/pp/Giovanni_Mariella-RCIC-picture-MDC-Canada-new.png",
  },
  {
    name: "Alireza Motahari",
    id: "#R533723",
    role: "Working with",
    src: "/img/pp/Alireza_Motahari-RCIC-picture-MDC-Canada-new.png",
  },
];

const faqs = [
  {
    question: "Can anyone apply to the IEC - Working Holiday Program?",
    answer: "Those who are from any of the 32 countries that have a bilateral agreement with Canada may be eligible.",
  },
  {
    question: "How much money do i need to go to Canada on the Working Holiday Program?",
    answer: "You need an equivalent of $2500 Canadian Dollars to cover your initial costs.",
  },
  {
    question: "How old do I need to be to qualify for the Working Holiday Program?",
    answer: "You need to be between the ages of 18 and 35, depending on the province.",
  },
  {
    question: "Can I bring my family along to Canada with me on the Working Holiday Program?",
    answer: "No, you cannot be accompanied by family or dependents",
  },
  {
    question: "What travel documents do I need for the Working Holiday Program?",
    answer: "You need a valid passport that will not expire during your time in Canada in order to qualify for a Working Holiday Permit.",
  },
];

export default function WorkingHolidayPage() {
  return (
    <main className="w-full ">
      <section
        className="w-full h-[32em] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/img/g/t/img_header_workingholiday_desktop.webp')" }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="ml-12 flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
            <h1 className="text-white text-5xl font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
              Working Holiday (International Experience Canada)
            </h1>
            <p className="text-lg font-bold mb-10 max-sm:w-[95%] max-sm:text-center">
              A quick guide to permits and immigration programs
            </p>
            <SignupDialog>
              <button className="w-[10em] h-10 font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer">
                GET STARTED
              </button>
            </SignupDialog>
          </div>
        </div>
      </section>

      <section className="w-full py-4">
        <div className=" mx-auto">
          <div className="w-full h-12 border-b border-gray-300 flex items-center mb-6">
            <h3 className="container text-xs text-gray-800">
              <Link href="/" className="text-gray-400 no-underline">HOME /</Link>
              <Link href="/canadian-visas" className="text-gray-400 no-underline"> CANADIAN VISAS /</Link>
              {" "}WORKING HOLIDAY VISA
            </h3>
          </div>

          <div className="container flex flex-wrap justify-between items-center gap-4 max-[700px]:justify-center">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-3 w-[18em] p-1 max-[700px]:w-[95%]">
                <div className="w-15 h-15 rounded-full flex items-center justify-center shrink-0">
                  <Image src={b.src} alt={b.label} width={60} height={60} />
                </div>
                <p className="text-primary font-semibold text-lg leading-snug">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full min-h-[33em] bg-gray-50 flex items-center justify-center py-10">
        <div className="container lg:w-full md:w-[95%] flex gap-6 max-[685px]:flex-col">
          <div className="w-[35%] flex flex-col items-center pt-8 relative max-[685px]:w-full max-[685px]:h-[8em]">
            <h1 className="text-5xl text-primary font-serif text-center max-[1075px]:text-4xl max-[875px]:text-3xl max-[420px]:text-2xl">
              What is the Working Holiday Program (IEC)?
            </h1>
            <div className="w-20 h-0.5 bg-red-600 mt-4" />
          </div>
          <div className="w-[45%] flex items-center max-[685px]:w-full">
            <p className="leading-relaxed text-gray-800">
              If you're between the ages of 18 and 35, the Working Holiday Program (International
              Experience Class) is your ticket to both travel and earning good money in Canada. Job
              types under the program range from hospitality to corporate internships - there really
              is something for everyone! Depending on your home country, you could be travelling and
              working your way through Canada for up to two years.
              <br /><br />
              Once you have set up your profile online, you will then be entered into a draw pool
              with other candidates and if successful, you will be able to start the process of
              getting your work permit. The Working Holiday Program will not only enrich your life
              but will allow you to meet people from all over the world and open up doors that you
            </p>
          </div>
        </div>
      </section>

      <section className="w-full min-h-[25em] flex items-center justify-center py-10 mt-2">
        <div className="w-[95%] container">
          <div className="flex justify-center items-center mb-8 relative">
            <h1 className="text-5xl text-primary relative max-[435px]:text-3xl">
              Did you know?
              <span className="absolute -bottom-1 left-1/2 -translatex-1/2 ml-4 w-10 h-0.5 bg-red-600" />
            </h1>
          </div>

          <div className="flex items-center justify-around flex-wrap gap-6 w-[80%] mx-auto mt-8 max-[780px]:flex-wrap max-[435px]:w-full max-[435px]:justify-center">
            {didYouKnow.map((item) => (
              <div
                key={item.text}
                className="w-[14em] min-h-[10em] rounded-xl border-2 border-gray-300 flex items-center justify-center relative pt-8 pb-4 px-3"
              >
                <Image
                  src={item.src}
                  alt={item.text}
                  width={48}
                  height={48}
                  className="absolute -top-6"
                />
                <p className="text-center text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full min-h-[32em] bg-primary text-white flex items-center justify-center py-10">
        <div className="container w-[90%] flex max-[735px]:flex-col gap-8">
          <div className="w-1/2 flex flex-col justify-center gap-3 max-[735px]:w-[90%]">
            <h1 className="text-white text-5xl font-serif max-[410px]:text-3xl">Why use MDC?</h1>
            <div className="w-20 h-0.5 bg-red-600" />
          </div>
          <div className="w-1/2 flex flex-col justify-center gap-6 mt-8 max-[735px]:w-[90%]">
            {whyMDC.map((item, i) => (
              <div key={i} className="flex items-center gap-12 max-[570px]:gap-4">
                <Image src={item.src} alt={item.text} width={60} height={60} className="shrink-0 h-20 w-auto" />
                <p className="w-1/2 leading-snug max-[570px]:w-[80%] max-[410px]:w-[90%]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 flex items-center justify-center relative">
        <div className="container w-[90%] flex flex-col items-center relative">
          <h1 className="text-5xl text-primary mb-4 relative max-[440px]:text-3xl">
            Meet Our Team
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-red-600" />
          </h1>
          <p className="w-[60%] text-center leading-relaxed text-lg font-light mb-8 max-[930px]:w-[80%]">
            Our{" "}
            <Link href="" className="text-primary no-underline hover:underline transition-all">
              Regulated Canadian Immigration Consultants (RCICs)
            </Link>{" "}
            know what it take to guide you through the immigration process until you safety arrive in Canada.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full mb-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="max-w-[20em] h-[17em] flex flex-col items-center justify-center gap-2 max-[755px]:w-[18em] max-[685px]:w-[15em]"
              >
                <div className="rounded-full overflow-hidden mb-4">
                  <Image src={member.src} alt={member.name} width={100} height={100} className="object-cover" />
                </div>
                <h3 className="text-primary font-semibold">{member.name}</h3>
                <Link href="" className="font-bold text-red-600 no-underline hover:underline tracking-wide">
                  {member.id}
                </Link>
                <p className="text-sm font-medium text-center">
                  {member.role} <span className="font-bold">MDCCanada.ca</span>
                </p>
              </div>
            ))}
          </div>

          <div className="w-full flex items-center justify-center h-[8em] ">
            <Link href="">
              <Image src="/img/iccrc-new.png" alt="iccrc" width={180} height={59} />
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full min-h-[40em] flex items-center justify-center py-10">
        
        <div className="mt-4 w-[95%]">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </main>
  );
}