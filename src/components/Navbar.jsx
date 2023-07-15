import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mainlogo from './mainlogo.webp'
function Navbar({ logout, user }) {
    console.log(user)
    return (
        <div className='main flex justify-around mt-8 '>
            <div className="logo-section bg-gray-900 px-6 py-2 rounded-3xl">
                <Link href={'/'}>
                    <p className='text-3xl'> India<span className='text-blue-600 mx-2'>Recycles</span></p>
                </Link>
            </div>
            <div className="flex justify-center items-center  navlinks-section bg-gray-900 h-12   rounded-3xl">
                <Link href={'/'}>
                    <li className='  font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>About us</li>
                </Link>
                <Link href={'/'}>
                    <li className='  font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>Locate us</li>
                </Link>
                <Link href={'/register'}>
                    <li className='  font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>Volunteer</li>
                </Link>
                <Link href={'/'}>
                    <li className='  font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>Donate</li>
                </Link>

            </div>
            <div className="nav-end ">
                {user.value && <button className='rounded  m-4 p-2 w-24 h-10 ease-in duration-100 font-bold cursor-default '>welcome {user.name} </button>
                }
                {user.value && <Link href={'/'}>
                    <button onClick={logout} className='rounded-lg bg-slate-700 px-6 py-3 mx-3 font-bold  transition  hover:text-indigo-500 duration-200 '>logout </button>
                </Link>}
                {!user.value &&
                    <Link href={'/register'}>
                        <button className='rounded bg-slate-400 text-emerald-300  m-4 p-2 w-24 h-10 ease-in duration-100 font-bold hover:bg-slate-600 '>Contribute</button>
                    </Link>
                }
                {!user.value &&
                    <Link href={'/dashboard'}>
                        <button className='rounded-lg bg-slate-700 px-6 py-3 mx-3 font-bold  transition  hover:text-indigo-500 duration-200 '>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar