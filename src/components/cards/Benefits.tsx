import Image from "next/image"

const Benefits = () => {
    return (
        <>
            <div className="container mx-auto p-4 border border-red-600">
                <div className="grid grid-cols-3 gap-4 py-5">
                    <div className="border border-green-600 p-4 flex flex-col m-0 p-0">
                        <div className="relative h-full lg:h-full">
                            <Image
                                src='/assets/generate an image of (3).jpg'
                                alt='Benefits'
                                // layout="fill"
                                // objectFit="cover"
                                width={100}
                                height={100}
                            // className="absolute inset-0"
                            />
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, odit! Doloribus provident vero necessitatibus temporibus?</p>
                        </div>
                    </div>
                    <div className="border border-green-600 p-4">Card 2</div>
                    <div className="border border-green-600 p-4">Card 3</div>
                </div>
            </div>

        </>
    )
}

export default Benefits
