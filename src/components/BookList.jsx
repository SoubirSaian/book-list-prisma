"use client"
import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import axios from 'axios';

const BookList = () => {
    const [menu,setMenu] = useState('All');
    const [books,setBooks] = useState([]);

    const fetchAllBook = async () => {
        const response = await axios.get('/api/book');
        // console.log(response.data.allBook);
        
        setBooks(response.data.allBook);
    }

    useEffect(() => {
        fetchAllBook();
    },[]);

    

    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button onClick={() => setMenu('All')} className={menu === 'All' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>All</button>

                <button onClick={() => setMenu('Science')} className={menu === 'Science' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Science</button>

                <button onClick={() => setMenu('Novel')} className={menu === 'Novel' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Novel</button>

                <button onClick={() => setMenu('Textbook')} className={menu === 'Textbook' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Textbook</button>
            </div>

            <div className='mb-16 flex flex-wrap justify-around gap-1 gap-y-10 mx-12 md:mx-24 lg:mx-16 '>
                {
                    books && books.filter((item) => (menu === 'All' ? true : (item.category === menu ) ) ).map((item,index) => {

                        return <BookItem key={index} image={item.image} title={item.title} category={item.category} description={item.description} id={item.id} />
                    })
                }
            </div>
        </div>
    );
};

export default BookList;