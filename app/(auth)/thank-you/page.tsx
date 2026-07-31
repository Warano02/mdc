import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
    title: "Thank You | MDC Canada",
}

const howItWorks = [
    {
        icon: "/img/icon/icon_HowitWorks1.svg",
        label: "You will receive a call from your dedicated account manager",
    },
    {
        icon: "/img/icon/icon_HowitWorks2.svg",
        label: "Collection of documents and submission of application",
    },
    {
        icon: "/img/icon/icon_HowitWorks3.svg",
        label: "You're on your way to living the Canadian dream",
    },
]

export default function ThankYouPage() {
    return (
        <>
            <Header />
            <main className="pt-23.5 w-full">
                <section className="w-full bg-primary text-white py-20 max-[560px]:py-14">
                    <div className="container flex flex-col items-center text-center max-w-3xl mx-auto">
                        <Image
                            src="/img/icon/white_checked.svg"
                            alt=""
                            width={76}
                            height={75}
                            className="mb-6"
                        />
                        <h1 className="font-serif text-white text-4xl font-bold mb-6 max-[560px]:text-3xl">
                            What&apos;s next?
                        </h1>
                        <p className="font-semibold leading-relaxed mb-6 max-w-2xl">
                            We&apos;ve successfully received your information. Within the next
                            few minutes, you&apos;ll receive an email from us with the next
                            steps. We look forward to supporting you through the next steps!
                        </p>
                        <p className="font-semibold leading-relaxed max-w-2xl">
                            Ensure your immigration application go smoothly without any delays
                            by preparing documents like your CV and making sure that your
                            educational documentation (certificates or diplomas etc) are ready
                            to go. Our professional Regulated Canadian Immigration Consultants
                            (RCICs) are ready to handle your unique immigration case.
                        </p>
                    </div>
                </section>

                <section className="w-full bg-white py-20 max-[560px]:py-14">
                    <div className="container flex flex-col items-center text-center">
                        <h2 className="font-serif text-primary text-4xl font-bold mb-14 max-[560px]:text-3xl max-[560px]:mb-10">
                            How it works?
                        </h2>
                        <div className="flex justify-center items-start gap-16 max-[860px]:flex-col max-[860px]:items-center max-[860px]:gap-14">
                            {howItWorks.map((item) => (
                                <div key={item.label} className="flex flex-col items-center max-w-64">
                                    <Image src={item.icon} alt="" width={86} height={92} />
                                    <p className="text-primary font-semibold text-sm mt-4">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="w-full bg-white pb-20 max-[560px]:pb-14">
                    <div className="container flex flex-col items-center text-center">
                        <div className="bg-gray-100 rounded-2xl px-10 py-10 flex flex-col items-center max-w-lg">
                            <div className="flex items-center justify-center gap-8 mb-6 flex-wrap">
                                <Image
                                    src="/img/icon/488-4881268_payment-options-comodo-ssl-logo-png-transparent-png copy.svg"
                                    alt="Comodo SSL"
                                    width={140}
                                    height={50}
                                />
                                <Image
                                    src="/img/icon/iccrc-new.png"
                                    alt="CICC CCIC"
                                    width={165}
                                    height={54}
                                />
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                All personal information submitted to this website is secure
                                and will not be shared with any third parties without your
                                express permission.
                            </p>
                        </div>
                        <p className="text-gray-500 text-sm italic leading-relaxed mt-16 max-w-2xl">
                            Multi Dimension Consulting Ltd is a Canadian immigration agency
                            located in Vancouver, Canada. Privacy Policy MDC is a private
                            Canadian Immigration agency and is not affiliated with the Canadian
                            Government.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
