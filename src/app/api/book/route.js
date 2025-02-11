import { NextResponse } from "next/server";
import prisma from '../../../../lib/prisma';
import {writeFile} from 'fs/promises';
import fs from 'fs';

//const fs = require('fs');

// database connection wil be executed here.
// then api will connected with the database

//api endpoint to get all existing book in DB
export async function GET(request){
    const bookId = await request.nextUrl.searchParams.get('id');

    if(bookId){
        const book = await prisma.book.findUnique({
            where:{
                id: parseInt(bookId)
            }
        });
        return NextResponse.json({book});
    }
    else{

        const allBook = await prisma.book.findMany();
        return NextResponse.json({allBook, success:true});
    }
}

//api endpoint for adding new book in Database
 export async function POST(request){
     const formdata = await request.formData();
    
    console.log(formdata);
    
    
    const timestamp = Date.now();
    //upload image in nextjs public folder
    const image = formdata.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);

    const imgUrl = `${timestamp}_${image.name}`;

    const bookData = {
        title: `${formdata.get('title')}`,
        description: `${formdata.get('description')}`,
        category: `${formdata.get('category')}`,
        author: `${formdata.get('author')}`,
        image: `${imgUrl}`,
        
    }
    console.log(bookData);
    
    //prisma connect and upload book data
    await prisma.book.create({
        data: bookData
    })
     
     return NextResponse.json({success: true, msg: 'book added'});

 }

//api endpoint to delete book
export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    try {
        
        const book = await prisma.book.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        //to delete book image from public folder
        fs.unlink(`./public${book.image}`,()=>{});

        //delete book from database
        await prisma.book.delete({
            where: {
                id: parseInt(id)
            }
        })

        return NextResponse.json({success:true,msg:'Deleted successfully'})
    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false,msg:'failed to delete', error});
    }
}