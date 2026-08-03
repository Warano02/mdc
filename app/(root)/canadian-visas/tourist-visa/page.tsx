import SignupDialog from '@/components/SignupDialog';
import TableOfContents from "@/components/TableOfContents";
import FAQAccordion from '@/components/why-us/FAQAccordion';
import Image from 'next/image';
import Link from 'next/link';
export const metadata = {
  title: "Tourist Visa | MDC Canada",
  description: "Visit Canada as a Tourist, and learn about the important documents you'll need to apply.",
};

const tocItems = [
  { id: "how-to-tell", label: "How to Tell if You Need a Canadian Tourist Visa" },
  { id: "visa-types", label: "What Types of Canada Tourist Visa Are There?" },
  { id: "requirements", label: "Canada Tourist Visa Requirements" },
  { id: "how-to-apply", label: "How to Apply for a Canada Tourist Visa" },
  { id: "faqs", label: "FAQs" },
];
function TouristVisa() {
  return (
    <main className="w-full">
      <section
        className="w-full h-[36em] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/img/bg/tourist_d.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="ml-12 flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
            <p className="text-5xl text-white font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
              Tourist Visa
            </p>
            <p className="text-lg font-bold mb-10 max-sm:w-[95%] max-sm:text-center">
              Visit Canada as a Tourist, and learn about the important documents you'll need to apply.
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
          <Link href="/canadian-visas" className="text-gray-400 no-underline"> CANADIAN VISAS /</Link>
          {" "}TOURIST VISA
        </h3>
      </div>


      <div className="flex gap-8 px-8 py-10 w-full max-w-5xl mx-auto">
        <TableOfContents items={tocItems} />

        <article className="flex-1 min-w-0 flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-gray-700 leading-relaxed">
              Canada, known for its lush landscapes, vibrant cities, and welcoming culture, is a destination that attracts millions of global tourists every year. However, before embarking on this exciting journey, it is essential to understand the procedures involved in obtaining a Canada tourist visa.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Canada tourist visa, also known as the Canada visitor visa, is a legal document that allows foreign nationals to visit Canada for tourism, business, or visiting family and friends. The visa permits you to stay in the country for six months from the day of entry. However, the officer will determine the actual period of stay at the port of entry.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Canada tourist visa is generally issued for multiple entries, allowing the holder to leave and re-enter Canada multiple times during the validity of the visa. However, the total duration of stay should not exceed the maximum limit.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're keen to explore the stunning Rockies, experience the urban flair of Toronto,{" "}
              <Link href="#" className="text-primary hover:underline">Ontario</Link>, or Vancouver,{" "}
              <Link href="#" className="text-primary hover:underline">British Columbia</Link>, or immerse yourself in the unique French-Canadian culture of{" "}
              <Link href="#" className="text-primary hover:underline">Quebec</Link>, the Canada tourist visa is your passport to an unforgettable travel experience. To help you enjoy this experience without any issues, here is a breakdown of the Canada tourist visa, explaining how to tell if you need one, the type of tourist visa you need, how to apply, and answering some of your queries about traveling in Canada.
            </p>
            <div className="flex justify-center">
              <SignupDialog>
                <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                  Can You Travel to Canada
                </button>
              </SignupDialog>
            </div>
          </div>

          <section id="how-to-tell" className="flex flex-col gap-6 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">How to Tell if You Need a Canadian Tourist Visa</h2>

            <div className="w-full relative h-[20em]">
              <Image
                src="/img/3e140393ad3053db999b251bd4102c97.jpg"
                alt="Canadian Tourist Visa"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 leading-relaxed">
              Determining whether you need a Canada tourist visa depends on your nationality. Citizens from countries not visa-exempt must apply for a Canada tourist visa before visiting the country.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you are from one of the following nations, you may not need a tourist visa to enter Canada:
            </p>

            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th colSpan={4} className="text-center px-4 py-3 font-semibold">Visa-Exempt Countries</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Andorra", "France", "Montserrat", "Australia"],
                  ["Anguilla", "Germany", "Netherlands", "Austria"],
                  ["Antigua and Barbuda", "Gibraltar", "New Zealand", "Bahamas"],
                  ["Barbados", "Greece", "Norway", "Bermuda"],
                  ["British Virgin Islands", "Holy See", "Papua New Guinea", "Brunei"],
                  ["Cayman Islands", "Hong Kong", "Pitcairn", "Chile"],
                  ["Croatia", "Hungary", "Poland", "Cyprus"],
                  ["Czech Republic", "Iceland", "Portugal", "Denmark"],
                  ["Estonia", "Ireland", "St Helena", "Israel"],
                  ["Falkland Islands", "Italy", "San Marino", "Japan"],
                  ["Latvia", "Singapore", "Slovakia", "Liechtenstein"],
                  ["Lithuania", "Slovenia", "Solomon Islands", "Luxembourg"],
                  ["Malta", "Switzerland", "Mexico", "Israel"],
                  ["Monaco", "United Kingdom", "—", "—"],
                ].map((row, i) => (
                  <tr key={i} className={`border-t border-gray-300 ${i % 2 !== 0 ? "bg-gray-50" : ""}`}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2 border-r border-gray-200 last:border-r-0">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="text-gray-700 leading-relaxed">
              You must apply for a Canada travel visa if you're not a citizen of these countries. You may not need a Canada tourist visa if you are from a visa-exempt nation. However, you will still need an Electronic Travel Authorization (eTA) Canada to enter Canada.
            </p>
          </section>

          <section id="visa-types" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">What Types of Canada Tourist Visa Are There?</h2>
            <p className="text-gray-700 leading-relaxed">
              The tourist visa Canada comes in the following two variants:
            </p>

            <h3 className="text-2xl text-primary font-serif">The Single-Entry Visa</h3>
            <p className="text-gray-700 leading-relaxed">
              The single-entry visa allows you to enter Canada once, stay up to six months, and then leave.
            </p>

            <h3 className="text-2xl text-primary font-serif">The Multiple-Entry Visa</h3>
            <p className="text-gray-700 leading-relaxed">
              The multiple-entry visa allows you to enter and exit Canada multiple times for two years or until your passport expires, whichever comes first.
            </p>

            <div className="flex justify-center mt-2">
              <SignupDialog>
                <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                  Get Your Tourist Visa
                </button>
              </SignupDialog>
            </div>
          </section>

          <section id="requirements" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">Canada Tourist Visa Requirements</h2>
            <p className="text-gray-700 leading-relaxed">
              You must meet specific requirements to apply for a Canada tourist visa. These include:
            </p>
            <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
              <li>A valid passport</li>
              <li>Two passport-sized photographs</li>
              <li>Proof of financial means to cover your stay in Canada</li>
              <li>Medical examination report (if required)</li>
              <li>A cover letter explaining the purpose of your visit</li>
              <li>Travel and health insurance</li>
              <li>Proof of ties to your home country</li>
              <li>Payment of the visa application fee</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              In addition to these, you might also need to provide other documentation depending on your circumstances and the Canadian immigration authorities' requirements.
            </p>
          </section>
          <section id="how-to-apply" className="flex flex-col gap-6 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">How to Apply for a Canada Tourist Visa</h2>

            <div className="w-full relative h-[20em]">
              <Image
                src="/img/0d0885ec730ce3957a7f819224a0d5a5.jpg"
                alt="How to apply for a Canada Tourist Visa"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 1: Create Your Online Account</h3>
              <p className="text-gray-700 leading-relaxed">
                The first step to applying for a Canada tourist visa is to create an online account on the{" "}
                <Link href="#" className="text-primary hover:underline">Canadian government's official website</Link>.
                This account will serve as your dashboard where you can fill out your application form, upload required documents, pay the visa fee, and track your application status.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 2: Upload All Required Documentation</h3>
              <p className="text-gray-700 leading-relaxed">
                After creating your account, complete the application form and upload all required documents. The list of necessary documents includes a valid passport, recent passport-size photographs, proof of financial means, travel insurance, and others as per the Canada tourist visa requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Provide accurate and complete information when completing your Canada tourist visa application. Any discrepancies or missing information could lead to delays or even rejection of your application. It's also crucial to upload clear and legible copies of your documents. Provide a translated copy if any document is not in English or French.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 3: Pay Your Fees</h3>
              <p className="text-gray-700 leading-relaxed">
                After uploading all required documents, you must pay the Canada tourist visa fees. The visa processing fees are as follows:
              </p>

              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-4 py-3 font-semibold border-r border-gray-300">Fees</th>
                    <th className="text-left px-4 py-3 font-semibold">CAD</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Visitor visa processing fee (per person)", "100"],
                    ["Family visitor visa (1 fee per family of 5+)", "500"],
                    ["Extend your stay – per person", "100"],
                    ["Restore your visitor status", "200"],
                  ].map(([fee, cad], i) => (
                    <tr key={i} className={`border-t border-gray-300 ${i % 2 !== 0 ? "bg-gray-50" : ""}`}>
                      <td className="px-4 py-3 border-r border-gray-300">{fee}</td>
                      <td className="px-4 py-3">{cad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="text-gray-700 leading-relaxed">
                You can pay online using a credit or debit card.
              </p>
            </div>
          </section>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-primary font-serif">After You Apply</h3>
            <p className="text-gray-700 leading-relaxed">
              Your application will be processed after submitting your application and paying the fees. The Canada tourist visa processing time varies depending on the country you are applying to and the time of the year. However, it typically takes between two to four weeks.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Once your visa is approved, it will be stamped on your passport and you can plan your travel to Canada. If your visa is refused, the Canadian embassy or consulate will inform you of the reason for refusal. You must present your tourist visa at your port of entry to Canada, usually at customs if you travel by air or once at a border authority if you travel to Canada via land.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Obtaining a Canada tourist visa involves understanding the types of visas, the requirements, and the application process. It's a straightforward process requiring careful attention to detail. Once you have your Canada tourist visa, Canada's beautiful landscapes, rich culture, and warm hospitality await you. Enjoy your journey!
            </p>
            <div className="flex justify-center mt-2">
              <SignupDialog>
                <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                  Explore Canada with Us!
                </button>
              </SignupDialog>
            </div>
          </div>
          <section id="faqs" className="flex flex-col gap-6 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">FAQs</h2>

            <div className="w-full relative h-[20em]">
              <Image
                src="/img/2d3ad5908acf2d9b48bb0b2c409fe351.jpg"
                alt="Canada Tourist Visa FAQs"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 leading-relaxed">
              Many travelers have common queries about their visit to Canada. Here are answers to some of your most burning questions.
            </p>

            <FAQAccordion
              showTitle={false}
              faqs={[
                {
                  question: "Can I Extend My Stay in Canada?",
                  answer: "The answer is yes, you can apply for an extension at least 30 days before your current status expires.",
                },
                {
                  question: "Can my Family Members Accompany Me on My Canada Tourist Visa?",
                  answer: "No. Your spouse and dependent children can accompany you but must apply for their visas.",
                },
                {
                  question: "Can Unvaccinated People Travel to Canada?",
                  answer: "As of writing, Canada's COVID-19 travel restrictions allow unvaccinated travelers to enter Canada. However, they must adhere to strict protocols, including pre-departure and post-arrival testing and mandatory quarantine.",
                },
                {
                  question: "Do You Provide Service For ETA (Electronic Travel Authorization)?",
                  answer: "No, we do not provide service for ETAs.",
                },
              ]}
            />
          </section>
        </article>
      </div>
    </main>
  )
}

export default TouristVisa