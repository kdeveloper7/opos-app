import { pool } from './db.js';

export async function createTema(userId, titulo, contenido) {
  const [rows] = await pool.query('INSERT INTO temas (user_id, titulo, contenido) VALUES (?, ?, ?)', [userId, titulo, contenido]);
  return rows.insertId;
}



export async function getTemasByUser(userId) {
  const [rows] = await pool.query('SELECT * FROM temas WHERE user_id = ?', [userId]);
  return rows;
}



export async function updateTema(id, userId, titulo, contenido) {
  const [result] = await pool.query(
    'UPDATE temas SET titulo = ?, contenido = ? WHERE id = ? AND user_id = ?',
    [titulo, contenido, id, userId]
  );
  return result.affectedRows > 0;
}

export async function deleteTema(id, userId) {
  // Primero elimina los feedbacks asociados al tema
  await pool.query('DELETE FROM feedback WHERE tema_id = ?', [id]);

  // Luego elimina el tema
  const [result] = await pool.query('DELETE FROM temas WHERE id = ? AND user_id = ?', [id, userId]);
  return result.affectedRows > 0;
}
