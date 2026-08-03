import SignupDialog from "@/components/SignupDialog"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Known Agents - Canadian Immigration & Visa Services | MDC Canada"
}
function KnowAgents() {
  return (
    <main>
      <section
        className="w-full h-[36em] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/img/title/img_header_knownagents_desktop.webp')" }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="flex flex-col justify-center w-full max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
            <h1 className="text-white text-5xl font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
              Known Agents
            </h1>
            <p className="text-lg font-bold mb-10 max-sm:w-[95%] max-sm:text-center">
              We provide the guidance and services to make your Canadian immigration process easy, affordable, and reliable.
            </p>
            <SignupDialog>
              <button className="w-[10em] h-10 font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer">
                GET STARTED
              </button>
            </SignupDialog>
          </div>
        </div>
      </section>
      <div className="w-full border-b border-gray-300 flex items-center px-8 h-12">
        <h3 className="container text-xs text-gray-800">
          <Link href="/" className="text-gray-400 no-underline">HOME /</Link>
          {" "}KNOWN AGENT
        </h3>
      </div>

      <div className="flex gap-8 px-8 py-10 w-full max-w-5xl mx-auto">
        <div className="w-55 shrink-0 bg-gray-50 flex items-center justify-center p-6">
          <Image
            src="/img/visa_de_canada.png"
            alt="Visa de Canada"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl text-primary font-serif italic">VisaDeCanada.com</h2>
          <p className="text-gray-700 leading-relaxed">
            Visa de Canada is a private Canadian immigration agency specifically designed to help Spanish speakers find their way through Canada's complex and extensive immigration system. They pride themselves on utilizing some of the most experienced certified experts to make sure that any Spanish speakers looking to move to Canada have the best possible chance to do so.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Visa de Canada, our experts are Regulated Canadian Immigration Consultants (RCIC) who are situated in Canada and regulated by the Immigration Consultancy of Canada Regulatory Council (ICCRC). They fully abide by the ICCRC's Code of Professional Conduct to ensure all services are legitimate, valid and recognized by the Canadian government.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Their mission is to ensure that all Spanish-speaking people looking to move to Canada get effective, clear evaluations; maximum support throughout their application process; and a full, clear guide through the application process in your language. With Visa de Canada, your journey to the Great White North is just a click away.
          </p>
        </div>
      </div>

      <section className="w-full min-h-[16em] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center py-10 gap-8"
        style={{ backgroundImage: "url('/img/img_banner_RCICS_desktop.jpg')" }}>
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
        <div className="relative z-10 flex flex-col items-center gap-8 w-full px-4">
          <h2 className="text-white text-3xl font-serif">Professional Services Include:</h2>
          <div className="flex justify-center gap-16 flex-wrap max-md:gap-8">
            {[
              "Assessment of clients' credentials",
              "Professional Consultants",
              "Guidance, Advice and Support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white ">
                <Image src="/img/icon_tick.svg" alt="check" width={28} height={28} className="shrink-0" />
                <p className="font-semibold leading-snug">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-white text-sm text-center max-w-2xl">
            In addition to these services, they can provide additional information about Canada, settlement, culture, cities and the best places to visit.
          </p>
        </div>
      </section>
    </main>
  )
}

export default KnowAgents