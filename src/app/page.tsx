'use client'

import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Button from "@/components/button/Button";
import VerifiedIcon from '@mui/icons-material/Verified';
import AccordionSection from "@/components/accordion/Accordion";
import Footer from "@/components/footer/Footer";
import { motion } from "framer-motion"
import FramerImage from "@/components/framer-image/FramerImage";
import React from "react";

const LandingPage = () => {
  const scrollRef = React.useRef(null)
  return (
    <>
      <Navbar showNavlinks={true}>
        <Button
          text="Download App"
          className="text-sm"
        />
      </Navbar>

      {/* Hero section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-[#F6FAFE] to-[#E1EEFF]">
        {/* text container */}
        <div className="absolute w-full lg:relative z-20 text-white p-4 lg:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 lg:text-start text-black">
            Empowering Your Journey To Wellness
          </h1>
          <p className="text-lg text-black lg:text-start">
            Lorem ipsum dolor sit amet consectetur. Vitae viverra quam fermentum erat
            orci posuere. Sagittis sed pellentesque quis viverra est. Condimentum.
          </p>
          <Button
            text="Learn more"
            className="text-lg mt-4"
          />
        </div>
        {/* image container */}
        <div className="relative w-full lg:w-1/2 h-[500px] md:h-[800px] lg:h-[650px]">
          <Image
            src="/assets/hero/hero.png"
            alt="Hero image"
            className="absolute inset-0 w-full h-full object-cover z-0"
            width={1000}
            height={1000}
          />
          {/* Overlay (only on small and medium screens) */}
          <div className="absolute inset-0 bg-[#E1EEFF] opacity-50 z-10 lg:hidden"></div>
        </div>
      </div>
      <main className="relative z-10">

        {/* Short story section */}
        <div className="bg-[#F6FAFF]" ref={scrollRef}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef }}
            transition={{
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              duration: 2,
              type: "tween"
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto py-20 gap-8  bg-[#F6FAFF]">
              {/* image container */}
              <div className="lg:w-3/4 lg:mx-auto">
                <Image
                  src='/assets/home/video.png'
                  alt="video"
                  width={1000}
                  height={100}
                />
              </div>
              {/* text container */}
              <div className="flex flex-col justify-center">
                <h4 className="text-[#2AA7FF] pb-6 text-xl lg:text-2xl text-center lg:text-start">Short Story About Tricare Africa</h4>
                <p className="text-md lg:text-lg text-center lg:text-start">
                  Lorem ipsum dolor sit amet consectetur. Vitae v
                  iverra quam fermentum erat orci posuere. Sagittis sed
                  pellentesque quis viverra est. Condimentum.</p>
                <p className="text-md lg:text-lg text-center lg:text-start">
                  Lorem ipsum dolor sit amet consectetur. Vitae v
                  iverra quam fermentum erat orci posuere. Sagittis sed
                  pellentesque quis viverra est. Condimentum.</p>
                <p className="text-md lg:text-lg text-center lg:text-start">
                  Lorem ipsum dolor sit amet consectetur. Vitae v
                  iverra quam fermentum erat orci posuere. Sagittis sed
                  pellentesque quis viverra est. Condimentum.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits section */}
        <div className="bg-gradient-to-r from-[#E7F0FF] to-[#E8F1FF] lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-8">
            {/* Image container */}
            <div className="grid grid-cols-2 gap-8 lg:gap-0 lg:grid-cols-1 relative lg:w-3/4 lg:mx-auto">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <div className="w-full h-full ml-auto lg:translate-y-8 lg:-translate-x-16 2xl:-translate-x-3/4 ">
                  <FramerImage
                    src='/assets/home/image_19.png'
                    alt="image"
                    width={1000}
                    height={100}
                    className=" w-full h-full shadow-2xl"
                  />
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <div className="w-full h-full mr-auto z-10 lg:-translate-y-8 lg:translate-x-16 2xl:translate-x-16">
                  <FramerImage
                    src='/assets/home/image_20.png'
                    alt="image"
                    width={1000}
                    height={100}
                    className=" w-full h-full shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>

            {/* Text container */}
            <div className="flex flex-col justify-center mx-auto gap-4">
              <h4 className="text-[#2AA7FF] text-xl lg:text-2xl text-center lg:text-start  ">
                Helping pregnant women from Africa and beyond
              </h4>
              <p>Lorem ipsum dolor sit amet consectetur. Vitae viverra quam fermentum erat orci posuere. Sagittis sed pellentesque quis viverra est. Condimentum.</p>
              <div className="flex  ">
                <VerifiedIcon className="fill-[#2AA7FF]" />
                <p className="text-md lg:text-lg text-center lg:text-start">Digital Marternal Care</p>
              </div>
              <div className="flex  ">
                <VerifiedIcon className="fill-[#2AA7FF]" />
                <p className="text-md lg:text-lg text-center lg:text-start">Digital Finance</p>
              </div>
              <div className="flex  ">
                <VerifiedIcon className="fill-[#2AA7FF]" />
                <p className="text-md lg:text-lg text-center lg:text-start">Wellness and Nutrition Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="bg-[#F6FAFF]" >
          <div className="grid grid-cols-1 container mx-auto py-20  bg-[#F6FAFF]">
            <h4 className="text-[#2AA7FF] pb-6 text-xl lg:text-2xl text-center">Our Team</h4>
            <div className="flex overflow-x-auto scrollbar-hidden gap-8 pt-8">
              <div className="flex-shrink-0 w-2/4 lg:w-1/4 p-0">
                <Image
                  src='/assets/home/team_1.png'
                  alt="team"
                  width={1000}
                  height={1000}
                />
                <p className="text-center">
                  Mabel Klu
                </p>
                <p className="text-[#2AA7FF] text-center">CEO</p>
              </div>

              <div className="flex-shrink-0 w-2/4 lg:w-1/4 p-0">
                <Image
                  src='/assets/home/team_2.png'
                  alt="team"
                  width={1000}
                  height={1000}
                />
                <p className="text-center">
                  Mabel Klu
                </p>
                <p className="text-[#2AA7FF] text-center">CEO</p>
              </div>

              <div className="flex-shrink-0 w-2/4 lg:w-1/4 p-0">
                <Image
                  src='/assets/home/team_1.png'
                  alt="team"
                  width={1000}
                  height={1000}
                />
                <p className="text-center">
                  Mabel Klu
                </p>
                <p className="text-[#2AA7FF] text-center">CEO</p>
              </div>

              <div className="flex-shrink-0 w-2/4 lg:w-1/4 p-0">
                <Image
                  src='/assets/home/team_2.png'
                  alt="team"
                  width={1000}
                  height={1000}
                />
                <p className="text-center">
                  Mabel Klu
                </p>
                <p className="text-[#2AA7FF] text-center">CEO</p>
              </div>

              <div className="flex-shrink-0 w-2/4 lg:w-1/4 p-0">
                <Image
                  src='/assets/home/team_1.png'
                  alt="team"
                  width={1000}
                  height={1000}
                />
                <p className="text-center">
                  Mabel Klu
                </p>
                <p className="text-[#2AA7FF] text-center">CEO</p>
              </div>

              <div className="flex-shrink-0 w-2/4 lg:w-1/4 p-0">
                <Image
                  src='/assets/home/team_2.png'
                  alt="team"
                  width={1000}
                  height={1000}
                />
                <p className="text-center">
                  Mabel Klu
                </p>
                <p className="text-[#2AA7FF] text-center">CEO</p>
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

        {/* blog */}
        <div className="bg-[#F6FAFF]">
          <div className=" container mx-auto pt-20  bg-[#F6FAFF]">
            <h4 className="text-[#2AA7FF] pb-6 text-xl lg:text-2xl text-center">Read Our Latest Blog</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
              <div className="w-3/4 overflow-hidden cursor-pointer shadow-lg mx-auto">
                <Image
                  src="/assets/home/blog.png"
                  alt="Hero image"
                  className=" mx-left"
                  width={1000}
                  height={1000}
                />
                <div className="grid grid-col-1 gap-2 p-4 bg-white">
                  <h1 className="font-bold">Lorem ipsum dolor sit.</h1>
                  <p className="text-gray-400 text-sm">March 20, 2024</p>
                  <p className="text-wrap">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ad maxime, eaque earum minima pariatur optio suscipit qui, esse nihil ullam iure aliquid id libero ex deserunt necessitatibus voluptatem eius sequi! Corrupti porro, mollitia illum laudantium doloribus error doloremque exercitationem quam. Modi repellat nam nemo ratione! Libero cumque voluptatibus harum ipsum quos asperiores ab, quo tenetur iure, magni amet voluptate iusto aut deserunt ullam velit pariatur! Dignissimos maiores deleniti cum!
                  </p>
                </div>
              </div>
              <div className="w-3/4 overflow-hidden cursor-pointer shadow-lg mx-auto">
                <Image
                  src="/assets/home/blog.png"
                  alt="Hero image"
                  className=" mx-left"
                  width={1000}
                  height={1000}
                />
                <div className="grid grid-col-1 gap-2 p-4 bg-white">
                  <h1 className="font-bold">Lorem ipsum dolor sit.</h1>
                  <p className="text-gray-400 text-sm">March 20, 2024</p>
                  <p className="text-wrap">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ad maxime, eaque earum minima pariatur optio suscipit qui, esse nihil ullam iure aliquid id libero ex deserunt necessitatibus voluptatem eius sequi! Corrupti porro, mollitia illum laudantium doloribus error doloremque exercitationem quam. Modi repellat nam nemo ratione! Libero cumque voluptatibus harum ipsum quos asperiores ab, quo tenetur iure, magni amet voluptate iusto aut deserunt ullam velit pariatur! Dignissimos maiores deleniti cum!
                  </p>
                </div>
              </div>
              <div className="w-3/4 overflow-hidden cursor-pointer shadow-lg mx-auto">
                <Image
                  src="/assets/home/blog.png"
                  alt="Hero image"
                  className=" mx-left"
                  width={1000}
                  height={1000}
                />
                <div className="grid grid-col-1 gap-2 p-4 bg-white">
                  <h1 className="font-bold">Lorem ipsum dolor sit.</h1>
                  <p className="text-gray-400 text-sm">March 20, 2024</p>
                  <p className="text-wrap">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ad maxime, eaque earum minima pariatur optio suscipit qui, esse nihil ullam iure aliquid id libero ex deserunt necessitatibus voluptatem eius sequi! Corrupti porro, mollitia illum laudantium doloribus error doloremque exercitationem quam. Modi repellat nam nemo ratione! Libero cumque voluptatibus harum ipsum quos asperiores ab, quo tenetur iure, magni amet voluptate iusto aut deserunt ullam velit pariatur! Dignissimos maiores deleniti cum!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* download */}
        <div className="bg-[#F6FAFF]">
          <div className=" container mx-auto  z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className=" text-center flex flex-col justify-center items-center translate-y-20 md:translate-y-44 2xl:translate-y-44 lg:translate-y-32">
                <h1 className="pb-8 text-lg md:text-2xl">Download the <span className="text-[#2AA7FF]">Tricare </span> App</h1>
                <div className="flex gap-8">
                  <Button
                    text="Google PlayStore"
                    className="text-sm "
                    image="/assets/icons/google.png"
                  />
                  <Button
                    text="Apple Store"
                    className="text-sm "
                    image="/assets/icons/apple.png"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center translate-y-16 md:translate-y-40 2xl:translate-y-40 lg:translate-y-28">
                <Image
                  src="/assets/home/mobile.png"
                  alt="Hero image"
                  className="scale-125"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
