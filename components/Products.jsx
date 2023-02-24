import React from 'react';
import ProductsTable from "../components/ProductsTable";

const Products = ({ product }) => {
    return (
    <div className='flex flex-col w-3/5'>
        <h1 className='w-4/5 text-xl text-gray-700 my-2'>
            Información de Productos
        </h1>
        <div className='flex w-full justify-center'>
            <ProductsTable product={product}/>
        </div>
    </div>
  )
}

Products.propTypes = {}

export default Products;