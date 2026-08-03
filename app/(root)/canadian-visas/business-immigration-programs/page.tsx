import Link from "next/link";
import SignupDialog from "@/components/SignupDialog";
import TableOfContents from "@/components/TableOfContents";
import Image from "next/image";
import FAQAccordion from "@/components/why-us/FAQAccordion";

export const metadata = {
  title: "Business Immigration Programs | MDC Canada",
  description: "Discover how you can become a permanent resident with Express Entry Canada.",
};

const tocItems = [
  { id: "business-programs", label: "Canada Business Immigration Programs" },
  { id: "business-visitor", label: "Business Visitor Visa" },
  { id: "faqs", label: "FAQs" },
];
function BusinessVisa() {
  return (
    <main className="w-full">
      <section
        className="w-full h-[36em] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/img/bg/express_d.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="ml-12 flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
            <p className="text-5xl text-white font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
              Business Immigration Programs
            </p>
            <p className="text-lg font-bold mb-10 max-sm:w-[95%] max-sm:text-center">
              Entrepreneurs, find out if you are eligible for one of Canada's Business Immigration Programs.
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
          {" "}BUSINESS IMMIGRATION PROGRAMS
        </h3>
      </div>
      <div className="flex gap-8 px-8 py-10 w-full max-w-5xl mx-auto">
        <TableOfContents items={tocItems} />

        <article className="flex-1 min-w-0 flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-gray-700 leading-relaxed">
              You may have heard of the phrase "Land of Opportunities," but have you ever considered Canada as your place to seize these opportunities? If you're an entrepreneur, Canada has so much to offer you. Business immigration to Canada is a path that many entrepreneurs globally are exploring to expand their business horizons. It's a choice that opens doors to a stable economy, a favorable business environment, and a high quality of life.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As an entrepreneur, you play a crucial role in shaping the economy. The same holds in Canada. Entrepreneurs in Canada are key drivers of economic growth, job creation, innovation, and market competition. They contribute to the diversity and dynamism of Canada's economic landscape.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Canada's government recognizes the importance of entrepreneurs and has instituted policies to attract global talent. These policies are reflected in the various business immigration programs designed to fast-track the immigration process for business people. So, if you're an entrepreneur aiming to expand your business footprint, Canada is a promising destination.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What is business immigration to Canada exactly? It's a process where entrepreneurs, investors, and self-employed individuals with business experience and substantial assets can move to Canada. The objective is to contribute to Canada's economic growth by leveraging their business acumen and investing in the Canadian market. Let's delve into the world of business opportunities in Canada.
            </p>
            <div className="flex justify-center">
              <SignupDialog>
                <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                  Start Your Canadian Journey
                </button>
              </SignupDialog>
            </div>
          </div>

          <section id="business-programs" className="flex flex-col gap-6 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">Canada Business Immigration Programs</h2>

            <div className="w-full relative h-[20em]">
              <Image
                src="/img/2c8aed145850aa7e1907c282ff93761a.jpg"
                alt="Canada Business Immigration Programs"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 leading-relaxed">
              Among the many reasons entrepreneurs choose Canada for business immigration is the variety of immigration programs tailored to different business needs, each program has unique features and requirements catering to a specific business type. Let's examine some of these programs more closely.
            </p>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Start-Up Visa Canada</h3>
              <p className="text-gray-700 leading-relaxed">
                If you're an innovative entrepreneur with a business idea that can compete globally, the Start-up Visa Canada program might be your golden ticket to business immigration to Canada. This program targets immigrant entrepreneurs with the skills and potential to build innovative businesses in Canada that can create jobs for Canadians and compete globally.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To qualify for the Start-up Visa Canada program, you need to fulfill the following criteria:
              </p>

              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-4 py-3 font-semibold border-r border-gray-300">Category</th>
                    <th className="text-left px-4 py-3 font-semibold">Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Qualifying business",
                      "The business must:\n• be original;\n• create new jobs for Canadians; and\n• compete globally.",
                    ],
                    [
                      "Letter of support",
                      "Applicants must have a letter of support from a designated organization in Canada that is willing to invest in their business.",
                    ],
                    [
                      "Language requirements",
                      "Applicants must meet the minimum Canadian Language Benchmark (CLB) of 5 in all abilities.",
                    ],
                    [
                      "Proof of funds",
                      "Settling in Canada requires pre-existing funds, varying by family size — currently, an individual applicant needs at least $13,460 CAD.",
                    ],
                  ].map(([category, requirement], i) => (
                    <tr key={i} className={`border-t border-gray-300 ${i % 2 !== 0 ? "bg-gray-50" : ""}`}>
                      <td className="px-4 py-3 border-r border-gray-300 font-medium align-top">{category}</td>
                      <td className="px-4 py-3 whitespace-pre-line">{requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">The Self-Employment Program</h3>
              <p className="text-gray-700 leading-relaxed">
                Are you an artist or an athlete with international recognition? Or perhaps you're an entrepreneur who can significantly contribute to Canada's cultural or athletic life. If so, The Self-Employment Program in Canada could be your pathway to immigration.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This program is designed for individuals who intend to become self-employed in Canada. The eligibility requirements are as follows:
              </p>

              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-4 py-3 font-semibold border-r border-gray-300">Category</th>
                    <th className="text-left px-4 py-3 font-semibold">Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Relevant Experience", "At least two years of relevant experience."],
                    ["Intention to become Self-Employed", "Demonstrate their intention to become self-employed in Canada."],
                    ["Selection Criteria", "At least 35 points on a selection grid to determine their ability to make an economic contribution to Canada."],
                    ["Education", "Applicants must have a three-year diploma, trade certificate, apprenticeship, or equivalent education."],
                    ["Settlement Funds", "Self-employed applicants must demonstrate that they have sufficient funds to settle in Canada along with their dependents and finance their work."],
                    ["Medical Tests and Police Certificates", "Applicants and their family members over 15 must undergo medical tests and provide police certificates."],
                  ].map(([category, requirement], i) => (
                    <tr key={i} className={`border-t border-gray-300 ${i % 2 !== 0 ? "bg-gray-50" : ""}`}>
                      <td className="px-4 py-3 border-r border-gray-300 font-medium align-top">{category}</td>
                      <td className="px-4 py-3">{requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="text-gray-700 leading-relaxed">
                If it sounds like the pathway for you, learn more about how to apply for the{" "}
                <Link href="#" className="text-primary hover:underline">self-employment program</Link>.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">PNP Entrepreneur Streams</h3>
              <p className="text-gray-700 leading-relaxed">
                The Provincial Nominee Programs (PNP) Entrepreneur Streams are another option for business immigration to Canada. Each Canadian province tailors these programs to attract entrepreneurs supporting their province's economic development. Here are some of the PNP Entrepreneur Streams in Canada and who they are for:
              </p>

              {[
                {
                  province: "Alberta Immigration Program (AAIP)",
                  streams: [
                    { name: "Farmer Stream", desc: "For experienced farmers who want to buy and manage a farm in Alberta." },
                    { name: "The Farm Entrepreneur Stream", desc: "For individuals owning or buying a business in a rural Alberta community." },
                    { name: "Foreign Graduate Entrepreneur Stream", desc: "For international graduates from an Albertan post-secondary institution starting or buying a business in Alberta." },
                  ],
                },
                {
                  province: "Ontario Immigrant Nominee Program (OINP)",
                  streams: [
                    { name: "Entrepreneur Stream", desc: "For individuals who want to start a new business or buy an existing business in Ontario." },
                    { name: "Foreign Graduate Entrepreneur Stream (for PNP)", desc: "For recent foreign graduates with work in Ontario who want to start a business in Ontario. Also called the Ontario Canadian Graduate Stream (CG-PNP)." },
                    { name: "BC Entrepreneur Stream", desc: "For individuals with assets worth over $600K who want to start or buy a business in British Columbia." },
                  ],
                },
                {
                  province: "Saskatchewan Immigrant Nominee Program (SINP)",
                  streams: [
                    { name: "Entrepreneur Category", desc: "For individuals who want to start or buy a business in Saskatchewan." },
                    { name: "Entrepreneur from Saskatchewan Category", desc: "For recent graduates from Saskatchewan post-secondary institutions who have started or are starting a business in Saskatchewan." },
                    { name: "Manitoba Business Investor Group (BIG)", desc: "For individuals who want to start or buy and help manage a business in Manitoba." },
                    { name: "Yukon Provincial Nominee Program (YNP)", desc: "For individuals who want to start or buy a business or have a stake in a business in Yukon." },
                  ],
                },
                {
                  province: "New Brunswick Provincial Nominee Program (NBNP)",
                  streams: [
                    { name: "Entrepreneur Stream", desc: "For experienced entrepreneurs who want to start a new business or buy an existing business in New Brunswick." },
                    { name: "Saskatchewan Entrepreneur Category", desc: "For individuals who want to start or buy a business in Saskatchewan." },
                    { name: "Saskatchewan Farmer Category", desc: "For individuals who want to start or buy a farm in Saskatchewan and have farming experience." },
                  ],
                },
                {
                  province: "Yukon Provincial Nominee Program (YNP)",
                  streams: [
                    { name: "Business Investor Program", desc: "For individuals who want to start or buy a business in Yukon." },
                  ],
                },
                {
                  province: "Nova Scotia Provincial Nominee Program (NSNP)",
                  streams: [
                    { name: "Entrepreneur Stream", desc: "For individuals who want to start a new business in Nova Scotia." },
                  ],
                },
              ].map((item) => (
                <div key={item.province} className="flex flex-col gap-2">
                  <h4 className="font-bold text-gray-800">{item.province}</h4>
                  {item.streams.map((stream) => (
                    <div key={stream.name} className="flex flex-col gap-1 pl-4 border-l-2 border-primary">
                      <p className="font-semibold text-primary text-sm">{stream.name}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{stream.desc}</p>
                    </div>
                  ))}
                </div>
              ))}

              <p className="text-gray-700 leading-relaxed">
                The requirements, processes, and criteria vary from province to province. Generally, you need to have a business plan, sufficient net worth, and business experience to apply. If you meet these requirements and want to live in a specific province and have made exploratory visits to it, going through a Provincial Nominee Program may be the easiest way to start a new business in a specific Canadian province. Learn more about how to find your pathway.
              </p>

              <div className="flex justify-center mt-2">
                <SignupDialog>
                  <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                    Find Your Pathway
                  </button>
                </SignupDialog>
              </div>
            </div>
          </section>

          <section id="business-visitor" className="flex flex-col gap-6 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">Business Visitor Visa</h2>

            <div className="w-full relative h-[20em]">
              <Image
                src="/img/536e06dcfa176a824dc1cec07af86afc.jpg"
                alt="Business Visitor Visa"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 leading-relaxed">
              If you're not ready to immigrate but want to explore business prospects, attend meetings, conferences, or trade fairs, or scout the business climate of Canada, a Business Visitor Visa would be the ideal means of doing so. Unlike the work permit, the Business Visitor Visa is not for those who want to start working in Canada. It's for business-related activities such as attending meetings, conferences, making inquiries, or negotiating contracts. The Business Visitor Visa does not allow the holder to work in the host country.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The process to obtain a Business Visitor Visa typically involves the following:
            </p>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 1: Confirm Your Eligibility</h3>
              <p className="text-gray-700 leading-relaxed">
                If you want to do business in or travel to Canada for a short period, however, it is advisable to have a letter of support by either someone you know from their hometown. You must prove that you are attending a business relationship with a company in Canada or have been invited to a meeting, conference, or exhibition.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 2: Compile the Document File and Application Forms</h3>
              <p className="text-gray-700 leading-relaxed">
                You can apply online or on paper. You must have a valid, unexpired, and official valid Canadian business plan for your Canadian business. You must also know about immigration regulations and the Canadian Immigration Requirements. Please use these provisions as a reminder to collect, review and update copies of your documents, to upload and post with each new entry form.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 3: Submit the Application</h3>
              <p className="text-gray-700 leading-relaxed">
                Once submitted, you must give your fingerprints and allow biometrics after you apply, and the processing and responses will take requests for information. If your application is approved, you must send your passport for stamping.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A Business Visitor Visa offers both a quick way within strict but designated limitations. However, the limited nature can open the right to work in Canada even with a work permit. The main purpose of a Business Visitor Visa is to allow individuals to explore business opportunities in Canada without committing to a work permit.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Business Visitor Visa plays a significant role in fostering international business relations. It enables global trade by and allows entrepreneurs to expand their connections and reach. Facilitating cross-border collaboration, partnerships, and economic growth. However, misuse of the Business Visitor Visa can result in strict consequences, including deportation and a permanent travel ban to that country forever. It's essential to use this visa for its intended purpose.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're an entrepreneur looking to explore business opportunities in Canada, an immigrant looking to start a new business journey, or you just want these opportunities to see available or accessible business in Canada before making a move or arranging an emigrating to Canada in a list of provinces suitable for you or relatives, Start each of your journey of business immigration to Canada today.
              </p>
              <div className="flex justify-center mt-2">
                <SignupDialog>
                  <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                    Get Your Start Today!
                  </button>
                </SignupDialog>
              </div>
            </div>
          </section>
          <section id="faqs" className="flex flex-col gap-6 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">FAQs</h2>

            <div className="w-full relative h-[20em]">
              <Image
                src="/img/08d215adced62174b0a44faa0fa0b62f.jpg"
                alt="Business Immigration FAQs"
                fill
                className="object-cover"
              />
            </div>

            <FAQAccordion
              showTitle={false}
              faqs={[
                {
                  question: "Can You Start a Business in Canada without PR?",
                  answer: "You can start a business in Canada without being a Permanent Resident (PR). Non-Canadians can register a business in Canada, but the province they are registering in may have rules for the type of business. However, depending on your circumstances, you may need a work permit or visa to operate the business.",
                },
                {
                  question: "What Business Can I Start in Canada?",
                  answer: "You can start any business in Canada as long as it is legal and meets the regulatory requirements of the industry and province. The business climate depends on your skills, experience, and market demand. The possibilities are endless — from tech start-ups to restaurants, retail stores, and professional firms.",
                },
              ]}
            />
          </section>
        </article>
      </div>
    </main>
  )
}

export default BusinessVisa