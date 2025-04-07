import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { crearTema, verTemas, enviarFeedback } from '../controllers/temaController.js';
import { actualizarTema, eliminarTema, obtenerTemas } from '../controllers/temaController.js';

const router = express.Router();
router.use(authMiddleware);
router.post('/tema', crearTema);
router.get('/temas', verTemas);
router.post('/feedback', enviarFeedback);
router.put('/tema/:id', actualizarTema);
router.delete('/tema/:id', eliminarTema);
router.get('/', obtenerTemas); // Ruta para obtener todos los temas

export default router;
