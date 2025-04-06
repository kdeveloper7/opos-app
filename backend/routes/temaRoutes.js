import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { crearTema, verTemas, enviarFeedback } from '../controllers/temaController.js';
const router = express.Router();
router.use(authMiddleware);
router.post('/tema', crearTema);
router.get('/temas', verTemas);
router.post('/feedback', enviarFeedback);
export default router;
