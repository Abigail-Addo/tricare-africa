import Button from "@/components/button/Button"
import Navbar from "@/components/navbar/Navbar"
import { Metadata } from "next"
import Link from "next/link"
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Image from "next/image";
import AccordionSection from "@/components/accordion/Accordion";
import Footer from "@/components/footer/Footer";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

export const metadata: Metadata = {
    title: 'Clients'
}

const Users = () => {

    return (
        <>
            <Navbar showNavlinks={false}>
                <Button
                    text="Register"
                    className="text-sm"
                />
            </Navbar>

            <main>
                <div className="bg-[#2AA7FF] h-3/4 w-full text-white py-20">
                    <div className="container mx-auto">
                        <h1 className="text-bold text-lg lg:text-2xl">Clients</h1>
                        <Breadcrumbs aria-label="breadcrumb" className="text-white">
                            <Link
                                href="/"
                                className=""
                            >
                                Home
                            </Link>
                            <Link
                                href="/clients"
                                className="underline text-gray-200 pointer-events-none"
                            >
                                Client
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>

                {/* App features */}
                <div className="bg-[#F6FAFF] lg:py-20 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto bg-[#F6FAFF] ">
                        {/* image container */}
                        <div className=" :lgh-5/6 lg:w-3/4 mx-auto lg:my-auto">
                            <Image
                                src='/assets/clients/image_1.png'
                                alt="image"
                                width={1000}
                                height={1000}
                                className="h-full w-full object-contain"
                            />
                        </div>
                        {/* text container */}
                        <div className="flex flex-col justify-center ">
                            <h4 className="text-[#2AA7FF] pb-6 text-xl lg:text-2xl text-center lg:text-start">App Highlights & Features</h4>
                            <p className="text-md lg:text-lg text-center lg:text-start">
                                Lorem ipsum dolor sit amet consectetur. Vitae v
                                iverra quam fermentum erat orci posuere. Sagittis sed
                                pellentesque quis viverra est. Condimentum.
                            </p>
                            <div className="">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 ">
                                    <div className="py-8 flex flex-col items-center lg:items-start justify-center">
                                        <div>
                                            <Image
                                                src="/assets/clients/schedule.png"
                                                objectFit="cover"
                                                alt="Hero image"
                                                className="mx-auto lg:mr-auto my-auto bg-[#2AA7FF] p-2 rounded-lg"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <p className="pt-4 font-bold text-center lg:text-start">Appointment Booking</p>
                                        <p className="pt-3 text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>
                                    </div>
                                    <div className="py-8 flex flex-col items-center lg:items-start justify-center">
                                        <div>
                                            <Image
                                                src="/assets/clients/supplement.png"
                                                objectFit="cover"
                                                alt="Hero image"
                                                className="mx-auto lg:mr-auto my-auto bg-[#2AA7FF] p-2 rounded-lg"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <p className="pt-4 font-bold text-center lg:text-start">Health Tips</p>
                                        <p className="pt-3 text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-8 lg:w-2/4 mx-auto">
                                    <div className="py-8 flex flex-col items-center lg:items-start justify-center">
                                        <div>
                                            <Image
                                                src="/assets/clients/flask.png"
                                                objectFit="cover"
                                                alt="Hero image"
                                                className="mx-auto lg:mr-auto my-auto bg-[#2AA7FF] p-2 rounded-lg"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <p className="pt-4 font-bold text-center lg:text-start">Finance Tip</p>
                                        <p className="pt-3 text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <div className="bg-[#F6FAFF] pb-20">
                    <div className="grid grid-cols-1 container mx-auto bg-[#F6FAFF] ">
                        <h1 className="text-[#2AA7FF] pb-20  text-xl lg:text-2xl text-center">Find the Ideal Plan for You</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0">
                            <div className="border border-gray-300 py-16 rounded-xl lg:rounded-t-xl bg-white">
                                <p className="border border-green-300 text-center py-2 w-1/4 mx-auto rounded-lg">Basic</p>
                                <div className="flex flex-col items-center py-6">
                                    <p className="font-bold text-lg md:text-3xl">₵7.00</p>
                                    <span>/month</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="flex gap-3">
                                        <CheckCircleOutlineIcon className="fill-green-500" />
                                        <p>Lorem ipsium dolem</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircleOutlineIcon className="fill-green-500" />
                                        <p>Lorem ipsium dolem</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CloseIcon className="fill-gray-300" />
                                        <p className="line-through text-gray-300">Lorem ipsium dolem</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CloseIcon className="fill-gray-300" />
                                        <p className="line-through text-gray-300">Lorem ipsium dolem</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CloseIcon className="fill-gray-300" />
                                        <p className="line-through text-gray-300">Lorem ipsium dolem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-300 py-16 rounded-xl lg:scale-110 bg-white">
                                <p className="border border-green-300 text-center py-2 w-1/4 mx-auto rounded-lg">Standard</p>
                                <div className="flex flex-col items-center py-6">
                                    <p className="font-bold text-lg md:text-3xl">₵7.00</p>
                                    <span>/month</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="flex gap-3">
                                        <CheckCircleOutlineIcon className="fill-green-500" />
                                        <p>Lorem ipsium dolem</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircleOutlineIcon className="fill-green-500" />
                                        <p>Lorem ipsium dolem</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircleOutlineIcon className="fill-green-500" />
                                        <p>Lorem ipsium dolem</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CloseIcon className="fill-gray-300" />
                                        <p className="line-through text-gray-300">Lorem ipsium dolem</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CloseIcon className="fill-gray-300" />
                                        <p className="line-through text-gray-300">Lorem ipsium dolem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-300 py-16 rounded-xl lg:rounded-t-xl bg-white md:mx-auto md:w-2/4 md:col-span-2 lg:col-span-1 lg:mx-0 lg:w-full ">
                                <p className="border border-green-300 text-center py-2 w-1/4 mx-auto rounded-lg">Premium</p>
                                <div className="flex flex-col items-center py-6">
                                    <p className="font-bold text-lg md:text-3xl">₵7.00</p>
                                    <span>/month</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="flex gap-3">
                                        <CheckCircleOutlineIcon className="fill-green-500" />
                                        <p>Lorem ipsium dolem</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircleOutlineIcon className="fill-green-500" />
                                        <p>Lorem ipsium dolem</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircleOutlineIcon className="fill-green-500" />
                                        <p>Lorem ipsium dolem</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircleOutlineIcon className="fill-green-500" />
                                        <p>Lorem ipsium dolem</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircleOutlineIcon className="fill-green-500" />
                                        <p>Lorem ipsium dolem</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* faq */}
                <div className="relative flex flex-col items-center justify-center">
                    {/* image container */}
                    <div className="relative w-full h-[650px] md:h-[600px]">
                        <Image
                            src="/assets/faq_image.png"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                            width={1000}
                            height={1000}
                            alt="faq image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00DBE7] to-[#00ECBA] opacity-50 z-10"></div>
                    </div>
                    {/* text container */}
                    <div className=" absolute inset-0 z-20 lg:flex flex-col justify-center my-auto">
                        <h4 className="text-white py-6 text-xl lg:text-2xl text-center">Frequently Asked Questions</h4>
                        <div className="flex lg:flex-row justify-center container mx-auto  h-2/3">
                            <div className="w-full h-full hidden lg:flex ">
                                <Image
                                    src="/assets/faq_image_1.png"
                                    alt="Hero image"
                                    className="h-full w-3/4 mx-left"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className=" lg:my-auto">
                                <AccordionSection />
                            </div>
                        </div>
                    </div>
                </div>

                {/* get started */}
                <div className="bg-[#F6FAFF] py-20">
                    <div className="flex flex-col items-center justify-center lg:w-2/4 container mx-auto gap-8">
                        <h1 className="text-[#2AA7FF]">Get started with Tricare</h1>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi tristique libero urna sem vitae. Viverra facilisis rhoncus et, nibh nullam vitae laoreet. </p>
                        <div className=" mx-auto">
                            <Button
                                text="Get Started"
                                className="text-sm text-center"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Users