import { pool } from './db.js';

export async function createTema(userId, titulo, contenido) {
  const [rows] = await pool.query('INSERT INTO temas (user_id, titulo, contenido) VALUES (?, ?, ?)', [userId, titulo, contenido]);
  return rows.insertId;
}

export async function getTemasByUser(userId) {
  const [rows] = await pool.query('SELECT * FROM temas WHERE user_id = ?', [userId]);
  return rows;
}
