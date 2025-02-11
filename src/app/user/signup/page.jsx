"use client"
import React from 'react';
import GoogleLogin from '@/components/GoogleLogin';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SignupPage = () => {
    const router = useRouter();

    const handleSignupForm = async(event) => {
        event.preventDefault();
  
        try {
          const formData = new FormData(event.currentTarget);
  
          const name = formData.get('name');
          const email = formData.get('email');
          const password = formData.get('password');
  
          const response = await axios.post(`/api/user`,{name,email,password});
            console.log(response);
            console.log(response.data);
            
            
            
            if(response.data.success)  {
                
                toast.success(response.data.msg);

                router.push('/user/login');
                
            }  
  
        } catch (e) {
          console.log(e.message)
        }
      }

    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            {/* google auth sign In */}
            <GoogleLogin/>

            <h5>OR</h5>

            <h2 className='text-3xl my-3'>Get Registered here</h2>

            <form onSubmit={handleSignupForm} className='w-[650px] h-auto flex flex-col items-center justify-center px-12 py-8 border border-black bg-gray-200 rounded'>

                <div className='my-3'>
                    <label className='text-2xl mx-4' htmlFor="name">Enter your name </label>
                    <input type="text" name='name' id='name' className='mx-3 px-3 py-2' />
                </div>

                <div className='my-3'>
                    <label className='text-2xl mx-4' htmlFor="email">Enter your email </label>
                    <input type="email" name='email' id='email' className='mx-3 px-3 py-2' />
                </div>

                <div className='my-3'>
                    <label className='text-2xl mx-4' htmlFor="password">Enter password </label>
                    <input type="text" name='password' id='password' className='mx-3 px-3 py-2' />
                </div>

                <button type='submit' className='px-3 py-2 bg-black text-white rounded hover:bg-gray-600'>Sign Up</button>

                <hr className=' h-1' />

                <p className='mt-5'>If you already registered, then <Link href='/user/login' className='p-1 text-xl text-white bg-blue-600 hover:bg-blue-400 rounded'>Log In</Link> here</p>

            </form>
        </div>
    );
};

export default SignupPage;