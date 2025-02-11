import React from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='flex sm:flex-col md:flex-row justify-around items-center gap-2 sm:gap-0 bg-black py-2'>
            <Image src={assets.logo_light} alt='logo' width={120} />
            <p className='text-white'>All right reserved. Copyright@blogger</p>

            <div className='flex'>
                <Image src={assets.facebook_icon} alt='icon' width={40}/>
                <Image src={assets.twitter_icon} alt='icon' width={40}/>
                <Image src={assets.googleplus_icon} alt='icon' width={40}/>
            </div>
        </div>
    );
};

export default Footer;