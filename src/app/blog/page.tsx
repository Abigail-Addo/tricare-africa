import Navbar from "@/components/navbar/Navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Blog'
}

const Blog = () => {
    return (
        <>
            <Navbar />
            <h1>Blog Page</h1>
        </>
    )
}

export default Blog