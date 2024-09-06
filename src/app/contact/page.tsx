import Navbar from "@/components/navbar/Navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact'
}

const Contact = () => {
    return (
        <>
            <Navbar />
            <h1>Contact Page</h1>
        </>
    )
}

export default Contact