
import Navbar from "@/components/navbar/Navbar"
import { Metadata } from "next"
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Testimonials from "@/components/testimonials/Testimonials";
import Button from "@/components/button/Button";
import React from "react";
import FramerImage from "@/components/framer-image/FramerImage";


export const metadata: Metadata = {
    title: 'About'
}



const About = () => {

    return (
        <>
            <Navbar showNavlinks={true}>
                <Button
                    text="Download App"
                    className="text-sm"
                />
            </Navbar>

            {/* Hero */}
            <div className="relative w-full h-4/5 flex items-center justify-center overflow-hidden">
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
                    <h1 className="text-wrap uppercase font-bold mb-1 text-2xl md:text-3xl">Who We Are & What Drives Us</h1>
                </div>
            </div>
            <main className="relative z-10">
                {/* Vision */}
                <div className="bg-[#F6FAFF] pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto bg-[#F6FAFF] pb-8 lg-pb-0 gap-8 lg-gap-0">
                        {/* image container */}

                        <div className="lg:w-3/4 lg:mr-auto">
                            <FramerImage
                                src="/assets/about/image_22.png"
                                alt="image"
                                width={1000}
                                height={100}
                            />
                        </div>

                        {/* text container */}
                        <div className="flex flex-col justify-center">
                            <h4 className="text-[#2AA7FF] pb-6 text-xl lg:text-2xl text-center lg:text-start">Our Vision</h4>
                            <p className="text-md lg:text-lg text-center lg:text-start">
                                Lorem ipsum dolor sit amet consectetur. Vitae v
                                iverra quam fermentum erat orci posuere. Sagittis sed
                                pellentesque quis viverra est. Condimentum.</p>
                        </div>
                    </div>
                </div>

                {/* Mission */}
                <div className="bg-[#F6FAFF] pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto bg-[#F6FAFF] gap-8 lg-gap-0">
                        {/* text container */}
                        <div className="flex flex-col justify-center order-1 lg:order-first">
                            <h4 className="text-[#2AA7FF] pb-6 text-xl lg:text-2xl text-center lg:text-start">Our Mission</h4>
                            <p className="text-md lg:text-lg text-center lg:text-start">
                                Lorem ipsum dolor sit amet consectetur. Vitae v
                                iverra quam fermentum erat orci posuere. Sagittis sed
                                pellentesque quis viverra est. Condimentum.</p>
                        </div>
                        {/* image container */}
                        <div className="lg:w-3/4 lg:ml-auto">
                            <FramerImage
                                src='/assets/about/image_23.png'
                                alt="image"
                                width={1000}
                                height={100}
                            />
                        </div>
                    </div>
                </div>

                {/* Achievement */}
                <div className="bg-[#F6FAFF] pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto bg-[#F6FAFF] gap-8 lg-gap-0">
                        {/* text container */}
                        <div className="flex flex-col justify-center md:pb-10">
                            <h4 className="text-[#2AA7FF] pb-6 text-xl lg:text-2xl text-center lg:text-start">What We Aim To Achieve</h4>
                            <p className="text-md lg:text-lg text-center lg:text-start">
                                Lorem ipsum dolor sit amet consectetur. Vitae v
                                iverra quam fermentum erat orci posuere. Sagittis sed
                                pellentesque quis viverra est. Condimentum.</p>
                        </div>
                        {/* image container */}
                        <div className="md:pb-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                                <div className="shadow-lg py-10 md:-translate-y-8">
                                    <div className="">
                                        <Image
                                            src="/assets/icons/icon_1.png"
                                            objectFit="cover"
                                            alt="Hero image"
                                            className="mx-auto"
                                            width={80}
                                            height={50}
                                        />
                                    </div>
                                    <p className="text-center pt-4">Healthier Future</p>
                                </div>
                                <div className="shadow-lg py-10 md:translate-y-8">
                                    <div className="">
                                        <Image
                                            src="/assets/icons/icon_2.png"
                                            objectFit="cover"
                                            alt="Hero image"
                                            className="mx-auto"
                                            width={80}
                                            height={50}
                                        />
                                    </div>
                                    <p className="text-center pt-4">Reduce Infant
                                        Mortality</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="shadow-lg py-10 md:-translate-y-8">
                                    <div className="">
                                        <Image
                                            src="/assets/icons/icon_3.png"
                                            objectFit="cover"
                                            alt="Hero image"
                                            className="mx-auto"
                                            width={80}
                                            height={50}
                                        />
                                    </div>
                                    <p className="text-center pt-4">Financial Literacy</p>
                                </div>
                                <div className="shadow-lg py-10 md:translate-y-8">
                                    <div className="">
                                        <Image
                                            src="/assets/icons/icon_4.png"
                                            objectFit="cover"
                                            alt="Hero image"
                                            className="mx-auto"
                                            width={80}
                                            height={50}
                                        />
                                    </div>
                                    <p className="text-center pt-4">Pregnancy Wellness
                                        Education</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <Testimonials />
            </main >

            <Footer />
        </>
    )
}

export default About