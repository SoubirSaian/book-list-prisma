"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
// import { auth } from '@/auth';

const Header =  () => {

    // const session = await auth();

    const [email,setEmail] = useState('');

    const handlEmailSubscription = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email',email);

        const res = await axios.post('/api/email',formData);

        if(res.data.success){
            toast.success(res.data.msg);
            setEmail('');
        }else{
            toast.error('Failed to subscribe');
        }
    }
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href='/'>
                
                     <Image src={assets.logo} alt='logo' className='w-[130px] sm:w-auto cursor-pointer' />
                </Link>

                 
                <Link href='/admin' >
                    <h4  className='px-4 py-2 font-medium border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Admin</h4>
                </Link>
                


                <Link href='/user/signup' className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                    Get Sign In <Image src={assets.arrow} alt='icon'  /> 
                </Link>
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Latest books</h1>
                <p className='mt-6 max-w-[740px] m-auto text-xs sm:text-base'>In ORM, entities are objects or classes in OOP that correspond to tables in a relational database. These entities represent business objects or concepts within an application.</p>

                <form onSubmit={handlEmailSubscription} className='flex justify-between max-w-[500px] mt-5 mx-auto scale-75 sm:scale-100 border border-black shadow-[-7px_7px_0px_#000000]'>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' className='pl-4 outline-none' />
                    <button type='submit' className='border-l border-black px-4 py-4 active:bg-gray-600 active:text-white'>Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Header;