import Link from "next/link";
import SignupDialog from "@/components/SignupDialog";
import TableOfContents from "@/components/TableOfContents";
import Image from "next/image";
import FAQAccordion from "@/components/why-us/FAQAccordion";

export const metadata = {
  title: "Family Sponsorship Program | MDC Canada",
  description: "Discover how you can become a permanent resident with Express Entry Canada.",
};

const tocItems = [
  { id: "what-is", label: "What is Family Sponsorship Canada?" },
  { id: "who-can", label: "Who Can Be Sponsored?" },
  { id: "programs", label: "Canada Family Sponsorship Programs" },
  { id: "application", label: "The Family Sponsorship Application Process" },
  { id: "faqs", label: "FAQs" },
];

function FamilyVisa() {
  return (
    <main className="w-full">
      <section
        className="w-full h-[36em] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/img/g/family_d.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="ml-12 flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">
            <p className="text-5xl text-white font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
              Family Sponsorship Program
            </p>
            <p className="text-lg font-bold mb-10 max-sm:w-[95%] max-sm:text-center">
              If you want to join your family in Canada, they may be able to sponsor your permanent residency.
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
          {" "}Family Sponsorship Program
        </h3>
      </div>
      <div className="flex gap-8 px-8 py-10 w-full max-w-5xl mx-auto">
        <TableOfContents items={tocItems} />

        <article className="flex-1 min-w-0 flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-gray-700 leading-relaxed">
              Navigating the maze of immigration procedures can test anyone's resolve. But when it involves family, every step bears significance. Enter the allure of Family Sponsorship Canada - a beacon of hope for those seeking to bring loved ones into Canada's embrace. This complex process might initially seem intimidating but don't despair. This article provides comprehensive guidance, shedding light on the path to permanent residency for your family.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In the following sections, we will delve into the details of the family sponsorship Canada program, including who can be sponsored, the different types of sponsorship programs available, and the application process. We aim to guide you through these complexities and provide you with a comprehensive understanding of this significant immigration pathway. We intend to inform, empathize, understand the stakes, and simplify the way ahead. Canada awaits, ready to welcome your family with open arms, and we're here to ensure the journey is less daunting. Trust in our experience and expertise, and let's take this significant step in reuniting your family under the comforting canopy of Canada.
            </p>
            <div className="flex justify-center">
              <SignupDialog>
                <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                  Join Your Family In Canada
                </button>
              </SignupDialog>
            </div>
          </div>

          <section id="what-is" className="flex flex-col gap-6 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">What is Family Sponsorship Canada?</h2>

            <div className="w-full relative h-[20em]">
              <Image
                src="/img/b39f734bda0c0645a31701f27305318f.jpg"
                alt="What is Family Sponsorship Canada"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 leading-relaxed">
              Family sponsorship in Canada is a program that allows eligible Canadian citizens or permanent residents to sponsor close family members for Canadian immigration. This initiative encourages family reunification, a fundamental aspect of the Canadian immigration policy. The program is a potent testament to the country's commitment to keeping families together, reinforcing the social fabric while boosting the economy through increased population growth and diversity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The program, anchored by Immigration, Refugees, and Citizenship Canada (IRCC), is an opportunity for many to reunite with their loved ones and start a new chapter in their lives in Canada. However, the family sponsorship Canada program is not without its complexities. Understanding the program's intricacies can be daunting given the numerous requirements and procedures involved. But the reward — being together with your family in one of the world's most welcoming countries — is immeasurable.
            </p>
          </section>

          <section id="who-can" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">Who Can Be Sponsored?</h2>
            <p className="text-gray-700 leading-relaxed">
              One of the core aspects of family sponsorship Canada is determining who can be sponsored. Under Canadian immigration law, you can sponsor certain relatives to come to Canada if you're at least 18 and a Canadian citizen or person registered in Canada as an Indian under the Canadian Indian Act or a permanent resident of Canada.
            </p>
            <p className="text-gray-700 leading-relaxed">The list of eligible relatives includes:</p>
            <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
              <li>your spouse, common-law partner, or conjugal partners</li>
              <li>your dependent child and any dependent children they may have</li>
              <li>Parents, grandparents, and their dependent children</li>
              <li>your brother or sister</li>
              <li>nephew or niece; or</li>
              <li>a grandchild who is orphaned, under 18 years of age, unmarried, or in a common-law relationship.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">To be eligible for sponsorship, you must have the following:</p>
            <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
              <li>Completed all application forms</li>
              <li>Provided all required documentation, including:
                <ul className="list-disc list-inside ml-6 mt-1 flex flex-col gap-1">
                  <li>medical exams</li>
                  <li>biometrics</li>
                </ul>
              </li>
              <li>Be admissible to Canada</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Learn more about what could cause you to be deemed inadmissible to Canada.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It's important to note that each category of relatives has specific requirements and conditions that must be met, both by the sponsor and the sponsored person. Understanding these requirements is the first step in the family sponsorship process.
            </p>
          </section>

          <section id="programs" className="flex flex-col gap-6 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">Canada Family Sponsorship Programs</h2>

            <div className="w-full relative h-[20em]">
              <Image
                src="/img/f849bc059f69d79096eabdd50c961258.jpg"
                alt="Canada Family Sponsorship Programs"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 leading-relaxed">
              Canada has a variety of family sponsorship programs, each designed to cater to different categories of family members. These programs include:
            </p>
            <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
              <li>Partner/Spouse Sponsorship Canada</li>
              <li>Dependent Child Sponsorship</li>
              <li>Parent and Grandparent Sponsorship</li>
              <li>Adopted Child Sponsorship</li>
              <li>Relative Sponsorship; and</li>
              <li>The Canada Super Visa</li>
            </ul>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl text-primary font-serif">Partner/Spouse Sponsorship Canada</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Partner/Spouse Sponsorship Canada program is designed to help Canadian citizens or permanent residents bring their foreign spouse or partner to live with them in Canada. This program is part of the broader Family Sponsorship Canada initiative and is one of the most popular immigration pathways in the country. The Canadian government defines spouse, common-law partner, and conjugal partner as follows:
                </p>
                <p className="text-gray-700 leading-relaxed">You are and must be:</p>
                <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
                  <li>legally married to you</li>
                  <li>at least 18</li>
                  <li>your common-law partner</li>
                  <li>cannot be legally married to you</li>
                  <li>can be either sex</li>
                  <li>must be at least 18</li>
                  <li>has been living with you in a conjugal relationship for at least 12 consecutive months, without any long periods apart (any time spent away from each other should have been):
                    <ul className="list-disc list-inside ml-6 mt-1 flex flex-col gap-1">
                      <li>short</li>
                      <li>temporary</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  If you or your common-law partner choose to end the relationship, the Canadian government considers the relationship over. You must prove your common-law relationship.
                </p>
                <p className="text-gray-700 leading-relaxed">Your conjugal partner:</p>
                <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
                  <li>isn't legally married to you or in a common-law relationship with you</li>
                  <li>can be either sex</li>
                  <li>is at least 18</li>
                  <li>has been in a relationship with you for at least one year</li>
                  <li>lives outside Canada</li>
                  <li>can't live with you in their country of residence or marry you because of significant legal and immigration reasons, such as their marital status (for example, they're still married to someone else in a country where divorce isn't possible)</li>
                  <li>their sexual orientation (for example, you are in a same-sex relationship, and same-sex relationships are not accepted, or same-sex marriage is illegal where they live)</li>
                  <li>persecution (for example, your relationship is between different religious groups which is not accepted and they may be persecuted legally or socially)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You must prove that you could not live together or get married in your conjugal partner's country (for example, proof of refused long-term stays in each other's country).
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl text-primary font-serif">Dependent Child Sponsorship</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Dependent Child Sponsorship program enables Canadian citizens or permanent residents to sponsor their dependent children for immigration to Canada. The child must be:
                </p>
                <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
                  <li>under 22 and</li>
                  <li>not have a spouse or common-law partner.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">Children 22 years or older qualify if:</p>
                <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
                  <li>they have depended substantially on their parent's financial support since before the age of 22; and</li>
                  <li>cannot support themselves due to a physical or mental condition.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  If you qualify as a dependent child, you can be sponsored by your parent is provided they fulfil the following criteria:
                </p>
                <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
                  <li>Your parent:
                    <ul className="list-disc list-inside ml-6 mt-1 flex flex-col gap-1">
                      <li>if your parents are Canadian citizens, you may also be, even if you were not born in Canada. You cannot be sponsored for permanent residence as a Canadian citizen.</li>
                      <li>if your parent only sponsors you, without sponsoring their spouse or partner, you will be the principal applicant.</li>
                      <li>Your sponsoring parent must ensure that your other parent or legal guardian agrees to you immigrating to Canada</li>
                    </ul>
                  </li>
                  <li>You can be included in children as dependents in the application if you have children.</li>
                  <li>If you're an adopted child or an orphaned family member, follow the instructions to sponsor your adopted child or orphaned family member instead.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  It's important to note that the specific requirements and processes for sponsorship may vary, so it's recommended to refer to the official government resources for detailed information and instructions.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Parent and Grandparent Sponsorship</h3>
              <p className="text-gray-700 leading-relaxed">
                The Parent and Grandparent Sponsorship program is another significant element of the Canada family sponsorship initiative. This program allows Canadian citizens and permanent residents to sponsor their parents or grandparents for immigration to Canada, provided they fulfill the following requirements:
              </p>
              <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
                <li>Be the parent or grandparent of a Canadian citizen or permanent resident.</li>
                <li>Pass medical, criminal, and background checks.</li>
                <li>Provide proof of relationship to the sponsor.</li>
                <li>Agree to undergo an immigration medical examination.</li>
                <li>Provide police certificates from all countries where they have lived for over six months since turning 18.</li>
                <li>Meet other admissibility requirements under Canadian Immigration law.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                It is an excellent opportunity for family reunification and enables elderly family members to enjoy the benefits of living in Canada.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Adopted Child Sponsorship</h3>
              <p className="text-gray-700 leading-relaxed">
                The Adopted Child Sponsorship program is for Canadian citizens or permanent residents who have adopted a child from abroad and wish to bring them to Canada. The child must be under 18 when the sponsorship application is submitted, and the adoption must:
              </p>
              <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
                <li>Be legal in the original country.</li>
                <li>Meet the requirements of the province or territory where the sponsor lives.</li>
                <li>Sever the legal bond between the biological parents and the adopted child.</li>
                <li>Result in a parent-child relationship between the sponsor and the child.</li>
                <li>Be in the child's best interest.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Relative Sponsorship</h3>
              <p className="text-gray-700 leading-relaxed">
                The Relative Sponsorship program allows Canadian citizens or permanent residents to sponsor certain relatives to come to Canada. This includes siblings, nephews, nieces, and grandchildren under 18, unmarried and orphaned.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">The Canada Super Visa</h3>
              <p className="text-gray-700 leading-relaxed">
                The Canada Super Visa is a long-term, multiple-entry visa for parents and grandparents of Canadian citizens or permanent residents. It allows the holder to stay in Canada for up to two years at a time, unlike a standard visitor visa which only allows six months per visit. Most family sponsorship programs have seasons and are open and closed when the Canadian government has either confirmed or denied how much it can approve new applicants. If you want to stay with your family until that happens, the best way is with a Super Visa.
              </p>
              <div className="flex justify-center mt-2">
                <SignupDialog>
                  <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                    Get Sponsored!
                  </button>
                </SignupDialog>
              </div>
            </div>
          </section>
          <section id="application" className="flex flex-col gap-6 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">The Family Sponsorship Application Process</h2>

            <div className="w-full relative h-[20em]">
              <Image
                src="/img/f065dc61b3824a18d20926bbfe2c1ea2.jpg"
                alt="The Family Sponsorship Application Process"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 leading-relaxed">
              The family sponsorship Canada application process is comprehensive and involves several steps.
            </p>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 1: Apply to Sponsor</h3>
              <p className="text-gray-700 leading-relaxed">
                The initial step in the process is for the Canadian citizen or permanent resident to apply to become a sponsor. This involves completing an application package, which includes various forms and supporting documents.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 2: Apply to Be Sponsored</h3>
              <p className="text-gray-700 leading-relaxed">
                Concurrently with the sponsor's application, the sponsored person must also apply for permanent residence. This also involves completing an application package with the necessary forms and documents. The documents are as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
                <li>Generic Application Form for Canada (IMM 0008)</li>
                <li>Schedule A – Background/Declaration (IMM 5669)</li>
                <li>Additional Family Information (IMM 5406)</li>
                <li>Supplementary Information – Your Travels (IMM 5562)</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 3: Pay Your Application Fees</h3>
              <p className="text-gray-700 leading-relaxed">
                Family Sponsorship Canada program application fees must be paid online. These fees include processing fees for the sponsor and the sponsored person, the right of permanent residence fee, and biometrics fees, if applicable. The fees are as follows:
              </p>

              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-4 py-3 font-semibold border-r border-gray-300">Family Sponsorship Fees</th>
                    <th className="text-left px-4 py-3 font-semibold">CAD$</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Sponsor processing fee (per person)", "150"],
                    ["Right of permanent residence fee", "515"],
                    ["Principal applicant processing fee", "490"],
                    ["Principal applicant processing fee (if the applicant is under 22)", "75"],
                    ["Inclusion of a sponsored spouse or partner processing fee", "175"],
                    ["Inclusion of a dependent child (per child)", "150"],
                  ].map(([fee, cad], i) => (
                    <tr key={i} className={`border-t border-gray-300 ${i % 2 !== 0 ? "bg-gray-50" : ""}`}>
                      <td className="px-4 py-3 border-r border-gray-300">{fee}</td>
                      <td className="px-4 py-3">{cad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 4: Submit Additional Information</h3>
              <p className="text-gray-700 leading-relaxed">
                In some instances, additional information or documents may be requested by Immigration, Refugees, and Citizenship Canada (IRCC). It's crucial to provide this information promptly to avoid delays in processing.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-primary font-serif">Step 5: Submit Your Application</h3>
              <p className="text-gray-700 leading-relaxed">
                The last step is to submit your application. Ensuring all the information is accurate and all the required documents are included is crucial to avoid delays or rejection.
              </p>
              <div className="flex justify-center mt-2">
                <SignupDialog>
                  <button className="bg-primary text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                    Reunite with Your Family
                  </button>
                </SignupDialog>
              </div>
            </div>
          </section>

          <section id="faqs" className="flex flex-col gap-6 scroll-mt-32">
            <h2 className="text-4xl text-primary font-serif">FAQs</h2>

            <div className="w-full relative h-[20em]">
              <Image
                src="/img/3865b811782eecc3de1422f35c95d14a.jpg"
                alt="Family Sponsorship FAQs"
                fill
                className="object-cover"
              />
            </div>

            <FAQAccordion
              showTitle={false}
              faqs={[
                {
                  question: "Can You Sponsor Step Children on the Family Sponsorship Program?",
                  answer: "Yes, you can sponsor stepchildren on the Family Sponsorship Program. The stepchild must be under 18, unmarried, and not a part of a common-law or conjugal relationship. The sponsor must demonstrate that they have had legal custody of the child for two years before applying. Furthermore, Canadian immigration laws require that the sponsor provide proof of financial support for the sponsored family member throughout their stay in Canada. This includes providing enough money to cover their basic needs, such as food, clothing, and shelter.",
                },
                {
                  question: "Can You Sponsor Your Partner if You Aren't Married?",
                  answer: "Yes, you can sponsor your partner even if you are not married to do so, the sponsor must demonstrate that they have been in a conjugal relationship with the sponsored person for at least one year before applying. The sponsor must also provide evidence of their financial ability to support their partners in Canada, such as proof of income or assets. Furthermore, sponsors must meet certain requirements, such as being over 18 and a Canadian citizen or permanent resident. It is also important to note that same-sex couples are eligible for the family sponsorship Canada program.",
                },
              ]}
            />
          </section>
        </article>
      </div>
    </main>
  )
}

export default FamilyVisa