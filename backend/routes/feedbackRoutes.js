import express from 'express';
import { verFeedbackPorTema } from '../controllers/feedbackController.js';

const router = express.Router();

router.get('/tema/:id/feedbacks', verFeedbackPorTema);

export default router;
