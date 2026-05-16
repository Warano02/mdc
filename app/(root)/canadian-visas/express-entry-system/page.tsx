import Link from "next/link";
import SignupDialog from "@/components/SignupDialog";
import TableOfContents from "@/components/TableOfContents";
import Image from "next/image";
import FAQAccordion from "@/components/why-us/FAQAccordion";

export const metadata = {
  title: "Express Entry System | MDC Canada",
  description: "Discover how you can become a permanent resident with Express Entry Canada.",
};

const tocItems = [
  { id: "what-is", label: "What is Express Entry Canada?" },
  { id: "how-to-apply", label: "How To Apply for Express Entry" },
  { id: "faqs", label: "FAQs" },
];

function ExpressEntry() {
  return (
    <main className="w-full">
      <section
        className="w-full h-[36em] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/img/bg/express_d.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="ml-12 flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
            <p className="text-5xl text-white font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
              Express Entry System
            </p>
            <p className="text-lg font-bold mb-10 max-sm:w-[95%] max-sm:text-center">
              Discover how you can become a permanent resident with Express Entry Canada.
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
              Delving into the complex world of Express Entry Canada, one will likely feel overwhelmed
              by the flood of intricate details, various criteria, and opposing experiences shared
              across countless forums. Still, at its core, securing your permanent residency in Canada
              is a process that is navigable, rewarding, and within your grasp.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Stripping back the layers, we aim to explain these services directly and authoritatively,
              which will help simplify your journey toward obtaining your permanent residency in Canada.
              Flanked by factual information and concrete advice, our fundamental goal is to equip you,
              the reader, with a deep understanding of the inner workings of the Express Entry system,
              ensuring a seamless immigration process.
            </p>
            <div className="flex justify-center">
              <SignupDialog>
                <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                  Take the Express Route
                </button>
              </SignupDialog>
            </div>
          </div>
          <section id="what-is" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">What is Express Entry Canada?</h2>
            <p className="text-gray-700 leading-relaxed">
              Express Entry Canada is a fast-paced, point-based immigration system that invites skilled workers to live and work permanently in the country. Express Entry Canada is the primary pathway for skilled immigrants seeking permanent residency in Canada. It's a streamlined process that revolutionizes the old "first come, first served" model, focusing instead on the prospective immigrant's ability to contribute to Canada's economy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Before going any further, it's crucial to understand that Express Entry is not an immigration program. Instead, it's a system used by{" "}
              <Link href="#" className="text-primary hover:underline">Immigration, Refugees, and Citizenship Canada</Link>
              {" "}(IRCC) to manage and streamline applications for three federal economic immigration programs. These are the Federal Skilled Worker Program (FSWP), Federal Skilled Trades Program (FST) and the Canadian Experience Class (CEC Canada).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Candidates apply by creating an Express Entry profile, where they enter information such as their age, marital status, work experience, level of education, language proficiency, and connections to Canada to help determine their eligibility for Canadian permanent residency. Their eligibility is evaluated via the{" "}
              <Link href="#" className="text-primary hover:underline">Comprehensive Ranking System</Link>
              {" "}(CRS). The Candidate then receive their eligibility rating out of 1,200, known as a CRS score. All scores are placed into an Express Entry pool.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Canada Express Entry Draw occurs approximately every two weeks. Candidates are ranked based on their CRS score during these draws. This points-based system evaluates candidates based on age, education, language proficiency, and work experience. These factors highlight a candidate's potential to succeed in Canada's economy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The highest-ranking candidates in each draw are issued an Invitation to Apply (ITA) for permanent residency. The number of ITAs issued in each draw can vary, but the trend has generally been towards larger draws as Canada aims to meet its ambitious immigration targets. It's important to note that receiving an ITA does not guarantee permanent residency. Instead, it's an invitation to submit a formal application within a specified time frame.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The beauty of Express Entry lies in its efficiency and speed. Unlike traditional immigration processes that could take years, Express Entry applications typically resolve within six months. This is a game-changer for skilled professionals across the globe, opening a fast and efficient path to starting their new lives in Canada.
            </p>
          </section>
          <section id="how-to-apply" className="flex flex-col gap-6 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">How To Apply for Express Entry</h2>

            <div className="w-full relative h-[20em]">
              <Image
                src="/img/4659756bc8a5b2fcc15d652c8135023e.jpg"
                alt="How to apply for Express Entry"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 1: Create Your Express Entry Profile</h3>
              <p className="text-gray-700 leading-relaxed">
                Your journey toward permanent residency in Canada starts with creating an Express Entry profile on the Canadian government website's Express Entry portal. When you do this, you will fill out an online form where you provide information about your skills, work experience, language ability, education, and other details. The information you provide in your Express Entry profile determines your eligibility for permanent residency in Canada.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It's crucial to be accurate and honest when filling out your profile. Any discrepancies between the information you provide now and the documents you submit later could lead to delays or disqualification. Once your profile is complete, it enters the Express Entry pool, ranking against others using the CRS.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 2: Ensure Your Eligibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Canada's Express Entry is a system for managing immigration applications for several of the country's economic immigrant programs. It is designed to get skilled workers to Canada quickly. However, to be eligible for the Canada Express Entry system, there are specific criteria that an individual must meet.
              </p>

              <h4 className="font-bold text-gray-800">Work Experience</h4>
              <p className="text-gray-700 leading-relaxed">
                The applicant must have at least one year of full-time (or equivalent part-time) skilled work experience. This experience must be in an occupation under Canada's{" "}
                <Link href="#" className="text-primary hover:underline">National Occupational Classification</Link>
                {" "}(NOC) Training, Experience, Education, and Responsibility (TEER) levels 0, 1, 2, or 3. This classification refers to the following:
              </p>

              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-4 py-3 font-semibold border-r border-gray-300">Job Type</th>
                    <th className="text-left px-4 py-3 font-semibold">TEER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-3 border-r border-gray-300">Managerial jobs</td>
                    <td className="px-4 py-3">0</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-300">Jobs that usually require a university degree</td>
                    <td className="px-4 py-3">1</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-3 border-r border-gray-300">Supervisory jobs or jobs requiring either a college diploma, apprenticeship or six months of on-the-job training</td>
                    <td className="px-4 py-3">2 and 3</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="font-bold text-gray-800">Language Ability</h4>
              <p className="text-gray-700 leading-relaxed">
                The applicant must meet or exceed a{" "}
                <Link href="#" className="text-primary hover:underline">Canadian Language Benchmark</Link>
                {" "}(CLB) of a certain level. To do this, they must score well in a language proficiency test, such as the IELTS. The minimum score varies depending on the immigration program an individual applies to. For instance, under the Federal Skilled Worker Program, applicants must have an IELTS score of at least 7 in all four abilities (reading, writing, speaking, and listening) to be deemed proficient in English.
              </p>

              <h4 className="font-bold text-gray-800">Education</h4>
              <p className="text-gray-700 leading-relaxed">
                The applicant must have all of their educational credentials validated before applying. An{" "}
                <Link href="#" className="text-primary hover:underline">Educational Credential Assessment</Link>
                {" "}(ECA) report is required if the applicant was educated outside Canada. This report verifies that the individual's foreign degree, diploma, certificate, or other proof of educational credential is valid and equivalent to a Canadian one.
              </p>

              <h4 className="font-bold text-gray-800">Settlement Funds</h4>
              <p className="text-gray-700 leading-relaxed">
                Lastly, to be eligible for the Canada Express Entry system, individuals must also prove that they have enough money to support themselves and their families after they arrive in Canada unless they can legally work in Canada or already have a valid job offer from an employer in Canada.
              </p>

              <h4 className="font-bold text-gray-800">Other Factors</h4>
              <p className="text-gray-700 leading-relaxed">
                The Express Entry system also considers factors like the applicant's age, whether they have a valid job offer in Canada, and their adaptability factors, including previous study or work experience in Canada or relatives in Canada. These factors collectively form part of a comprehensive ranking system (CRS) that determines whether an applicant is invited to apply for permanent residence.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 3: Choose Your Express Entry Program</h3>
              <p className="text-gray-700 leading-relaxed">
                You must choose the appropriate Express Entry program when setting up your Express Entry profile. This choice will depend on your skills, qualifications, and work experience. The three Express Entry programs are as follows:
              </p>

              <h4 className="font-bold text-gray-800">Federal Skilled Worker Program (FSWP)</h4>
              <p className="text-gray-700 leading-relaxed">
                The FSWP is designed for skilled workers with foreign experience who want to immigrate to Canada permanently. To be eligible, you must meet certain criteria, including having at least one year of continuous, paid, full-time (or equivalent part-time) work experience in an occupation under Canada's NOC TEER levels 0, 1, and 2 within the last ten years. This refers to jobs that generally require a university degree. Learn more about the{" "}
                <Link href="#" className="text-primary hover:underline">Federal Skilled Worker Program</Link>.
              </p>

              <h4 className="font-bold text-gray-800">Federal Skilled Trades Program (FSTP)</h4>
              <p className="text-gray-700 leading-relaxed">
                The FSTP is for skilled workers who want to become permanent residents based on being qualified in a skilled trade. To qualify for this program, you must have at least two years of full-time work experience in a skilled trade which generally falls under NOC TEER 2 or 3 within the five years before applying. Occupations in these TEERs may not require a university degree but will often require a college diploma, on-the-job training, or significant job experience. Learn more about the{" "}
                <Link href="#" className="text-primary hover:underline">Federal Skilled Trades Program</Link>.
              </p>

              <h4 className="font-bold text-gray-800">Canadian Experience Class (CEC Canada)</h4>
              <p className="text-gray-700 leading-relaxed">
                CEC Canada is for skilled workers with Canadian work experience who want to become permanent residents. The minimum work experience required for this program is one year of full-time (or equivalent part-time) skilled work experience in an occupation under NOC TEER 0, 1, 2, or 3 in Canada within the three years before applying. Learn more about{" "}
                <Link href="#" className="text-primary hover:underline">CEC Canada</Link>.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Each program has specific eligibility requirements to fulfill to enter the Express Entry draw.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 4: Receive Your CRS Score</h3>
              <p className="text-gray-700 leading-relaxed">
                You will receive your CRS score once you've chosen your program and completed your profile. This score is calculated based on your Express Entry profile information and ranks you against others in the Express Entry pool.
              </p>

              <h4 className="font-bold text-gray-800">How to Calculate Your CRS Score</h4>
              <p className="text-gray-700 leading-relaxed">
                CRS is a points-based system that assesses your profile based on age, education, language proficiency, and work experience. There are also additional points for factors such as having a valid job offer, a nomination from a province or territory, a sibling living in Canada, or strong French language skills.
              </p>
              <p className="text-gray-700 leading-relaxed">
                However, please note that a CRS calculator can only give you an estimation of what your CRS score will be. Suppose you want to be certain of your chosen Express Entry program eligibility. In that case, it's best to speak to a certified immigration professional like a{" "}
                <Link href="#" className="text-primary hover:underline">Regulated Canadian Immigration Consultant</Link>
                {" "}(RCIC) after using a CRS calculator.
              </p>

              <h4 className="font-bold text-gray-800">How to Improve Your CRS Score</h4>
              <p className="text-gray-700 leading-relaxed">
                If your initial CRS score isn't as high as you'd like, don't worry—there are several ways to improve it. These might include improving your language skills, gaining work experience, completing higher education, or obtaining a job offer or provincial nomination. Learn more about maximizing your CRS score to boost your chance of becoming a permanent resident in Canada. Learn more about{" "}
                <Link href="#" className="text-primary hover:underline">improving your CRS score</Link>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                One of the largest determining factors in the strength of your CRS score is whether or not you receive a provincial nomination. To do this, you must know which of Canada's provinces you plan to move to. Here's a directory of Canada's provinces and Territories to help you get started.
              </p>
              <p className="text-gray-700 leading-relaxed">
                11 of Canada's 13 provinces and territories have a{" "}
                <Link href="#" className="text-primary hover:underline">Provincial Nominee Program</Link>
                {" "}(PNP). These programs allow each province to nominate international applicants for permanent residency in Canada, provided they live and work in that province. Each program has multiple PNP streams.
              </p>

              <div className="flex justify-center mt-2">
                <SignupDialog>
                  <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                    Discover Your CRS Score
                  </button>
                </SignupDialog>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 5: Enter The Canada Express Entry Draw</h3>
              <p className="text-gray-700 leading-relaxed">
                Once you receive your CRS score, you're ready to enter the Canada Express Entry Draw. Remember, these draws take place approximately every two weeks. The highest-ranking candidates in each draw receive an ITA.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 6: Receive Your Invitation to Apply (ITA)</h3>
              <p className="text-gray-700 leading-relaxed">
                If your CRS score is high enough, you'll receive an ITA during one of the Express Entry draws. This ITA is your invitation to submit a formal application for permanent residency in Canada. You typically have 60 days to submit your application after receiving an ITA.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 7: Pay Your Fees and Submit Your Documentation</h3>
              <p className="text-gray-700 leading-relaxed">
                After receiving your ITA, you'll need to prepare your application for permanent residency. The documentation required for Express Entry is as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
                <li>Passport</li>
                <li>ECA</li>
                <li>Recent language tests;</li>
                <li>Proof of funds showing sufficient settlement funds</li>
                <li>Police certificates;</li>
                <li>Results of a medical exam from certified health professionals;</li>
                <li>Job letters from past employers legitimize your work experience.</li>
                <li>Canadian job offer (if you have one)</li>
                <li>Provincial Nomination (if you have one)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Ensuring all documents are correctly validated, filled out, and submitted on time is crucial to avoid delays or rejections.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Once you have submitted all required documentation, you must pay your processing fees. The Canada Express Entry processing fees are as follows:
              </p>

              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-4 py-3 font-semibold border-r border-gray-300">Fees</th>
                    <th className="text-left px-4 py-3 font-semibold">CAD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-3 border-r border-gray-300">Right of Permanent Residence</td>
                    <td className="px-4 py-3">515</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-300">Main applicant/ spouse processing fee</td>
                    <td className="px-4 py-3">570</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-3 border-r border-gray-300">To add a dependent child (per child)</td>
                    <td className="px-4 py-3">155</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">After You Apply: The Express Entry Processing Time</h3>
              <p className="text-gray-700 leading-relaxed">
                Once you've submitted your application, the waiting begins. The Express Entry processing time is typically six months, though this can vary depending on the specifics of your application and the current volume of applications being processed. During this time, it's crucial to update your contact information in case IRCC needs to reach you. Learn more about the IRCC processing times.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Navigating the Express Entry Canada system can be complex, but it's a very achievable goal with the right information and preparation. Good luck on your journey to permanent residence in Canada.
              </p>
              <div className="flex justify-center mt-2">
                <SignupDialog>
                  <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                    Start Your PR Process!
                  </button>
                </SignupDialog>
              </div>
            </div>
          </section>

          <section id="faqs" className="flex flex-col gap-6 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">FAQs</h2>

            <div className="w-full relative h-[20em]">
              <Image
                src="/img/39d2a16dbea8fbfac93803a971434726.jpg"
                alt="Express Entry FAQs"
                fill
                className="object-cover"
              />
            </div>

            <FAQAccordion
              showTitle={false}
              faqs={[
                {
                  question: "When is The Next Express Entry Draw?",
                  answer: "The Canada Express Entry Draw generally occurs every two weeks. However, the exact schedule can vary, and the best way to stay informed is to check the IRCC's website regularly or subscribe to their updates.",
                },
                {
                  question: "What is a Good CRS Score?",
                  answer: "CRS scores can range from 0 to 1,200. However, there's no definitive answer to what constitutes a \"good\" CRS score. Each Express Entry draw has a different minimum CRS score, determined by factors such as the number of candidates in the pool and Canada's immigration targets.",
                },
              ]}
            />
          </section>
        </article>
      </div>
    </main>
  );
}

export default ExpressEntry;