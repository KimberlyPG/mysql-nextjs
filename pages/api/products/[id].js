import { pool } from '../../../config/db';

export default async function handler(req, res)  {
    switch(req.method) {
        case 'GET': 
            return await getProducts(req, res);
        case 'POST':
            return await sendProducts(req, res);
        case 'PUT':
            return await updateProduct(req, res);
        case 'DELETE':
            return await deleteProduct(req, res);
        default:
            break;
    }
}

const getProducts = async(req, res) => {
    const { id } = req.query;
    const [product] = await pool.query('SELECT * FROM productos WHERE id = ?', [id])
    return res.status(200).json(product[0]);
}

const updateProduct = async(req, res) => {
    const { id } = req.query;
    const { nombre, descripcion } = req.body;
    const [product] = await pool.query('UPDATE productos SET nombre = ?, descripcion = ? WHERE id = ?',
    [nombre, descripcion, id]
    )
    return res.status(200).json(product[0]);
} 

const deleteProduct = async(req, res) => {
    const { id } = req.query;
    await pool.query('DELETE FROM productos WHERE id = ?', [id])
}