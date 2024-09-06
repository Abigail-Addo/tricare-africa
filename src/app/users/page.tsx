import Navbar from "@/components/navbar/Navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Clients'
}

const Users = () => {
    return (
        <>
            <Navbar />
            <div>Clients Page</div>
        </>
    )
}

export default Users