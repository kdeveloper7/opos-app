# Plataforma de Oposiciones - Full Stack App

## Tecnologías

- **Backend:** Node.js, Express, MySQL
- **Frontend:** HTML + Tailwind CSS
- **Base de datos:** MySQL
- **Autenticación:** JWT

---

## 📦 Instalación

### 1. Clonar el repositorio o descomprimir el ZIP

```bash
unzip oposiciones_project.zip
cd backend
```

### 2. Instalar dependencias del backend

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la carpeta `backend/` con el siguiente contenido (ya viene incluido):

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=1234
DB_NAME=oposiciones
JWT_SECRET=supersecreto
```

### 4. Crear base de datos MySQL

Accede a tu consola MySQL y ejecuta:

```sql
CREATE DATABASE oposiciones;

USE oposiciones;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE temas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  titulo VARCHAR(255),
  contenido TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  tema_id INT,
  comentario TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (tema_id) REFERENCES temas(id)
);
```

---

## 🚀 Levantar el servidor

```bash
npm start
```

El servidor estará corriendo en: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Frontend

Abre el archivo `frontend/index.html` en tu navegador. Los demás archivos se comunican con el backend usando `fetch()`.

---

## 🧠 Funcionalidades

- Registro y login de usuarios
- Creación y visualización de temas
- Envío de feedback por tema
- Protección de rutas con tokens JWT
