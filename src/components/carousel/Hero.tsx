'use client'

import Image from "next/image";
import Button from "../button/Button";

const Hero = () => {

    return (
        <div className="relative w-full h-3/4 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src='/assets/hero/pexels-mart-production-7089047.jpg'
                    alt='Hero Image'
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            </div>
            <div className="container z-20 px-3 md:w-3/4 lg:w-2/4  tracking-wide leading-relaxed text-white text-center">
                <h1 className="text-wrap uppercase font-bold mb-1 text-2xl md:text-3xl">Lorem ipsum dolor sit amet</h1>
                <hr className="w-1/4 md:w-24 mx-auto border-green-600" />
                <p className="mt-5 text-xl md:text-2xl ld:text-3xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ducimus ipsum deserunt. Iusto, odit. Cupiditate soluta libero veniam rem architecto</p>
                <Button
                    text="Learn more"
                    className="text-lg mt-4"
                    onClick={() => alert('Clicked!')}
                />
            </div>
        </div>
    );
};

export default Hero;
