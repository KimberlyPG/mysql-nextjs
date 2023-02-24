import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import Layout from '../../../components/Layout';

const Venta = () => {
    const router = useRouter();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProductData = async() => {
            await axios.get(`/api/products/${router.query.id}`)
            .then((data) => setProduct(data.data))
        }
        getProductData();
    }, [])
    console.log('product', product);

    const handleClick = async() => {
        await axios.put(`/api/products/venta/${router.query.id}`, product)
    }

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;

        setProduct({...product, [name]: value })
        console.log('product', product);
    }

  return (
    <Layout>
        <div className='flex flex-col w-3/5'>     
            <div className='flex flex-col  justify-center border-2 p-10 space-y-6'>
                <span className='flex text-xl'>
                    <h2 className='text-gray-400'>
                        Venta del producto 
                    </h2>
                    <p className='text-orange-300'>&nbsp;{product.nombre}</p>
                </span>
                <span className='flex w-3/5'>
                    <p className='w-32'>Código</p>
                    <p>{product.id}</p>
                </span>
                <span className='flex w-3/5'>
                    <p className='w-32'>Nombre</p>
                    <p>{product.nombre}</p>
                </span>
                <span className='flex w-3/5'>
                    <p className='w-32'>Descripción</p>
                    <p>{product.descripcion}</p>
                </span>
                <span className='flex w-3/5'>
                    <label htmlFor="cantidad" className='w-32'>ClienteId</label>
                    <input type="text" name='cliente' className='bg-gray-100' onChange={handleChange} required />
                </span>
                <span className='flex w-3/5'>
                    <label htmlFor="cantidad" className='w-32'>EmpleadoId</label>
                    <input type="text" name='empleado' className='bg-gray-100' onChange={handleChange} required />
                </span>
                <span className='flex w-3/5'>
                    <label htmlFor="cantidad" className='w-32'>Cantidad</label>
                    <input type="number" name='cantidad' className='bg-gray-100' onChange={handleChange}  min={0} max={10000} required/>
                </span>
            </div>
            <button 
                className='w-32 px-5 my-1 bg-green-500 text-white rounded-sm' 
                onClick={handleClick}
            >
                Vender
            </button>
        </div>
    </Layout>
  )
}

export default Venta