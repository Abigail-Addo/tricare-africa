'use client'


import React, { ReactNode } from 'react';
import Image from "next/image";
import DrawerNavbar from "./DrawerNavbar";
import Navlinks from './Navlinks';

interface HeaderProps {
    children: ReactNode;
    showNavlinks?: boolean; // Optional prop to control the visibility of Navlinks
}

const Navbar: React.FC<HeaderProps> = ({ children, showNavlinks = true }) => {
    return (
        <>
            <header className="h-20 bg-white sticky top-0 z-40 shadow-lg">
                <div className="container mx-auto px-3">
                    <div className="flex justify-between items-center h-20 py-5">
                        <div className="flex items-center">
                            <Image
                                src='/assets/logo.png'
                                width={40}
                                height={40}
                                alt="Tricare Africa Logo"
                                className="h-auto w-auto"
                            />
                            <h1 className="text-[#2AA7FF] ps-2 text-lg font-bold">Tricare Africa</h1>
                        </div>


                        {showNavlinks && (
                            <div className="hidden lg:flex justify-center items-center space-x-12">
                                <Navlinks />
                            </div>
                        )}

                        <div className="hidden lg:flex">
                            {children}
                        </div>

                        <div className="lg:hidden">
                            <DrawerNavbar />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
