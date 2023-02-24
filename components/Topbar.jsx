import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import logo from '../assets/logo.png'

const Topbar = () => {
    const router = useRouter();

    const handleSubmit = () => {
        router.push('/products/add');
    }

  return (
    <div className='flex justify-between h-14 w-full shadow-md'>
        <Link href={'/'} >
            <div className='flex items-center h-full w-full ml-5 space-x-5 hover:bg-gray-100 rounded-sm'>
                <Image 
                    className='w-[60%] h-[50%]'
                    src={logo} 
                    alt="grupo alza logo" 
                />
                <h2 className='w-full text-xl text-yellow-800 font-bold'>Módulo de CRM</h2>
            </div>
        </Link>
        <button 
            className='h-full text-orange-500 font-bold rounded-sm mr-5 hover:bg-gray-100 rounded-sm' 
            onClick={handleSubmit}
        >
            Add new product
        </button>
    </div>
  )
}

export default Topbar;