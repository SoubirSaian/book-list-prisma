import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const TableBookItem = ({authorImg,title}) => {
    return (
        <tr className='bg-white border-white'>

            <th scope='row' className='sm:flex items-center gap-3 px-4 py-3 font-medium text-gray-900 whitespace-nowrap hidden'>
                <Image src={authorImg ? authorImg : assets.profile_icon} alt='img'/>
            </th>

            <td className='px-4 py-3'>
                {title?title:'no- Title'}
            </td>

            <td className='px-4 py-3'>
                {'11 jan 2025'}
            </td>
            <td className='px-4 py-3'>
                X
            </td>

        </tr>
    );
};

export default TableBookItem;