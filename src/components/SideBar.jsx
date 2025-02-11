import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideBar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-6 py-3 border border-black'>
                <Link href='/'>
                
                    <Image src={assets.logo} alt='logo' width={120} className='cursor-pointer' />
                </Link>
            </div>

            <div className='w-30 sm:w-80 h-[100vh] py-8 relative border border-black'>

                <Link href='/admin/addBook' className='flex items-center gap-3 my-5 px-2 py-3 font-medium border border-black shadow-[-5px_5px_0px_#000000]'>
                    <Image src={assets.add_icon} width={28} alt='icon'/> 
                    <p>Add Books</p>
                </Link>

                <Link href='/admin/bookList' className='flex items-center gap-3 my-5 px-2 py-3 font-medium border border-black shadow-[-5px_5px_0px_#000000]'>
                    <Image src={assets.blog_icon} width={28} alt='icon'/> <p>Book List</p>
                </Link>

                <Link href='/admin/subscribers' className='flex items-center gap-3 my-5 px-2 py-3 font-medium border border-black shadow-[-5px_5px_0px_#000000]'>
                    <Image src={assets.email_icon} width={28} alt='icon'/> <p>Subscribers</p>
                </Link>
                
            </div>
        </div>
    );
};

export default SideBar;