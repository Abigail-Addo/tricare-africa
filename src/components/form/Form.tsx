'use client'

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "@/components/button/Button";
import TextField from "@mui/material/TextField";

interface IFormInput {
    name: string;
    email: string;
    number: string;
    message: string;
}

const Form = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (

        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full h-full"
            >
                <div className="grid grid-cols-1 gap-8 py-5 px-5 lg:px-16 md:py-16">
                    {/* name */}
                    <div
                        className=""
                    >
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange } }) =>
                                <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                    onChange={onChange}
                                    className="w-full"
                                    autoComplete="off"
                                    type="text"
                                />
                            }
                        />
                        {errors.name?.type === "required" && (
                            <p role="alert" className="text-red-500 text-sm">Name is required</p>
                        )}
                    </div>

                    {/* email */}
                    <div
                        className=""
                    >
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange } }) =>
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    onChange={onChange}
                                    className="w-full"
                                    autoComplete="off"
                                    type="text"
                                />
                            }
                        />
                        {errors.email?.type === "required" && (
                            <p role="alert" className="text-red-500 text-sm">Email is required</p>
                        )}
                    </div>

                    {/* number  */}
                    <div className="">
                        <Controller
                            name="number"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange } }) =>
                                <TextField
                                    id="outlined-basic"
                                    label="Number"
                                    variant="outlined"
                                    onChange={onChange}
                                    className="w-full"
                                    autoComplete="off"
                                    type="text"
                                />
                            }
                        />
                        {errors.number?.type === "required" && (
                            <p role="alert" className="text-red-500 text-sm">Please enter your number</p>
                        )}
                    </div>


                    {/* description */}
                    <div className="">
                        <Controller
                            name="message"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange } }) =>
                                <TextField
                                    id="outlined-basic"
                                    label="Message"
                                    variant="outlined"
                                    onChange={onChange}
                                    className="w-full"
                                    autoComplete="off"
                                    type="text"
                                    multiline
                                    rows={4}
                                />
                            }
                        />
                        {errors.message?.type === "required" && (
                            <p role="alert" className="text-red-500 text-sm">Please enter your message</p>
                        )}
                    </div>

                    {/* button */}
                    <div className=" mx-auto">
                        <Button
                            text="Submit"
                            className="text-sm text-center"
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form
