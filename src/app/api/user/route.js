import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
// import { createUser } from "@/queries/users"; 

// import bcrypt from "bcryptjs";
// import { dbConnect } from "@/lib/mongo";

export async function POST(request) {
  const {name, email, password} = await request.json();

  console.log(name, email, password);

  // Create a DB Conenction
//   await dbConnect();
  // Encrypt the password
//   const hashedPassword = await bcrypt.hash(password, 5);
  // Form a DB payload
//   const newUser = {
//     name,
//     // password: hashedPassword,
//     password,
//     email
//   }
//   // Update the DB
  try {
    await prisma.user.create({
        data:{
            name,email,password
        }
    });
  } catch (err) {
    return new NextResponse.json(err.message, {
      status: 500,
    });
  }

  return new NextResponse.json({success:true, msg:"User has been created", 
    status: 201,
  });

 }