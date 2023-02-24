import { pool } from '../../../../config/db';

export default async function handler(req, res)  {
    const [products] = await pool.query('SELECT * FROM productos')
    return res.status(200).json(products);
}

