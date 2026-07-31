import Testimonial from "../Testimonial"

function TestimonySection() {
    return (
        <section className="border-y-2 border-y-primary relative">
            <div className="max-w-7xl px-6 h-132.5 flex justify-between py-6">
                <div className="flex-1 shrink-0 px-4 space-y-12">
                    <div className="relative space-y-6">
                        <h1 className="text-4xl max-w-2/3 ">
                            Real Stories of Exceptional Service
                        </h1>
                        <span className="w-15 h-0.5 bg-red-500 relative block" />
                    </div>
                    <p className="text-xl text-gray-800 max-w-4/5">
                        Hear from our delighted customers as they share their genuine experiences. Explore their glowing testimonials and discover why our service stands out. Join us and experience excellence firsthand.
                    </p>
                </div>
                <div className="w-158.5 relative">
                    <div className="grid grid-flow-col grid-rows-2 gap-4 overflow-scroll overflow-y-hidden testimony-scrollbar  pb-2 w-full">
                        {
                            Array.from({ length: 21 }).map((e, idx) => <Testimonial key={idx} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonySection