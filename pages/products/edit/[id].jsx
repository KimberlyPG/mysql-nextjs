import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import ProductForm from '../../../components/ProductForm'
import Layout from '../../../components/Layout'

const Edit = () => {
    const router = useRouter();
    const [product, setProduct] = useState('');

    useEffect(() => {
        const getProductData = () => {
            axios.get(`/api/products/${router.query.id}`)
            .then((data) => setProduct(data.data));
        }
        getProductData();
    }, [])

  return (
    <Layout>
        <ProductForm />
    </Layout>
  )
}

export default Edit

