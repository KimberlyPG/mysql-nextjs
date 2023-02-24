import React, { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios'

const ProductForm = () => {
    const router = useRouter();
    const [product, setProduct] = useState({
        nombre: '',
        descripcion: ''
    });

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(router.query.id) {
            await axios.put(`/api/products/${router.query.id}`, product);
        } else {
            await axios.post('/api/products', product)
            router.push('/');
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;

        setProduct({...product, [name]: value })
    }

    const handleDelete = async(event) => {
        event.preventDefault();
        await axios.delete(`/api/products/${router.query.id}`);
    }

  return (
    <div className='flex w-full justify-center'>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center border-2 p-10 space-y-6'>
                {!router.query.id ? (
                    <h2 className='text-gray-400'>Add a new product</h2>
                ):(
                    <h2 className='text-gray-400'>Edit product</h2>
                )
                }
                <div className='flex flex-col text-gray-700'>
                    <label htmlFor="nombre">Product name:</label>
                    <input className='bg-gray-100 w-72' type="text" name="nombre" value={product.nombre} onChange={handleChange} />
                </div>
                <div className='flex flex-col text-gray-700'>
                    <label htmlFor="descripcion">Description:</label>
                    <input className='bg-gray-100 w-72' type="text" rows="2" name="descripcion" value={product.description} onChange={handleChange} />
                </div>
            </div>
            <div className='space-x-4'>
                <button 
                    className='px-5 my-1 bg-green-500 text-white rounded-sm'
                >
                    Save
                </button>
                {router.query.id &&
                    <button 
                        className='px-5 my-1 bg-red-500 text-white rounded-sm'
                        onClick={handleDelete}
                    >
                        Delete product
                    </button>
                }
            </div>
        </form>
    </div>
  )
}

export default ProductForm