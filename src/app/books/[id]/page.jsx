"use client"
import React, { useEffect, useState } from 'react';
import { assets } from '@/assets/assets';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';


const BookId = () => {
    const params = useParams();
    const [data,setData] = useState(null);

    const fetchOneBookData = async () => {
        
        const response = await axios.get(`/api/book`,{
            params:{
                id: params.id
            }
        });

        setData(response.data.book);
        
    }

    useEffect(() => {
        fetchOneBookData();
    },[]);
    // console.log(data);
    
    return (
        <div className='bg-gray-200 px-5 pt-5 md:px-12 lg:px-24'>
            <div className='flex justify-between items-center px-12'>
                <Link href='/'>
                    <Image src={assets.logo} alt='logo' className='w-[130px] sm:w-auto' />
                </Link>
            
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                    Get Started <Image src={assets.arrow} alt='icon'  /> 
                </button>
            </div>
            {
                data && (
                    <div className='text-center mb-18'>
                        <h1 className='text-2xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                        
                        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>

                        <Image src={`/${data.image}`} alt='image' width={500} height={400} className='mx-auto'/>

                        <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>

                        <p className='mb-18'>{data.description}</p>
                    </div>
                    
                )
            }

            {/* <Footer/> */}
        </div>
    );
};

export default BookId;