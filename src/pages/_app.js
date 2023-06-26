import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect,useState } from 'react';
// pages/_app.js
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState({ value: null });

  const router = useRouter()
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ value: token });
      setKey(Math.random())
    }
  },[router.query])
  const logout = async() => {
    localStorage.removeItem('token')
    setUser({ value: null })
    setKey(Math.random())
    await router.push(`${process.env.NEXT_PUBLIC_HOST}`);
    
    toast.success('goodbye :(', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return <>
  {key && <Navbar
  key={key}
  logout={logout}
  user={user}
  />}
   <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  
  <Component {...pageProps} />
  </>
}
