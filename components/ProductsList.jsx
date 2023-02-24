import React, { useEffect, useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios'
import Link from 'next/link';

const ProductsList = () => {
    const [productsData, setProductsData] = useState([]);
    
    useEffect(() => {
        const getProductsList = async() => {
            await axios.get('/api/products/list')
            .then((data) => setProductsData(data.data))
        }
        getProductsList();
    }, [])

    const deleteProduct = async(id) => {
        const value = confirm('are you sure that you want to delete this product?')
        if(value) {
            await axios.delete(`/api/products/${id}`)
        } else return
    }

  return (
    <div className='flex flex-col w-full justify-center w-4/5 mr-20'>
        <div className='flex bg-gray-700 text-white rounded-sm px-1 mt-10'>
            <span className='w-10'>Id</span>
            <span className='w-1/4'>Nombre</span>
            <span className='w-5/6'>Descripción</span>
            <span className='w-1/4'>Modificar</span>
        </div>
        <div className='flex flex-col bg-gray-100 rounded-sm px-1'>
            {productsData.map((item) => (
                <div key={item.id} className='flex hover:bg-gray-200'>
                    <span className='w-10 border-r-2'>{item.id}</span>
                    <span className='w-1/4 border-r-2'>{item.nombre}</span>
                    <span className='w-5/6 border-r-2'>{item.descripcion}</span>
                    <div className='flex w-1/4 space-x-10'>
                        <Link href={`edit/${item.id}`}>
                            <MdModeEditOutline />
                        </Link>
                        <AiFillDelete 
                            onClick={() => deleteProduct(item.id)} 
                            className='cursor-pointer'
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductsList