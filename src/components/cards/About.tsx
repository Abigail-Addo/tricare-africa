import Image from "next/image";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const About = () => {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="grid lg:grid-cols-2 gap-x-10 py-5">
                    <div className="relative h-96 lg:h-full">
                        <Image
                            src='/assets/generate an image of.jpg'
                            alt='Hero Image'
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>
                    <div className=" flex flex-col items-center justify-center py-4">
                        <h2 className="capitalize text-green-500 h-12 flex items-center">Lorem ipsum dolor sit amet.</h2>
                        <p className="text-center h-28 flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis id error iusto harum numquam at dignissimos ullam, incidunt nostrum cupiditate inventore? Natus vitae dicta nemo! Et velit ducimus at</p>
                        <div className="grid md:grid-cols-2 gap-x-6">
                            <div className="flex h-20 items-center">
                                <QuestionAnswerIcon className="fill-green-600 size-10 me-4" />
                                <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="flex h-20 items-center">
                                <RequestQuoteIcon className="fill-green-600 size-10 me-4" />
                                <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="flex h-20 items-center">
                                <HealthAndSafetyIcon className="fill-green-600 size-10 me-4" />
                                <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
