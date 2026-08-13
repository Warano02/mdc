"use client"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"
import { useState } from "react"
import { ITestimonial } from "@/contants"


function Testimonial({ name, flag, profil, country, video, poster, description, visa }: ITestimonial) {
    const [playing, setPlaying] = useState(false)
    return (
        <Dialog>
            <DialogTitle className="sr-only">Testimonial of {name} </DialogTitle>
            <DialogTrigger asChild>
                <div className="size-50 relative flex justify-end cursor-pointer" style={{ backgroundImage: `url(${profil})` }}>
                    <div className="play-btn" />
                    <div className="mt-auto w-full h-1/2 bg-[rgba(40,49,124,0.5)] flex flex-col items-center justify-center relative">
                        <div className="size-9 rounded-full  absolute -top-4 left-2">
                            <Image className="object-cover" fill alt="flag of country" src={flag} />
                        </div>
                        <h1 className="text-white  font-bold">{name}</h1>
                        <h6 className="text-white text-sm text-center">{country} </h6>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="w-[calc(100%-2rem)] p-0 overflow-hidden border-none">
                <div className=" bg-cover bg-center bg-no-repeat flex justify-between h-138 w-full relative" style={{
                    backgroundImage: "url('/img/bg/provinces_bg.png')",
                }}>
                    <div className="flex-1 relative">

                        {playing ? (
                            <iframe
                                className="w-full h-full"
                                src={`https://youtube.com/embed/${video}?autoplay=1`}
                                title="YouTube Short"
                                allow="autoplay; encrypted-media; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <div
                                onClick={() => setPlaying(true)}
                                className="w-full h-full flex justify-center items-center bg-cover bg-center bg-no-repeat cursor-pointer"
                                style={{
                                    backgroundImage: `url(${poster})`,
                                }}
                            >
                                <Image
                                    src="/img/icon/play_icon.png"
                                    alt="play icon"
                                    width={60}
                                    height={60}
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center">
                        <div className="space-y-2 flex flex-col justify-center items-center">
                            <h1 className="text-2xl text-center">
                                Perry Maddison
                            </h1>
                            <h2 className="text-base text-black text-center">{visa} </h2>
                            <h3 className="text-sm text-black text-center">{country} </h3>
                            <span className="w-1/2 h-0.5 block bg-primary" />
                        </div>
                        <p className="text-sm front-semibold p-4 text-center">
                            {description}
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Testimonial