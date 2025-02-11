"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const BookListPage = () => {
    const [allBook,setAllBook] = useState([]);

    //fetch all book function
    const fetchBookList = async () => {
        const res = await axios.get('/api/book');
        setAllBook(res.data.allBook);
    }

    //delete a book item from the list
    const deleteBook = async (Id)  => {
        try {
            
            const res = await axios.delete('/api/book',{
                params:{
                    id: Id
                }
            });

            if(res.data.success){
                toast.success(res.data.msg);
                //call fetchBookList() function to update ui
                fetchBookList();
            }
        } catch (error) {
            console.log(error);
            
            toast.error(error.msg);
        }
    }

    useEffect(() => {
        fetchBookList();
    },[]);

    return (
        <div className='flex-1 pt-5 px-5'>
            <h1>All Books</h1>

            <div className='m-6 '>
            {
                allBook && allBook.map((item,index) => {
                    return (
                        <div key={index} className='my-6'>
                            <span className='mx-4 text-2xl font-medium'>{item.title}</span>
                            <span className='mx-4 text-xl '>{item.author}</span>
                            <button onClick={() => deleteBook(item.id)} className='mx-4 text-white bg-red-500 hover:bg-red-400 rounded'>Delete</button>
                            <hr />
                        </div>
                    )
                })
            }
            </div>
             
        </div>
    );
};

export default BookListPage;