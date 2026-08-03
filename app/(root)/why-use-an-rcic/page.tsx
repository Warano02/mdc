import Image from "next/image";
import Link from "next/link";
import SignupDialog from "@/components/SignupDialog";
import FAQAccordion from "@/components/why-us/FAQAccordion";

export const metadata = {
  title: "Why Use an RCIC? | MDC Canada",
  keywords: "RCIC, Regulated Canadian Immigration Consultants, Canadian immigration"
}

const features = [
  { alt: "Certified Immigration Consultants", src: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/icon/new_icon/icon_certifiedimmigration_blue.svg", label: "Certified Immigration Consultants" },
  { alt: "Years of Experience", src: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/icon/new_icon/icon_10yearsexperience_blue.svg", label: "Years of Experience" },
  { alt: "1000s of Satisfied Clients", src: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/icon/new_icon/icon_1000Applications_blue.svg", label: "1000s of Satisfied Clients" },
  { alt: "24/7 Support and Guidance", src: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/icon/new_icon/icon_guidance_blue.svg", label: "24/7 Support and Guidance" },
];
const team = [
  { name: "David Allon", reg: "#R513335", role: "CEO of", src: "/img/pp/David-Allon-RCIC-Picture-MDC-Canada-new.png" },
  { name: "Jimmy Park", reg: "#R510391", role: "Working with", src: "/img/pp/Jimmy-Park-RCIC-picture-MDC-Canada-new.png" },
  { name: "Giovanni Mariella", reg: "#R705710", role: "Working with", src: "/img/pp/Giovanni_Mariella-RCIC-picture-MDC-Canada-new.png" },
  { name: "Alireza Motahari", reg: "#R533723", role: "Working with", src: "/img/pp/Alireza_Motahari-RCIC-picture-MDC-Canada-new.png" },
];
const rcicPoints = [
  { title: "Save Valuable Time", body: "As one can imagine, the immigration process can be daunting. Even the slightest error will result in a disqualification. However, working with an RCIC means you can let go of this stress and worry about making mistakes or missing important deadlines. It is an RCICs job to ensure that there are no mistakes, everything is completed and all deadlines are met." },
  { title: "Personalized Assistance", body: "Choosing the right route to Canada can be an overwhelming experience because there are over 100 unique immigration options available to you. Thankfully, our RCICs will sift through all these options to find the right immigration program for you according to your personal goals and qualifications. Once you sign up for our services, they will be available to answer any questions you may have and they will act as your personal guides through the complex world of Canadian immigration." },
  { title: "RCICs Create a Professional Immigration Strategy", body: "Regulated Canadian Immigration Consultants are professional strategists that have the ability to guide you though the labyrinth of the Canadian immigration system. Our RCICs will provide you with expert guidance after evaluating your unique immigration RCIC will provide you with tailored options. All our clients are unique and therefore deserves unique solutions." },
  { title: "RCICs Have Expert Knowledge of the Immigration System", body: "Canadian has a complex, yet flexible immigration system with ever-changing rules and regulations. This one of several reasons why it's so difficult for everyday people to remain informed about current process. RCICs are immigration professionals who keep up to date with new visa programs, changes and availability. As licensed professionals, they have in-depth knowledge of all visa programs which they can leverage to your advantage." },
  { title: "RCICs Are Regulated by Licensing Institution", body: "To become an RCIC, a person must pass a rigorous training process. In addition, you partake in regular training and professional development to have your licence renewed on an annual basis. RCICs work according to a strict code of conduct regulated by the Immigration Consultants of Canada Regulatory Council (ICCRC) which ensures that clients' rights are protected." },
];
const didYouKnow = [
  { alt: "1 in 4 rejected", src: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/icon/why_use_rcic/icon_incorrectdocs.svg", text: "1 in 4 people persons are rejected due to", bold: "incorrect documentation." },
  { alt: "1000s rejected", src: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/icon/new_icon/icon_documentation.svg", text: "1000s of immigrants rejected due to", bold: "incomplete data & documentation." },
  { alt: "100s rejected", src: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/icon/new_icon/icon_healthrequirements.svg", text: "100s of candidates rejected due to", bold: "misinformation about health requirements." },
  { alt: "10 documents", src: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/icon/new_icon/icon_docs_forms.svg", text: "Candidates must work through and correctly prepare over", bold: "10 different documents & forms." },
];
export default function HomePage() {
  return (
    <main className="w-full">

      <section
        className="w-full h-[32em] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/img/why_use_rcic.webp')" }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="ml-12 flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
            <h1 className="text-white text-5xl font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
             Why use an RCIC?
            </h1>
            <p className="text-lg font-bold mb-10 max-sm:w-[95%] max-sm:text-center">
              Experienced and professional guidance from start to end
            </p>
            <SignupDialog>
              <button className="w-[10em] h-10 font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer">
                GET STARTED
              </button>
            </SignupDialog>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="w-full flex justify-center py-4">
          <div className="w-full relative">
            <div className="w-full h-12 border-b border-gray-400 flex items-center">
              <h3 className="container text-[0.8em] text-gray-900">
                <span className="text-gray-400">HOME /</span> WHY USE AN RCIC?
              </h3>
            </div>
            <div className="container w-full flex justify-between items-center flex-wrap gap-4 py-4 max-[660px]:flex-col">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-4 p-1 max-[660px]:w-full">
                  <div className="w-15 h-15 rounded-full flex items-center justify-center shrink-0">
                    <Image src={f.src} alt={f.alt} width={50} height={50} loading="lazy" />
                  </div>
                  <p className="text-[1.2em] leading-[1.4em] text-primary font-semibold max-w-[10em]">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-[19em] bg-[url('/img/img_infobanner_desktop_whyuseRCIC1.jpg')] bg-cover bg-center flex justify-center items-center max-[660px]:h-[25em] max-[440px]:h-[35em]">
          <h2 className="container text-center leading-[1.5em] text-white text-[2em] max-[1135px]:text-[1.5em]">
            The Canadian immigration process is complex and complicated. Our certified immigration consultants (RCICs) take the "how" out of the process with simplified steps, hand-in-hand guidance and personalized strategies tailored to your needs.
          </h2>
        </div>
      </section>

      <section className="w-full min-h-[32em] bg-[#f7f7f7] flex justify-center items-center mt-[0.2em] max-[750px]:h-auto">
        <div className="container h-[90%] flex justify-between p-8 max-[750px]:flex-col max-[750px]:p-4">
          <div className="w-[60%] flex justify-center mt-8 pt-16 relative max-[1025px]:w-[50%] max-[750px]:w-full max-[750px]:mt-4 max-[750px]:pt-4 max-[750px]:mb-8">
            <h1 className="text-[3em] text-primary font-(--font-heading) relative after:content-[''] after:absolute after:w-8 after:h-0.5 after:bg-[#dc3545] after:top-[1.3em] after:left-0 max-[1025px]:text-[2em] max-[475px]:text-[2em]">
              Why Use an RCIC?
            </h1>
          </div>
          <div className="w-[70%] flex flex-col justify-center gap-4 max-[750px]:w-full">
            <p className="leading-[1.6em] tracking-[0.5px] text-gray-800 font-medium">
              Due to the fact that there are over 100 Canadian immigration programs, and the process can be quite complex, not to mention confusing - you might not even know where to start.
            </p>
            <p className="leading-[1.6em] tracking-[0.5px] text-gray-800 font-medium">
              Using the services of a Regulated Canadian Immigration Consultant (RCIC) can really make a difference. Our consultants are specially trained, qualified and intimately familiar with Canadian Immigration Policies, who will take a personalized approach to your immigration strategy so that you can boost your chances of obtaining the option best suited for your individual needs.
            </p>
            <p className="leading-[1.6em] tracking-[0.5px] text-gray-800 font-medium">
              Using an RCIC means having access to someone who is connected to the authorities, who can make informed decisions on your behalf.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-auto flex justify-center py-8">
        <div className="w-[90%] flex flex-col items-center">
          <h1 className="text-[3em] text-primary font-(--font-heading) my-8 relative after:content-[''] after:absolute after:w-[1.5em] after:h-0.5 after:bg-[#dc3545] after:bottom-[-0.3em] after:left-1/2 after:-translate-x-1/2 max-[440px]:text-[2em]">
            Meet Our Team
          </h1>
          <p className="w-[60%] text-center leading-[1.8em] text-[1.2em] font-normal max-[930px]:w-[80%] max-[535px]:w-full">
            Our <Link href="#" className="text-primary hover:underline">Regulated Canadian Immigration Consultants (RCICs)</Link> know what it takes to guide you through the immigration process until you safely arrive in Canada.
          </p>
          <div className="w-full flex items-center flex-wrap justify-center mb-4 gap-2 mt-6 max-[930px]:flex-wrap">
            {team.map((m) => (
              <div key={m.name} className="h-[17em] w-[20em] flex flex-col items-center justify-center gap-2.5 max-[755px]:w-[18em] max-[685px]:w-[15em]">
                <div className="rounded-full overflow-hidden mb-4">
                  <Image src={m.src} alt={m.name} width={120} height={120} className="rounded-full object-cover" />
                </div>
                <h3 className="text-primary font-semibold">{m.name}</h3>
                <Link href="#" className="font-bold text-[#dc3545] tracking-[0.8px] no-underline hover:underline">{m.reg}</Link>
                <p className="text-center text-base">{m.role} <span className="font-bold">MDCCanada.ca</span></p>
              </div>
            ))}
          </div>
          <div className="w-full h-[10em] flex justify-center items-center">
            <Image src="/img/iccrc-new.png" alt="iccrc" width={180} height={59} />
          </div>
        </div>
      </section>

      <section className="w-full h-[32em] bg-[url('/img/img_banner_RCICS_desktop.jpg')] bg-cover flex justify-center items-center relative max-[835px]:h-auto">
        <div className="container h-[95%] relative">
          <div className="w-full h-[25em] overflow-x-auto overflow-y-hidden flex mb-4 scrollbar-none snap-x snap-mandatory max-[835px]:h-auto max-[835px]:flex-col no-scrollbar">
            {rcicPoints.map((p, i) => (
              <div key={i} className="w-full shrink-0 flex items-center justify-between m-4 snap-start max-[835px]:flex-col max-[835px]:m-2">
                <div className="w-[40%] flex justify-center items-center max-[835px]:w-full">
                  <h2 className="text-[2.5em] text-white font-(--font-heading) max-[835px]:text-center max-[835px]:text-[1.8em]">{p.title}</h2>
                </div>
                <div className="w-[45%] flex justify-center items-center max-[835px]:w-full">
                  <p className="w-[90%] text-center text-white text-[1.1em] leading-[1.5em]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-20 flex justify-center items-center">
            <div className="flex items-center justify-between gap-4">
              {rcicPoints.map((_, i) => (
                <span key={i} className={`size-3.5 rounded-full border-[1.8px] border-gray-400 cursor-pointer ${i === 0 ? "bg-white" : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-[20em] mt-2.5 flex justify-center items-center py-8 max-[855px]:h-auto">
        <div className="w-[95%]">
          <div className="w-full h-20 flex justify-center items-center relative">
            <h1 className="text-[3em] text-primary font-(--font-heading) relative after:content-[''] after:absolute after:w-[1.5em] after:h-0.5 after:bg-[#dc3545] after:bottom-[-0.2em] after:left-1/2 after:-translate-x-1/2 max-[430px]:text-[2em]">
              Did you know?
            </h1>
          </div>
          <div className="container ml-24 flex items-center justify-around flex-wrap gap-[2.2em] mt-8 max-[855px]:w-full max-[855px]:ml-0 max-[430px]:ml-4">
            {didYouKnow.map((d) => (
              <div key={d.alt} className="w-[14em] h-[10em] rounded-[10px] border-2 border-gray-400/70 relative flex justify-center items-center">
                <Image src={d.src} alt={d.alt} width={48} height={48} loading="lazy" className="absolute top-[-2em]" />
                <p className="w-[80%] text-center font-(--font-body)">{d.text} <span className="font-bold">{d.bold}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQAccordion />
    </main>
  );
}

