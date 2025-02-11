import BookList from "@/components/BookList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  return (
    <>
      <ToastContainer/>
      <Header/>
      <BookList/> 
      <Footer/>
    </>
  );
}
