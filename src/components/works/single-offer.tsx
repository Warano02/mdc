"use client"

import { Heart } from "lucide-react"
import Image from "next/image"
import SignupDialog from "../SignupDialog"

export interface ISingleOffer {
  id?: string
  title?: string
  company?: string
  cover?: string
  logo?: string
  contraint?: string[]
  price?: string
}

const SingleOffer = ({
  id = "offer-default",
  title = "Intitulé du poste",
  company = "Nom de l'entreprise",
  price = "$15.00/hr",
  contraint = [],
  logo = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&auto=format&fit=crop",
  cover = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop"
}: ISingleOffer) => {
  return (
    <SignupDialog>
      <div className="group block w-78.75 h-81.75 shrink-0 rounded-lg bg-white border border-gray-300 overflow-hidden hover:scale-95 hover:border-black transition-all relative cursor-pointer">
        <div
          className="relative w-full h-18 overflow-hidden items-center px-4 flex justify-between"
          style={{ backgroundImage: `url(${cover})`, backgroundPosition: "center", backgroundSize: "cover" }}
        >
          <div className="w-20 h-10 bg-white rounded relative overflow-hidden flex items-center justify-center p-1">
            <Image 
              src={logo} 
              alt={company} 
              fill 
              className="object-contain p-0.5" 
            />
          </div>

          <button
            onClick={(e) => e.preventDefault()}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="px-4 mt-2 space-y-1">
          <h3 className="text-xl font-bold line-clamp-1">{title}</h3>
          <h5 className="text-xs font-semibold text-gray-600">{company}</h5>

          <div className="flex flex-wrap gap-1 max-h-35 overflow-hidden mt-2">
            {contraint?.map((el, index) => (
              <span key={`${el}-${index}`} className="px-1.5 py-0.5 rounded bg-gray-100 text-xs text-gray-700">
                {el}
              </span>
            ))}
          </div>

          {price && (
            <div className="mt-2">
              <span className="px-1.5 py-0.5 rounded bg-gray-100 text-xs font-bold text-gray-800">
                {price}
              </span>
            </div>
          )}

          <button className="px-2 py-0.5 absolute bottom-4 left-4 border border-primary rounded-xl group-hover:bg-black group-hover:text-white transition-colors">
            Voir l'offre
          </button>
        </div>
      </div>
    </SignupDialog>
  )
}

export default SingleOffer