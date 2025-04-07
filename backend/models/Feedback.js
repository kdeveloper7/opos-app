import { pool } from './db.js';

export async function saveFeedback(userId, temaId, comentario) {
  const [rows] = await pool.query('INSERT INTO feedback (user_id, tema_id, comentario) VALUES (?, ?, ?)', [userId, temaId, comentario]);
  return rows.insertId;
}



export async function getFeedbackByTema(temaId) {
  const [rows] = await pool.query(`
    SELECT f.id, f.comentario, u.username
    FROM feedback f
    JOIN users u ON f.user_id = u.id
    WHERE f.tema_id = ?
    ORDER BY f.id DESC
  `, [temaId]);
  return rows;
}