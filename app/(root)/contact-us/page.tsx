import ContactSection from "@/components/ContactSection";
import SignupDialog from "@/components/SignupDialog";

export const metadata={
  title:"Contact Us | MDC Canada"
}
export default function ContactPage() {
  return (
    <main className="w-full">
      <section
        className="w-full h-[32em] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/img/bg/contact_us.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(89,121,209,0.12)] to-[rgba(9,19,110,0.9)]" />

        <div className="relative z-10 h-full flex flex-col justify-center pl-12 text-white">
          <div className="ml-8 max-w-[41em]">
            <h1 className="text-5xl font-bold mb-6 font-serif">Contact Us</h1>
            <p className="text-lg font-semibold leading-relaxed w-4/5 mb-8">
              We provide the guidance and services to make your Canadian
              immigration process easy, affordable, and reliable.
            </p>
            <SignupDialog>
              <button className="w-[15em] h-[3em] font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-500 cursor-pointer">
                GET STARTED
              </button>
            </SignupDialog>
          </div>
        </div>
      </section>
      <ContactSection />
      <section className="w-full h-[32em] mt-4">
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