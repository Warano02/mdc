import Image from "next/image";
import type { Metadata } from "next";
import SignupDialog from "@/components/SignupDialog";
import ContactSection from "@/components/ContactSection";
import OurService from "@/components/home/OurService";
import TestimonySection from "@/components/home/TestimonySection";

export const metadata: Metadata = {
  title: "RCIC - Immigration Consultants | MDC Canada",
  description: "Looking to work, study, or live in Canada? MDC Canada's certified consultants simplify the visa and immigration process for you. Apply today!",
};

const steps = [
  {
    icon: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/images/immigration-eval/Step 1-Icon.png",
    title: "Step 1",
    text: "Begin your eligibility evaluation by answering our simple questionnaire.",
  },
  {
    icon: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/images/immigration-eval/Step 2-Icon.jpg",
    title: "Step 2",
    text: "Receive a call from immigration account manager.",
  },
  {
    icon: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/images/immigration-eval/Step 3-Icon.png",
    title: "Step 3",
    text: "One of our Regulated Canadian Immigration Consultants (RCICs) will strategize solutions based on your answers.",
  },
  {
    icon: "https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/images/immigration-eval/Step 4-Icon.png",
    title: "Step 4",
    text: "Discover which of the 100+ Canadian immigration programs you qualify for based on your needs and goals.",
  },
];

const whatWeDo = [
  "We are an immigration consulting agency that provides personalized and all-inclusive services to clients who study, live or work in Canada.",
  "We offer you and your family a personal evaluation service tailored to your specific needs. Our RCICs ensure that IRCC Canada requirements are met.",
  "Our Regulated Canadian Immigration Consultants (RCICs) are all registered with the College of Immigration and Citizenship Consultants (CICC).",
  "We offer in-depth consultation services that may give you the best chance of achieving your Canadian immigration goal. You can even sign up for our IELTS course to improve your language skills.",
];

const story = [
  {
    title: "Dedicated To Diligent Services",
    text: "Want to find out how to move to Canada? Consult with us to understand the Canadian immigration process. We'll provide you with in-depth solutions to prepare you for your journey.",
  },
  {
    title: "Relatable Professionals",
    text: "Our team of RCICs have personal experience with the Canadian immigration system. This inspires them to provide the best service, because they know how difficult immigration can be.",
  },
  {
    title: "Real RCICs",
    text: "We are always up to date with the latest immigration news and trends. Whether you want to immigrate, visit or spend a working holiday in Canada, our Regulated Canadian Immigration Consultants will find the perfect route for you.",
  },
  {
    title: "Where We Are",
    text: "We are based in vibrant Vancouver right opposite the city's immigration office.",
  },
];

export default function HomePage() {
  return (
    <main className="w-screen relative">
      <section className="w-full h-auto  bg-[url('/img/home_1.webp'),linear-gradient(to_left,rgb(255,255,255),rgb(40,49,124))] bg-cover bg-no-repeat  relative ">
        <div className="container w-full md:h-128.5 flex flex-col justify-center items-center bg-[linear-gradient(to_left,rgba(255, 255, 255, 0.47),rgba(3,13,100,0.59))] bg-auto bg-no-repeat ">
          <h1 className="text-3xl text-center md:text-start text-white font-(--font-heading) ">Your journey to Canada starts here</h1>
          <br />
          <h3 className="text-white text-center md:text-start md:text-xl md:max-w-[28em]">
            We provide the guidance and services to make your Canadian immigration process easy, affordable, and reliable.
          </h3>
          <br />
          <SignupDialog>
            <button className="w-42.5 h-10.5 font-bold text-white bg-transparent border-2 border-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-primary">
              GET STARTED
            </button>
          </SignupDialog>

          <div className="grid grid-cols-2 w-full md:flex flex-wrap items-center gap-4  md:gap-2 my-6 relative">
            <div className="w-full md:w-50 h-16.5 rounded-lg relative overflow-hidden">
              <Image src={"/cvr-review.png"} alt="cvr review" fill className="object-fit" />
            </div>
            <div className="w-full md:w-50 h-16.5 rounded-lg relative overflow-hidden">
              <Image src={"/google-review.png"} alt="cvr review" fill className="object-cover md:object-fit" />
            </div>
            <div className="w-full md:w-50 h-16.5 rounded-lg relative overflow-hidden">
              <Image src={"/tp-review.png"} alt="cvr review" fill className="object-cover md:object-fit" />
            </div>
          </div>
        </div>

        <div className="w-full min-h-32.5 bg-primary ">
          <div className="md:container w-full h-full grid grid-cols-2 md:flex items-center justify-center gap-2 md:gap-4 relative ">
            <div className="w-full md:w-60 h-20.5 relative flex items-center gap-2">
              <span className="relative w-19.5 md:w-14.5 h-11.5">
                <Image src={"/img/icon/certified.png"} fill className="object-cover" alt="certified icon" />
              </span>
              <span className="relative text-xs md:text-base text-white  font-semibold">
                Certified Immigration Consultants
              </span>
            </div>
            <div className="w-full md:w-60 h-20.5 relative flex items-center gap-2">
              <span className="relative  w-13.5 h-11.5">
                <Image src={"/img/icon/experience.png"} fill className="object-cover" alt="certified icon" />
              </span>
              <span className="relative text-xs md:text-base text-white  font-semibold">
                Years of Experience
              </span>
            </div>
            <div className="w-full md:w-60 h-20.5 relative flex items-center gap-2">
              <span className="relative  w-13.5 h-11.5">
                <Image src={"/img/icon/Applications.png"} fill className="object-cover" alt="certified icon" />
              </span>
              <span className="relative text-xs md:text-base text-white font-semibold">
                1000s of Satisfied Clients
              </span>
            </div>
            <div className="w-full md:w-60 h-20.5 relative flex items-center gap-2">
              <span className="relative  w-13.5 h-11.5">
                <Image src={"/img/icon/Guidance.png"} fill className="object-cover" alt="certified icon" />
              </span>
              <span className="relative text-xs md:text-base text-white  font-semibold">
                24/7 Support and Guidance
              </span>
            </div>
          </div>
        </div>
      </section>
      <OurService />
      <TestimonySection />
      <section className="w-full flex flex-col items-center py-16 px-4">
        <h2 className="text-3xl text-primary font-serif text-center mb-12">
          What to expect in 4 simple steps
        </h2>
        <div className="w-full max-w-6xl grid grid-cols-4 gap-6 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-24 h-24 rounded-full bg-primary-50 flex items-center justify-center overflow-hidden">
                <Image src={step.icon} alt={step.title} width={70} height={70} className="object-contain" />
              </div>
              <h3 className="text-primary font-bold">{step.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed max-w-[16em]">{step.text}</p>
            </div>
          ))}
        </div>
        <SignupDialog>
          <button className="mt-12 h-12 px-10 bg-[#dc3545] text-white font-bold text-sm tracking-widest hover:bg-[#c82333] transition-colors cursor-pointer">
            TAKE THE FIRST STEP
          </button>
        </SignupDialog>
      </section>

      <section className="w-full bg-gray-50 flex flex-col items-center py-16 px-4">
        <h2 className="text-3xl text-primary font-serif text-center mb-12">What We Do</h2>
        <div className="w-full max-w-4xl flex flex-col gap-8">
          {whatWeDo.map((text, i) => (
            <div key={i} className="flex items-start gap-5">
              <Image src="/img/icon/serive-check.jpg" alt="check" width={40} height={40} className="shrink-0 rounded" />
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <SignupDialog>
          <button className="mt-12 h-12 px-10 bg-primary text-white font-bold text-sm tracking-widest hover:bg-primary-light transition-colors cursor-pointer">
            GET ACCESS
          </button>
        </SignupDialog>
      </section>



      <section
        className="w-full bg-cover bg-center relative py-16"
        style={{ backgroundImage: "url('/img/story-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-sm tracking-widest text-white/80 font-bold text-center mb-10">OUR STORY</h2>
          <div className="grid grid-cols-2 gap-10 max-[700px]:grid-cols-1">
            {story.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl text-white font-serif mb-2">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <section className="w-full h-[26em] mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5205.208258025486!2d-123.11723!3d49.283898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867183b80a09fd%3A0xc1575ebdbf074410!2sMDC%20Canada%20-%20Visa%20Applications%20and%20Immigration%20Services!5e0!3m2!1sen!2scm!4v1730555304932!5m2!1sen!2scm"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}