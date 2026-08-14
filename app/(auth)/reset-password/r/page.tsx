import ResetPasswordForm from "@/components/auth/ResetPasswordForm"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Reset Password "
}
function RessetPass() {
    return (
        <div className="flex h-screen w-full">
            <div className="w-full hidden sm:inline-block">
                <img className="h-full" src="/img/reset-pass.png" alt="leftSideImage" />
            </div>

            <div className="w-full flex flex-col items-center justify-center">
                <ResetPasswordForm />
            </div>
        </div>
    )
}

export default RessetPass