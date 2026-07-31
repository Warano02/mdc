import Image from "next/image"

function Testimonial() {
    return (
        <div className="size-50 relative flex justify-end" style={{ backgroundImage: `url(/img/pp/Perry.png)` }}>
            <div className="play-btn" />
            <div className="mt-auto w-full h-1/2 bg-[rgba(40,49,124,0.5)] flex flex-col items-center justify-center relative">
                <div className="size-9 rounded-full  absolute -top-4 left-2">
                    <Image className="object-cover" fill alt="flag of country" src={"/img/flag/Australia.png"} />
                </div>
                <h1 className="text-white  font-bold">Perry Maddison</h1>
                <h6 className="text-white text-sm text-center">Australia</h6>
            </div>
        </div>
    )
}

export default Testimonial