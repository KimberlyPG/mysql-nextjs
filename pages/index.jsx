import styles from '@/styles/Home.module.css'
import axios from "axios";

import Products from "../components/Products";
import Layout from "../components/Layout";

export default function Home({ products }) {

  return (
    	<Layout>
      		<Products product={products} />
    	</Layout>
  )
}

export const getServerSideProps = async(context) => {

    const res = await axios.get('http://localhost:3000/api/products');

    return {
      props: {
        products: res.data,
      }
    }
}
