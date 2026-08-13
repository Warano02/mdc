import { testimonials } from "@/contants"
import Testimonial from "../Testimonial"
import Link from "next/link"

function TestimonySection() {
    return (
        <section className="border-y-2 border-y-primary relative w-full">
            <div className="container min-h-132.5 md:flex justify-between py-6 relative">
                <div className="w-full md:flex-1 shrink-0 space-y-12">
                    <div className="relative space-y-6">
                        <h1 className="text-2xl md:text-4xl md:max-w-2/3 ">
                            Real Stories of Exceptional Service
                        </h1>
                        <span className="w-15 h-0.5 bg-red-500 relative block" />
                    </div>
                    <p className="text-xl text-gray-800 w-full md:max-w-4/5">
                        Hear from our delighted customers as they share their genuine experiences. Explore their glowing testimonials and discover why our service stands out. Join us and experience excellence firsthand.
                    </p>
                </div>
                <div className="w-full md:max-w-155.5 md:flex-1 relative">
                    <div className="grid grid-flow-col grid-rows-2 gap-4 overflow-scroll overflow-y-hidden custom-scrollbar  pb-2 w-full">
                        {
                            testimonials.map((e, idx) => <Testimonial key={idx} {...e} />)
                        }
                    </div>
                    <Link href="/about-us/testimonials">View More</Link>
                </div>
            </div>
        </section>
    )
}

export default TestimonySection