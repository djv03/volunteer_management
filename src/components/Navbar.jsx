import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import  styles from './navbar.module.css'
function Navbar(user) {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link href={'/'}>
                    <p className='text-3xl'> India<span className='text-blue-600 mx-2'>Recycles</span></p>
                </Link>
            </div>
            <div className={styles.navlinks}>

                <Link href={'/register'}>
                    <li className='  font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>Volunteer with us</li>
                </Link>
                <Link href={'/'}>
                    <li className='  font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>Donate</li>
                </Link>

            </div>
            <div className={styles.navend}>
                {user.value && <button className='rounded  m-4 p-2 w-24 h-10 ease-in duration-100 font-bold cursor-default '>welcome {user.name} </button>
                }


                {!user.value &&
                    <Link href={'/dashboard'}>
                        <button className=' rounded-lg bg-slate-700 px-6 py-3  font-bold  transition  hover:text-indigo-500 duration-200 '>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar