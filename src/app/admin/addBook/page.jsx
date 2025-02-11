"use client"
import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddBookPage = () => {
    const [img,setImg] = useState(null);
    const [data,setData] = useState({title:'',description:'',category:'',author:''});


    //handle add new book function
    const onchangeHandler = async (e) => {
        e.preventDefault();
        console.log(data,img);
        
        
        var formData = new FormData();
        formData.append("image", img);
        formData.append('title',data.title);
        formData.append('description',data.description);
        formData.append('category',data.category);
        formData.append('author',data.author);    
       
         
        try {
            
            const response = await axios.post('/api/book',formData);

            if(response.data.success){
                toast.success(response.data.msg);
                setImg(false);
                setData({title:'',description:'',category:'',author:'Shakespiere',authorImg:'/author_img.png'});
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }   
    }

    return (
        <>
            <form onSubmit={onchangeHandler} className='px-10 pt-6'>

                <p className='text-xl'>Add Thumbnail</p>
                <label htmlFor="image">
                    <Image src={!img ? assets.upload_area : URL.createObjectURL(img)} width={180} height={90} alt='icon'/>    
                </label> 
                <input onChange={(e) => setImg(e.target.files[0])} type="file" id='image' hidden required />  

                <p className='text-xl mt-4'>Book Name</p> 
                <input name='title' onChange={(e) => setData((prev) => ({...prev,title:e.target.value}))} value={data.title} type="text" className='w-full sm:w-[400px] mt-4 px-3 py-2 border' placeholder='Enter book name' required />

                <p className='text-xl mt-4'>Author Name</p> 
                <input name='author' onChange={(e) => setData((prev) => ({...prev,author:e.target.value}))} value={data.author} type="text" className='w-full sm:w-[400px] mt-4 px-3 py-2 border' placeholder='Enter author name' required />

                <p className='text-xl mt-4'>Book description</p> 
                <textarea name='description' onChange={(e)=> setData((prev)=>({...prev,description:e.target.value}))} value={data.description} rows={3} type="text" className='w-full sm:w-[400px] mt-4 px-3 py-2 border' placeholder='Enter book description' required />

                <p className='text-xl mt-4'>Select Category</p>
                <select name="category" onChange={(e) => setData((prev) => ({...prev,category:e.target.value}))} value={data.category} className='w-60 px-3 py-2 border text-gray-500'>
                    <option value="Novel">Novel</option>
                    <option value="Textbook">Textbook</option>
                    <option value="Science">Science</option>
                </select>
                <br />

                <button type='submit' className='mt-8 w-55 h-12 px-12  bg-black text-white'>Add</button>

            </form>  
        </>
    );
};

export default AddBookPage;