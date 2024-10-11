"use client"



import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    // onLoad: () => void;
    className?: string;
}

const FramerImage: React.FC<ImageProps> = ({ src, alt, width, height, className }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isInView, setIsInView] = React.useState(false);

    return (
        <>
            <motion.div
                initial={false}
                animate={
                    isLoaded && isInView
                        ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    onLoad={() => {
                        setIsLoaded(true);
                    }}
                    className={className}
                />
            </motion.div>
        </>
    );
};

export default FramerImage;
