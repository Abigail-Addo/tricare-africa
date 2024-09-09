import Image from "next/image"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#1B3C74] text-white z-40 relative lg:h-2/6 py-8">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">
                    <div className="">
                        <div className="flex items-center pb-4">
                            <Image
                                src='/assets/logo.png'
                                width={40}
                                height={40}
                                alt="Tricare Africa Logo"
                            />
                            <h1 className="text-[#2AA7FF] ps-2 text-lg font-bold">Tricare Africa</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae v
                            iverra quam fermentum erat orci posuere. Sagittis sed
                            pellentesque quis viverra est. Condimentum.</p>
                    </div>
                    <div className="">
                        <h1>Quick links</h1>
                        <div className="flex flex-col justify-center h-full">
                            <div className="flex pb-4">
                                <KeyboardArrowRightIcon />
                                <Link href='/'>Privacy Policy</Link>
                            </div>
                            <div className="flex">
                                <KeyboardArrowRightIcon />
                                <Link href='/'>Terms & Conditions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h1>Follow us</h1>
                        <div className="flex gap-8 items-center h-full">
                            <Link href='/'>
                                <Image
                                    src="/assets/icons/facebook.png"
                                    objectFit="cover"
                                    alt="Hero image"
                                    className="scale-125"
                                    width={30}
                                    height={30}
                                />
                            </Link>
                            <Link href='/'>
                                <Image
                                    src="/assets/icons/instagram.png"
                                    objectFit="cover"
                                    alt="Hero image"
                                    className="scale-125"
                                    width={30}
                                    height={30}
                                />
                            </Link>
                            <Link href='/'>
                                <Image
                                    src="/assets/icons/linkedin.png"
                                    objectFit="cover"
                                    alt="Hero image"
                                    className="scale-125"
                                    width={30}
                                    height={30}
                                />
                            </Link>
                            <Link href='/'>
                                <Image
                                    src="/assets/icons/twitter.png"
                                    objectFit="cover"
                                    alt="Hero image"
                                    className="scale-125"
                                    width={30}
                                    height={30}
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-center">© All rights reserved to Tricare Africa 2024</p>
            </footer>
        </>
    )
}

export default Footer
