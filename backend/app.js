import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import temaRoutes from './routes/temaRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js'; // Importa las rutas de feedback

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', authRoutes);
app.use('/api', temaRoutes);
app.use('/api', feedbackRoutes); // Usa las rutas de feedback

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor backend iniciado en http://localhost:${process.env.PORT}`);
});

export default app;
