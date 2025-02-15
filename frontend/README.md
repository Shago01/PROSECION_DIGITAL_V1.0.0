# 💻 Frontend - Proseción digital V1.0.0

## 📌 Descripción

El frontend de este proyecto es una aplicación web para la gestión y registro de los nazarenos en Mompox. Permite a los usuarios registrarse, consultar información y administrar los datos de los participantes a través de una interfaz intuitiva y accesible.

## 🛠️ Tecnologías

- **Framework**: React.js / Vue.js / Angular
- **Gestión de estado**: Redux / Context API / Vuex
- **Estilos**: CSS3 / TailwindCSS / Bootstrap
- **Autenticación**: JWT con localStorage / SessionStorage
- **Consumo de API**: Axios / Fetch API
- **Pruebas**: Jest / Cypress / React Testing Library

## 📂 Estructura del Proyecto

```
/frontend
│── src
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Vistas principales
│   ├── services/       # Llamadas a la API
│   ├── store/          # Gestión del estado
│   ├── assets/         # Recursos estáticos (imágenes, estilos)
│   ├── hooks/          # Custom hooks
│── public/             # Archivos públicos (index.html, favicon)
│── package.json        # Dependencias y scripts
│── README.md           # Documentación
```

## ⚙️ Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-repositorio.git
   cd frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno en un archivo `.env`:
   ```env
   REACT_APP_API_URL=http://localhost:3000
   REACT_APP_API_KEY=tu_api_key_aqui
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

## 🚀 Funcionalidades

- Registro e inicio de sesión de usuarios.
- Gestión de nazarenos (crear, actualizar, eliminar, listar).
- Interfaz intuitiva y responsiva.
- Conexión con la API backend.
- Manejo de errores y validaciones.

## 🧪 Pruebas

Para ejecutar pruebas unitarias y de integración:

```bash
npm test
```

Para ejecutar pruebas de end-to-end con Cypress:

```bash
npx cypress open
```
