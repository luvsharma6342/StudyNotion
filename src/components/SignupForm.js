import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData((prevData) => {

            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
        }
        else {
            setIsLoggedIn(true);
            toast.success("Account Created");
            const accountData = {
                ...formData
            }
            console.log(accountData);
            navigate("/dashboard");
        }
    }

    return (
        <div>
            {/* Student instructor tab */}
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button
                    className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => {
                        setAccountType("student")
                    }}>
                    Student
                </button>
                <button className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => {
                    setAccountType("instructor")
                }}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>

                {/* First name and Last name */}
                <div className='flex gap-x-4 mt-[10px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]
                        '>First Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-3 shadow-md'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]
                        w-full'>Last Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-3 shadow-md'
                        />
                    </label>
                </div>
                {/* Email */}
                <div className='mt-[10px]'>
                    <label className='w-full mt-4'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Email Addresss <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="email"
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter email addresss'
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-3 shadow-md w-full'
                        />
                    </label>
                </div>

                <div className='w-full flex gap-x-4 mt-[10px]'>
                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={(showPassword1) ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Passwrod'
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-3 shadow-md'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPassword1((prev) => !prev)}>
                            {
                                (showPassword1) ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>
                    </label>

                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={(showPassword2) ? ("text") : ("password")}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Enter Passwrod'
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-3 shadow-md'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPassword2((prev) => !prev)}>
                            {
                                (showPassword2) ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>
                    </label>

                </div>

                <button className='w-full bg-yellow-50 mt-6 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'>
                    Create Account
                </button>

            </form>
        </div>
    )
}

export default SignupForm
