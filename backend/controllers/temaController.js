import { createTema, getTemasByUser, updateTema, deleteTema } from '../models/Tema.js';
import { saveFeedback } from '../models/Feedback.js';

export async function crearTema(req, res) {
  const { titulo, contenido } = req.body;
  const userId = req.user.id;
  const id = await createTema(userId, titulo, contenido);
  res.json({ id });
}

export async function verTemas(req, res) {
  const temas = await getTemasByUser(req.user.id);
  res.json(temas);
}

export async function enviarFeedback(req, res) {
  const { temaId, comentario } = req.body;
  const id = await saveFeedback(req.user.id, temaId, comentario);
  res.json({ id });
}

export async function actualizarTema(req, res) {
  const { id } = req.params;
  const { titulo, contenido } = req.body;
  const ok = await updateTema(id, req.user.id, titulo, contenido);
  if (ok) return res.json({ success: true });
  res.status(403).json({ error: 'No autorizado o tema no encontrado' });
}

export async function eliminarTema(req, res) {
  const { id } = req.params;
  const ok = await deleteTema(id, req.user.id);
  if (ok) return res.json({ success: true });
  res.status(403).json({ error: 'No autorizado o tema no encontrado' });
}

export async function obtenerTemas(req, res) {
  try {
    const [temas] = await pool.query('SELECT id, nombre FROM temas ORDER BY nombre ASC');
    res.json(temas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los temas' });
  }
}