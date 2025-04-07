import { pool } from '../models/db.js';

export async function verFeedbackPorTema(req, res) {
  try {
    const temaId = req.params.id;
    const [feedbacks] = await pool.query(`
      SELECT f.id, f.comentario, u.username
      FROM feedback f
      JOIN users u ON f.user_id = u.id
      WHERE f.tema_id = ?
      ORDER BY f.id DESC
    `, [temaId]);
    res.json(feedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los feedbacks' });
  }
}