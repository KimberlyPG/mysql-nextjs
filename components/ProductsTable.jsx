import React from 'react'
import { MdSell } from "react-icons/md";
import { useRouter } from 'next/router'

const ProductsTable = ({ product }) => {
    const router = useRouter();

    const handleClick = (productoId) => {
        router.push(`/products/venta/${productoId}`)    
    }

  return (
    <table className='w-full'>
        <thead className='bg-gray-700 text-white rounded-sm px-1 mt-10 '>
            <tr>
                <th>Producto</th>
                <th>Cantidad vendida</th>
                <th>Stock disponible</th>
                <th>Vender</th>
            </tr>
        </thead>
        <tbody className='bg-gray-100 rounded-sm px-1'>
            {product?.map((item) => (
                <>
                    <tr 
                        key={item.productoId} 
                        className='hover:bg-gray-200'
                    >
                        <td className='border-l-2'>{item.producto}</td>
                        <td className='border-l-2'>{item.cantidadVendida}</td>
                        <td className='border-l-2'>{item.cantidadInventario}</td>
                        <td className='flex border-l-2 justify-center'>
                            <MdSell 
                                onClick={() => handleClick(item.productoId)} 
                                className='cursor-pointer'
                            />
                        </td>
                    </tr>
                </>
            ))
            }
        </tbody>
    </table>
  )
}

export default ProductsTable