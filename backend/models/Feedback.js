import { pool } from './db.js';

export async function saveFeedback(userId, temaId, comentario) {
  const [rows] = await pool.query('INSERT INTO feedback (user_id, tema_id, comentario) VALUES (?, ?, ?)', [userId, temaId, comentario]);
  return rows.insertId;
}
