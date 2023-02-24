import { pool } from '../../../config/db';

export default async function handler(req, res)  {
    switch(req.method) {
        case 'GET': 
            return await getProducts(req, res);
        case 'POST':
            return await sendProducts(req, res);
        default:
            break;
    }
}

const getProducts = async(req, res) => {
    const [products] = await pool.query('SELECT * FROM vempleadocliente')
    return res.status(200).json(products);
}

const sendProducts = async(req, res) => {
    const {nombre, descripcion} = req.body; 
    const [response] = await pool.query('INSERT INTO productos SET ?', {
    nombre, descripcion})
    return res.status(200).json(response);
}
