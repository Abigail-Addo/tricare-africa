'use client'

import Image from 'next/image';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface Testimonial {
    id: number;
    title: string;
    text: string;
    image: string;
}

const Testimonials = () => {


    return (
        <div className="bg-[#F6FAFF] pb-20">
            <div className="grid grid-cols-1 container mx-auto bg-[#F6FAFF] gap-8 lg-gap-0">
                {/* text container */}
                <div className="lg:w-2/4 mx-auto">
                    <h4 className="text-[#2AA7FF] pb-6 text-xl lg:text-2xl text-center">Testimonials</h4>
                    <p className="text-md lg:text-lg text-center">
                        Lorem ipsum dolor sit amet consectetur. Vitae viverra quam fermentum erat orci posuere. Sagittis sed
                        pellentesque quis viverra est. Condimentum.
                    </p>
                </div>

                {/* Testimonials cards */}
                <div className="flex overflow-x-auto scrollbar-hidden gap-8">
                    {testimonials.map((testimonial) => (
                        < div key={testimonial.id} className="flex-shrink-0 grid grid-cols-1 lg:grid-cols-3 py-10 px-3 w-full lg:w-2/4 border border-gray-300 rounded-xl" >
                            <div className="lg:mx-auto lg:my-auto">
                                <Image
                                    src={testimonial.image}
                                    alt="image"
                                    width={100}
                                    height={100}
                                    className=""
                                />
                            </div>
                            <div className="mx-auto my-auto pe-10 col-span-2">
                                <h2 className="font-bold pt-6 lg:pt-0">{testimonial.title}</h2>
                                <p className="text-md lg:text-lg">
                                    {testimonial.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Arrow controls */}
                {/* <div className="flex gap-3 ml-auto">
                    <div
                        className="bg-gray-300 rounded-full p-2 hover:bg-[#51b6ff]"
                    >
                        <KeyboardArrowLeftIcon />
                    </div>
                    <div
                        className="bg-gray-300 rounded-full p-2 hover:bg-[#51b6ff]"                    >
                        <KeyboardArrowRightIcon />
                    </div>
                </div> */}
            </div>
        </div >
    );
};

export default Testimonials;




const testimonials: Testimonial[] = [
    {
        id: 1,
        title: 'Mary Erai',
        text: 'Lorem ipsum dolor sit amet consectetur. Vitae viverra quam fermentum erat orci posuere.',
        image: '/assets/about/testimonial_2.png',
    },
    {
        id: 2,
        title: 'John Asiamah',
        text: 'Lorem ipsum dolor sit amet consectetur. Vitae viverra quam fermentum erat orci posuere.',
        image: '/assets/about/testimonial_1.png',
    },
    {
        id: 3,
        title: 'Mary Jane',
        text: 'Lorem ipsum dolor sit amet consectetur. Vitae viverra quam fermentum erat orci posuere.',
        image: '/assets/about/testimonial_2.png',
    },
    {
        id: 4,
        title: 'John Doe',
        text: 'Lorem ipsum dolor sit amet consectetur. Vitae viverra quam fermentum erat orci posuere.',
        image: '/assets/about/testimonial_1.png',
    },
    {
        id: 5,
        title: 'Adwoa Jane',
        text: 'Lorem ipsum dolor sit amet consectetur. Vitae viverra quam fermentum erat orci posuere.',
        image: '/assets/about/testimonial_2.png',
    },
];
