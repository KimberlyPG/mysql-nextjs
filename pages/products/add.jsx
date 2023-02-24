import React from 'react'

import ProductForm from '../../components/ProductForm';
import Layout from "../../components/Layout";
import ProductsList from '../../components/ProductsList';

const add = () => {
  return (
    <Layout>
      <ProductForm />
      <ProductsList />
    </Layout>
  )
}

export default add;