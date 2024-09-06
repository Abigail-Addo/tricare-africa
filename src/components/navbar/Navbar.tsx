"use client"

import Image from "next/image"
import DrawerNavbar from "./DrawerNavbar"
import Navlinks from "./Navlinks"
import Button from "../button/Button"

const Navbar = () => {
    return (
        <>
            <header className="h-20 bg-white ">
                <div className="container mx-auto px-3">
                    <div className="flex justify-between items-center h-20 py-5">
                        <Image
                            src='/assets/Tri-care-logo.png'
                            width={100}
                            height={100}
                            alt="Tricare Africa Logo"
                            className="border border-gray-950"
                        />
                        <div className="hidden lg:flex justify-center items-center space-x-12">
                            <Navlinks />
                        </div>

                        <div className="hidden lg:flex">
                            <Button
                                text="Download App"
                                className="text-sm"
                                onClick={() => alert('Clicked!')}
                            />
                        </div>

                        <div className="lg:hidden">
                            <DrawerNavbar />
                        </div>
                    </div>
                </div>

            </header >
        </>
    )
}

export default Navbar