import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByUsername } from '../models/User.js';

export async function register(req, res) {
  try {
    const { username, password } = req.body;
    const user = await findUserByUsername(username);
    if (user) return res.status(400).json({ message: 'Usuario ya existe' });
    const hash = await bcrypt.hash(password, 10);
    const userId = await createUser(username, hash);
    res.json({ message: 'Usuario registrado', userId });
  } catch (err) {
    res.status(500).json({ message: 'Error en el registro', error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await findUserByUsername(username);
    if (!user) return res.status(404).json({ message: 'No existe el usuario' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Contraseña incorrecta' });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error en el login', error: err.message });
  }
}
