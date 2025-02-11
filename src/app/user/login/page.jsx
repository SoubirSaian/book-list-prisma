'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { doCredentialLogin } from '@/app/actions';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [error,setError] = useState('');
    const router = useRouter();

    const handleLoginForm = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);

            const response = await doCredentialLogin(formData);

            if (!!response.error) {
                console.error(response.error);
                setError(response.error.message);
            } else {
                // router.push("/admin");
            }
        } catch (err) {
            
            console.error(err);
            setError("Check your Credentials");
            
        }
    }

    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            
            <h2 className='text-3xl my-3'>Get Log In here</h2>

            {
                error &&  <div className="text-xl text-red-500">{error}</div>
            }

            <form onSubmit={handleLoginForm} className='w-[650px] h-auto flex flex-col items-center justify-center px-12 py-12 border border-black bg-gray-200 rounded'>

                <div className='my-3'>
                    <label className='text-2xl mx-4' htmlFor="email">Enter your email </label>
                    <input type="email" name='email' id='email' className='mx-3 px-3 py-2' />
                </div>

                <div className='my-3'>
                    <label className='text-2xl mx-4' htmlFor="password">Enter password </label>
                    <input  type="text" name='password' id='password' className='mx-3 px-3 py-2' />
                </div>

                <button type='submit' className='px-3 py-2 bg-black text-white rounded hover:bg-gray-600'>Log In</button>

                <hr className=' h-1' />

                <p className='mt-5'>If you don't have an account, then at first <Link href='/user/signup' className='p-1 text-xl text-white bg-blue-600 hover:bg-blue-400 rounded'>Sign up</Link> here</p>

            </form>
        </div>
    );
};

export default LoginPage;