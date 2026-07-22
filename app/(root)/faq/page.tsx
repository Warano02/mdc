import type { Metadata } from "next";
import Link from "next/link";
import SignupDialog from "@/components/SignupDialog";
import FAQAccordion from "@/components/why-us/FAQAccordion";

export const metadata: Metadata = {
  title: "Canadian Visas & Immigration FAQ | MDC Canada",
  description: "Our Regulated Canadian Immigration Consultants (RCICs) answer the most frequently asked questions about the Canadian visa and immigration process.",
};

const faqs = [
  {
    question: "How about Professional Immigration Fees?",
    answer:
      "Professional immigration services fees depend on your specific case, along with various factors such as the program you applied for, your family size, the complexity of your individual case and your economic situation. In some cases, the RCIC (under discretion) may agree on a more convenient payment plan that is tailored according to the client's financial situation.",
  },
  {
    question: "What is Express Entry?",
    answer:
      "Created in early 2015, the Express Entry system hastens the processing of Canadian permanent residence applications for skilled foreign workers. To be eligible for permanent residency through this system you will need to qualify for one of the Federal Economic Immigration Programs and be invited to request permanent resident status by Immigration, Refugees and Citizenship Canada through one of their Express Entry draws.",
  },
  {
    question: "What is the Express Entry pool?",
    answer:
      "Once you have completed your Express Entry profile, it will be entered into the Express Entry pool where it will be ranked against other candidates based on the Comprehensive Ranking System (CRS). Immigration, Refugees and Citizenship Canada issues the highest scoring candidates from this pool invitations to request permanent residency.",
  },
  {
    question: "How many CRS points do I need in order to get an Invitation to Apply?",
    answer:
      "It depends on the particular draw but it is safe to say a CRS score between 450-460 should be enough to qualify for at least one draw per year.",
  },
  {
    question: "How long is the process?",
    answer:
      "Applying for immigration or travel to Canada can take time. Once all the required information, forms and supporting documents have been submitted, it can take up to eighteen months for the completion of the process, and in some cases even longer. Keep in mind that for the different types of immigration programs, the specific Canadian immigration office that processes your application (processing time can vary between offices across Canada), and other factors can greatly affect the process. Express Entry is an exception, as the Canadian government aims to process these candidates much faster, with processing times average under six months.",
  },
  {
    question: "What are the government visa application fees?",
    answer:
      "Varying fees are charged by the Canadian government for the submission of different immigration forms. This is not unique to the Canadian government, as most, if not all, countries require processing fees to be paid to the immigration governing authority. The fees can range from only a few hundred to thousands of dollars, depending on which immigration program you are applying for, your family size and age (fees for children are lower than for adults). An important point to note is that government fees are non-refundable. This is why it is vitally important to ensure your documents are submitted on time, correct and complete. Failure to do so will likely result in your immigration inquiry being denied, meaning you will lose any fees paid to the Canadian government. We ensure that our client's forms are submitted correctly, increasing the chances of a success.",
  },
  {
    question: "What is Canada's stance on same-sex marriages?",
    answer:
      "Canada is a very open and liberal country. The country does not discriminate on race, gender, religion, sexuality or any other base. For this reason, same-sex marriage is legal in Canada. As long as your marriage is officially recognized in the country where it was registered, it will also be recognized in Canada. Partners who have lived together for longer than one year are also recognized as common law partners and have the same dependent privileges as spouses under immigration law.",
  },
  {
    question: "What are the French and English test requirements?",
    answer:
      "Both French and English are official languages in Canada. Newcomers must thus prove their skill in either or both of these languages to show they can settle in the country. As part of the immigration process, you are required to undergo a standardized French or English language test. The most readily available tests that are accepted by Canada is the International English Language Testing System (IELTS) and Test d'Evaluation du Français (TEF). The tests have four sections to measure listening, writing, reading and speaking.",
  },
  {
    question: "What are the key factors in the points system of the Federal Skilled Worker Visa under Express Entry?",
    answer:
      "There are six factors taken into consideration to determine your eligibility for the Federal Skilled Worker Program: English or French language skills, education, work experience, age, arranged employment in Canada, and adaptability.",
  },
];

export default function FaqPage() {
  return (
    <main className="w-full">
      <section
        className="w-full h-[26em] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/img/home_1.webp')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[rgba(3,8,59,0.72)] to-[rgba(20,4,92,0.55)]" />
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="ml-12 max-w-[38em] text-white max-md:ml-0 max-md:items-center max-md:text-center max-md:px-6">
            <h1 className="text-4xl font-serif mb-6">Frequently asked questions</h1>
            <p className="font-semibold leading-relaxed mb-8">
              We provide the guidance and services to make your Canadian immigration process easy, affordable, and reliable.
            </p>
            <SignupDialog>
              <button className="border border-white text-white px-8 py-3 w-fit tracking-widest text-sm font-semibold hover:bg-white hover:text-primary transition-colors cursor-pointer">
                GET STARTED
              </button>
            </SignupDialog>
          </div>
        </div>
      </section>

      <div className="w-full border-b border-gray-300 flex items-center px-8 h-12">
        <h3 className="text-xs text-gray-800 max-w-5xl mx-auto w-full">
          <Link href="/" className="text-gray-400 no-underline">HOME /</Link>
          {" "}FREQUENTLY ASKED QUESTIONS
        </h3>
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-10">
        <h1 className="text-4xl font-bold text-primary border-b border-gray-300 pb-4 mb-2">FAQ&apos;s</h1>
        <p className="text-gray-700 leading-relaxed py-4">
          Our Regulated Canadian Immigration Consultants (RCICs) have a wealth of experience in dealing with all the challenges involved in the visa application process and are more than happy to answer any questions you may have.
        </p>
      </div>

      <FAQAccordion faqs={faqs} showTitle={false} />

      <p className="text-center text-gray-700 text-sm pb-16 px-4">
        Didn&apos;t find the answer you were looking for? Send an email to customer care at{" "}
        <a href="mailto:support@mdccanada.ca" className="text-red-600 hover:underline">support@mdccanada.ca</a>{" "}
        and they will get back to you as soon as possible.
      </p>
    </main>
  );
}