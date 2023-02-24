import { pool } from '../../../../config/db';

export default async function handler(req, res)  {
    const { id, cantidad, empleadoId, clienteId } = req.body;
    const [product] = await pool.query('CALL reducir_cantidad(?, ?, ?, ?)',
    [id, cantidad, empleadoId, clienteId]
    )
    return res.status(200).json(product[0]);
} 