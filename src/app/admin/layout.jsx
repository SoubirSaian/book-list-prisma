import { assets } from "@/assets/assets";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLayout({children}){

    return (
        <>
            <div className="flex">
                {/* added toastcontainer tag to display toast at the top of the page */}
                <ToastContainer theme="dark" />

                <SideBar/>

                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full max-h-[60px] py-3 px-6 border border-black">
                        <h3 className="font-medium">Admin Panel</h3>
                        <Image src={assets.profile_icon} width={40} alt="profile-img"/>
                    </div>

                     {children}
                </div>
            </div>
        </>
    )
}