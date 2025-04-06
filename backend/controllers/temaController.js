import { createTema, getTemasByUser } from '../models/Tema.js';
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
