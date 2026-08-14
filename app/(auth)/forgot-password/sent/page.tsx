import { CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "Recovery code sent successfully !"
}

function RecoverySent() {
    return (
        <section className="w-screen h-screen flex items-center justify-center">
            <div className="space-y-4 flex flex-col items-center">
                <CheckCircle className="text-primary" size={50} />
                <h1 className="text-xl md:text-2xl text-primary">Check Your Mail !</h1>
                <p>If this email have an account, you will receive recovery link !</p>
                <Link href={'/'} className="py-2 px-6 bg-primary text-white rounded ">Back To Home Page !</Link>
            </div>
        </section>
    )
}

export default RecoverySent