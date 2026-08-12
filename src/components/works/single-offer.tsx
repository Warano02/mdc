"use client"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SignupDialog from "../SignupDialog"
interface ISingleOffer {
    id?: string
    cover?: string,
    logo?: string,
    contraint?: string[],
    price?: string
}
const SingleOffer = ({ id = "dkdj", price = "40 000 - 50 000 €/an", contraint, logo = "https://f.hellowork.com/img/entreprises/160235.png", cover = "https://f.hellowork.com/media/160235/350_233/160235_63882922996942601627096972.jpg" }: ISingleOffer) => {

    return (
        <SignupDialog>
            <div className="group block w-78.75 h-81.75 shrink-0 rounded-lg bg-white border border-gray-300 overflow-hidden hover:scale-95 hover:border-black transition-all relative cursor-pointer">
                <div className="relative w-full h-18 overflow-hidden items-center px-4 flex justify-between" style={{ backgroundImage: `url(${cover})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                    <div className="w-20 h-10 bg-white rounded relative" >
                        <Image src={logo} alt="" fill className="w-15 h-15" />
                    </div>

                    <button onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full flex-center bg-white cursor-pointer ">
                        <Heart color="" />
                    </button>
                </div>

                <div className="px-4 mt-2  space-y-1">
                    <h3 className="text-2xl  font-bold ">Chef de Chantier HF</h3>
                    <h5 className="text-xs font-semibold">SOFRATEL</h5>

                    <div className="flex flex-wrap gap-1 max-h-35 overflow-hidden mt-2">
                        {
                            contraint?.length && contraint.map(el => <span key={el} className="px-1.5 py-0.5 rounded bg-gray-100 text-xs">{el} </span>)
                        }
                    </div>

                    {price && <span className="px-1.5 py-0.5 rounded bg-gray-100 text-xs font-bold">{price} </span>}

                    <button className="px-2 py-0.5 absolute bottom-4 left-4 border border-primary rounded-xl group-hover:bg-black group-hover:text-white ">Voir l'offre</button>
                </div>
            </div>
        </SignupDialog>
    )
}

export default SingleOffer