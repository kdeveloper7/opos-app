import { pool } from './db.js';

export async function createUser(username, passwordHash) {
  const [rows] = await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, passwordHash]);
  return rows.insertId;
}

export async function findUserByUsername(username) {
  const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
}
