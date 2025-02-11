import { NextResponse } from "next/server";

//api endpoint to add email in db
export async function POST(request){
    const formdata = await request.formData();
    const emailData = {
        email: `${formdata.get('email')}`
    }

    //await EmailModel.create(emailData) 
    return NextResponse.json({success:true,msg:'Email subscribed'});
}

//api endpoint to get all email
export async function GET(request){
    //const emails = await emailModel.find({});

     
    return NextResponse.json({success:true,msg:'Got all email',emails});
}