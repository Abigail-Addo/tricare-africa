import Navbar from "@/components/navbar/Navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Health Providers'
}

const HealthProviders = () => {
    return (
        <>
            <Navbar />
            <div>Health Providers Page</div>
        </>
    )
}

export default HealthProviders