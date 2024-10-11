


import Navbar from "@/components/navbar/Navbar"
import { Metadata } from "next"
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Button from "@/components/button/Button";
import React from "react";


export const metadata: Metadata = {
    title: 'Contact'
}

const Contact = () => {

    return (
        <>
            <Navbar showNavlinks={true}>
                <Button
                    text="Download App"
                    className="text-sm"
                />
            </Navbar>

            {/* Hero */}
            <div className="relative w-full h-3/4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src='/assets/hero/hero_2.png'
                        alt='Hero Image'
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        width={1000}
                        height={1000}
                    />
                    <div className="absolute inset-0 bg-[#E1EEFF] opacity-50 z-10"></div>
                </div>
                <div className="container z-20 px-3 md:w-3/4 lg:w-2/4 text-dark text-center">
                    <h1 className="text-wrap uppercase font-bold mb-1 text-2xl md:text-3xl">Get In Touch With Us</h1>
                </div>
            </div>
            <main className="relative z-10">
                {/* form */}
                <div className="bg-[#F6FAFF] py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto bg-[#F6FAFF] pb-8 lg-pb-0 gap-8 lg-gap-0">
                        <div className=" flex flex-col items-center justify-center">
                            <h4 className="text-[#2AA7FF] pb-6 text-xl lg:text-2xl text-center lg:text-start">We'd love to hear from you</h4>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur. Vitae v
                                iverra quam fermentum erat orci posuere.
                                Sagittis sed pellentesque quis viverra est.
                                Condimentum. Lorem ipsum dolor sit amet consectetur. Vitae v
                                iverra quam fermentum erat orci posuere.
                                Sagittis sed pellentesque quis viverra est.
                                Condimentum.</p>
                        </div>
                        <div className="">
                            {/* Form */}
                            <Form />
                        </div>
                    </div>
                </div>
            </main >

            <Footer />
        </>
    )
}

export default Contact