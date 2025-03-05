# 🖥️ Backend - Procesión Digital V1.0.0  

## 📌 Descripción  
Este servicio proporciona la API REST para la gestión y registro de los nazarenos de Mompox. Permite la administración de usuarios, inscripciones y roles, garantizando un control eficiente del proceso.  

## 🛠️ Tecnologías  
- **Node.js** + **TypeScript**  
- **Express.js** (Framework para la API)  
- **PostgreSQL** (Base de datos)  
- **Sequelize ORM** (Manejo de la base de datos)  
- **JWT** (Autenticación)  
- **Jest + [DEFINIR]** (Pruebas)  
- **Docker** (Contenedorización para el entorno de desarrollo)  

## 📂 Estructura del Proyecto 
```
/backend
│── src/
│   ├── config/         # Configuración del entorno y base de datos
│   ├── controllers/    # Controladores de la API
│   ├── middlewares/    # Middleware de autenticación y validaciones
│   ├── database/       
│   │   ├── models/     # Definición de entidades con Sequelize
│   ├── repositories/   # Consultas a la base de datos
│   ├── dto/            # Objetos de transferencia de datos (DTOs)
│   ├── routes/         
│   │   ├── v1/         # Versionado de la API (V1)
│   │   └── index.ts    # Concentra las rutas de la API
│   ├── services/       # Lógica de negocio
│   ├── utils/          # Funciones auxiliares
│   ├── types/          # Definiciones de tipos e interfaces globales
│   ├── app.ts          # Configuración principal de Express
│   └── server.ts       # Punto de entrada del servidor
│── tests/              # Pruebas unitarias y de aceptación
│   ├── unit/
│   ├── acceptance/
│   ├── mocks/
│   └── setup.ts
│── .gitignore          # Archivos a ignorar en el repositorio
│── package.json        # Dependencias del proyecto
│── tsconfig.json       # Configuración de TypeScript
│── Dockerfile          # Archivo para construir la imagen Docker
│── .dockerignore       # Archivos a excluir en Docker
└── README.md           # Documentación del backend

```
## ⚙️ Configuración

1. Clona el repositorio:
```
git clone https://github.com/tu-repositorio.git
cd backend
```

2. Instala las dependencias:
```
npm install
```

3. Configura las variables de entorno en un archivo .env:

```
NODE_ENV=

PORT=

DB_USER=
DB_PASS=
DB_HOST=
DB_NAME=
DB_PORT=

JWT_SECRET=
```

5. Inicia el servidor
modo desarrollo
  ```
  npm run dev
  ```
