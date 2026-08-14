import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Authentification - MDC Apply",
    description: "MDC is Better when you  have an account !"
}
function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}

export default layout