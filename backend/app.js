import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import temaRoutes from './routes/temaRoutes.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', temaRoutes);
app.listen(process.env.PORT, () => {
    console.log(`🚀 Servidor backend iniciado en http://localhost:${process.env.PORT}`);
  });
export default app;  
