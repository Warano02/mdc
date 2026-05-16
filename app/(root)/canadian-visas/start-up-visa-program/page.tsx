import Image from "next/image";
import Link from "next/link";
import SignupDialog from "@/components/SignupDialog";
import FAQAccordion from "@/components/why-us/FAQAccordion";

export const metadata = {
  title: "Start-up Visa Program | MDC Canada",
  description: "Launch your business in Canada with the Start-up Visa Program and become a permanent resident.",
};

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
    text: "Canada is ranked among the top countries in the world for starting a new business",
  },
  {
    src: "https://mdccanada.ca/assets/icon/new_icon/icon_fluent.svg",
    text: "The Start-up Visa Program grants permanent residency to eligible immigrant entrepreneurs",
  },
  {
    src: "https://mdccanada.ca/assets/icon/new_icon/icons_personalized.svg",
    text: "Your business must be supported by a designated Canadian organization to qualify",
  },
];

const whyMDC = [
  {
    src: "https://mdccanada.ca/assets/icon/icon_whyuseMDC_CRSscore@2x.png",
    text: "Detailed eligibility evaluation to determine your fit for the Start-up Visa Program.",
  },
  {
    src: "https://mdccanada.ca/assets/icon/icon_whyuseMDC_Profguidance@2x.png",
    text: "Professional personalized guidance & assistance through every step of the application process.",
  },
  {
    src: "https://mdccanada.ca/assets/icon/icon_whyuseMDC_Documents@2x.png",
    text: "Assistance with required documents, document verification and full service solutions.",
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
    question: "Who is eligible for the Start-up Visa Program?",
    answer: "You must have a qualifying business, get a letter of support from a designated organization, meet language requirements (CLB 5 in English or French), and have enough money to settle in Canada.",
  },
  {
    question: "How many people can apply together under the Start-up Visa Program?",
    answer: "Up to 5 people can apply together as co-founders of a single qualifying business.",
  },
  {
    question: "What is a designated organization?",
    answer: "A designated organization is a Canadian venture capital fund, angel investor group, or business incubator that is approved by the Canadian government to support immigrant entrepreneurs.",
  },
  {
    question: "How long does the Start-up Visa Program take?",
    answer: "Processing times can vary, but the program is designed to grant permanent residency directly, which can take between 12 to 16 months on average.",
  },
  {
    question: "Can my family come with me to Canada under this program?",
    answer: "Yes, your spouse or common-law partner and dependent children can accompany you to Canada as part of your application.",
  },
];

export default function StartupVisa() {
  return (
    <main className="w-full">
      <section
        className="w-full h-[32em] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/img/g/img_header_startupvisa_desktop.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="ml-12 flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
            <h1 className="text-5xl font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
              Start-up Visa Program
            </h1>
            <p className="text-lg font-bold mb-10 max-sm:w-[95%] max-sm:text-center">
              Launch your business in Canada and build a path to permanent residency.
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
        <div className="w-[90%] mx-auto">
          <div className="w-full h-12 border-b border-gray-300 flex items-center mb-6">
            <h3 className="text-xs text-gray-800">
              <Link href="/" className="text-gray-400 no-underline">HOME /</Link>
              <Link href="/canadian-visas" className="text-gray-400 no-underline"> CANADIAN VISAS /</Link>
              {" "}START-UP VISA PROGRAM
            </h3>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4 max-[700px]:justify-center">
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
        <div className="w-[95%] flex gap-6 max-[685px]:flex-col">
          <div className="w-[35%] flex flex-col items-center pt-8 relative max-[685px]:w-full max-[685px]:h-[8em]">
            <h1 className="text-5xl text-primary font-serif text-center max-[1075px]:text-4xl max-[875px]:text-3xl max-[420px]:text-2xl">
              What is the Start-up Visa Program?
            </h1>
            <div className="w-20 h-0.5 bg-red-600 mt-4" />
          </div>
          <div className="w-[45%] flex items-center max-[685px]:w-full">
            <p className="leading-relaxed text-gray-800">
              Ranked by Forbes as the 6th best country for business startups, Canada is an entrepreneur's dream.
              The Start-up Visa Program is designed for innovative immigrant entrepreneurs who want to start a new
              business in Canada that will not only create jobs but also compete on a global scale.
              <br /><br />
              Unlike other immigration programs, the Start-up Visa Program grants permanent residency directly,
              making it an attractive option for entrepreneurs looking to build their future in Canada. To qualify,
              your business idea must be supported by a designated Canadian organization — a venture capital fund,
              angel investor group, or business incubator approved by the Canadian government.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full min-h-[25em] flex items-center justify-center py-10 mt-2">
        <div className="w-[95%]">
          <div className="flex justify-center items-center mb-8 relative">
            <h1 className="text-5xl text-primary relative max-[435px]:text-3xl">
              Did you know?
              <span className="absolute -bottom-1 left-full ml-4 w-10 h-0.5 bg-red-600" />
            </h1>
          </div>

          <div className="flex items-center justify-around flex-wrap gap-6 w-[80%] mx-auto mt-8 max-[780px]:flex-wrap max-[435px]:w-full max-[435px]:justify-center">
            {didYouKnow.map((item) => (
              <div
                key={item.text}
                className="w-[14em] min-h-[10em] rounded-xl border-2 border-gray-300 flex items-center justify-center relative pt-8 pb-4 px-3"
              >
                <Image src={item.src} alt={item.text} width={48} height={48} className="absolute -top-6" />
                <p className="text-center text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full min-h-[32em] bg-primary text-white flex items-center justify-center py-10">
        <div className="w-[90%] flex max-[735px]:flex-col gap-8">
          <div className="w-1/2 flex flex-col justify-center gap-3 max-[735px]:w-[90%]">
            <h1 className="text-5xl font-serif max-[410px]:text-3xl">Why use MDC?</h1>
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

      <section className="w-full py-10 flex items-center justify-center">
        <div className="w-[90%] flex flex-col items-center">
          <h1 className="text-5xl text-primary mb-4 relative max-[440px]:text-3xl">
            Meet Our Team
            <span className="absolute -bottom-1 left-full ml-4 w-10 h-0.5 bg-red-600" />
          </h1>
          <p className="w-[60%] text-center leading-relaxed text-lg font-light mb-8 max-[930px]:w-[80%]">
            Our{" "}
            <Link href="" className="text-primary no-underline hover:underline transition-all">
              Regulated Canadian Immigration Consultants (RCICs)
            </Link>{" "}
            are here to guide you through every step of the Start-up Visa Program, from evaluating your business idea to helping you settle in Canada.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 w-full mb-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="w-[20em] h-[17em] flex flex-col items-center justify-center gap-2 max-[755px]:w-[18em] max-[685px]:w-[15em]"
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

          <div className="w-full flex items-center justify-center h-[10em]">
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