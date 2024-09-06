import Navbar from "@/components/navbar/Navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About'
}

const About = () => {
    return (
        <>
            <Navbar />
            <div>About Page</div>
        </>
    )
}

export default About