
import React from 'react';
import { auth, signOut } from '@/auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';

const AdminPage = async () => {
    // if user not logged in then can not enter in the admin pannel
    const session = await auth();

    // if(!session?.user)  {
    //     redirect('/user/signup');
    // }

    // const logoutFunction = async () => {
    //     await signOut({ redirectTo: "/" });
    // }

    return (
        <div>
              {
                session?.user?.name && session?.user?.image ? (
                    <>
                        <h1 className="text-3xl my-2">
                            Welcome, {session?.user?.name}
                        </h1>
                        <Image
                            src={session?.user?.image}
                            alt={session?.user?.name}
                            width={72}
                            height={72}
                            className="rounded-full"
                        />
                    </>
                ) : (
                    <h1 className="text-center text-3xl my-2">
                        Welcome, {session?.user?.email} <br /> name: {session?.user?.name}
                    </h1>

                    
                )
            }

            {/* <button onClick={logoutFunction} className=' w-[100px] mx-auto my-2 font-medium rounded bg-red-400 hover:bg-red-200'>Log Out</button> */}
        </div>
    );
};

export default AdminPage;