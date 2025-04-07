# Oposiciones App

Este proyecto es una aplicación para gestionar temas y feedbacks relacionados con oposiciones. Permite a los usuarios autenticarse, crear temas, enviar feedbacks y visualizar los feedbacks asociados a cada tema.

## Funcionalidades principales

- **Autenticación de usuarios**: Inicio de sesión y registro.
- **Gestión de temas**: Crear, editar y eliminar temas.
- **Enviar feedbacks**: Los usuarios pueden enviar feedbacks relacionados con un tema.
- **Ver feedbacks**: Nueva funcionalidad que permite seleccionar un tema desde un desplegable y visualizar los feedbacks asociados.

---

## Mejoras recientes

1. **Nueva interfaz para ver feedbacks**:
   - Se agregó una página (`ver-feedbacks.html`) que permite seleccionar un tema desde un desplegable y visualizar los feedbacks asociados.
   - Se eliminó el botón "Ver Feedbacks" de cada tema en el dashboard para centralizar esta funcionalidad en una única página.

2. **Correcciones en el backend**:
   - Se corrigieron las rutas y controladores para manejar correctamente las solicitudes de feedbacks por tema.
   - Se verificó la conexión con la base de datos para asegurar que los datos se obtienen correctamente.

---

## Requisitos previos

- **Node.js**: Versión 16 o superior.
- **Base de datos MySQL**: Configurada y en ejecución.
- **NPM**: Administrador de paquetes de Node.js.

---

## Configuración del proyecto

1. **Clonar el repositorio**:
   ```bash
   git clone <URL-del-repositorio>
   cd opos-app

2. Instalar dependencias:
   npm install
3. Configurar las variables de entorno: Crea un archivo .env en la carpeta backend con el siguiente contenido:

PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASS=tu_contraseña
DB_NAME=nombre_de_la_base_de_datos
JWT_SECRET=tu_secreto_jwt

4. Inicializar la base de datos: Ejecuta el script SQL para crear las tablas necesarias y poblar datos iniciales

CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) UNIQUE,
  `password` VARCHAR(255),
  PRIMARY KEY (`id`)
);

CREATE TABLE `temas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT,
  `titulo` VARCHAR(255),
  `contenido` TEXT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
);

CREATE TABLE `feedback` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT,
  `tema_id` INT,
  `comentario` TEXT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
  FOREIGN KEY (`tema_id`) REFERENCES `temas`(`id`)
);

6. Iniciar el servidor backend:

cd backend
npm start

6. 
Abrir el frontend: Abre el archivo index.html en tu navegador o utiliza una extensión como "Live Server" en VS Code.

Uso de la aplicación
Inicio de sesión:

Accede a login.html para iniciar sesión con tus credenciales.
Dashboard:

Desde el dashboard (dashboard.html), puedes:
Crear nuevos temas.
Editar o eliminar temas existentes.
Enviar feedbacks relacionados con un tema.
Ver feedbacks seleccionando un tema desde un desplegable en la página ver-feedbacks.html.
Ver feedbacks:

Accede a ver-feedbacks.html.
Selecciona un tema desde el desplegable y haz clic en "Ver Feedbacks" para visualizar los comentarios asociados.

Estructura del proyecto
opos-app/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── feedbackController.js
│   │   └── temaController.js
│   ├── models/
│   │   ├── db.js
│   │   ├── Feedback.js
│   │   └── Tema.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── feedbackRoutes.js
│   │   └── temaRoutes.js
│   ├── app.js
│   └── .env
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   ├── feedback.html
│   ├── [ver-feedbacks.html](http://_vscodecontentref_/1)
│   └── css/
└── [README.md](http://_vscodecontentref_/2)

Próximas mejoras
Implementar paginación para los feedbacks.
Agregar validaciones más robustas en el frontend y backend.
Mejorar el diseño de la interfaz con TailwindCSS.

Contribuciones
Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request. ¡Toda ayuda es bienvenida!

