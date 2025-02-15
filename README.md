# PROSECION_DIGITAL_V1.0.0
## 📖 Introducción
Procesión Digital es un sistema de gestión y registro de los nazarenos de Mompox. Su objetivo es facilitar el control, inscripción y seguimiento de los participantes en las procesiones religiosas, digitalizando el proceso y asegurando una administración eficiente.

## 🌍 Contexto de la Aplicación
La Semana Santa en Mompox es una de las festividades religiosas más importantes del país, atrayendo a miles de nazarenos y visitantes. Tradicionalmente, la inscripción y organización de los nazarenos se ha realizado de manera manual, lo que puede generar demoras e inconsistencias en los registros.
Este sistema busca modernizar el proceso a través de una plataforma digital accesible y eficiente, asegurando que los datos de los participantes estén correctamente almacenados y gestionados.

## 🏛️ Arquitectura
El sistema sigue una arquitectura basada en una API REST desarrollada en TypeScript con Node.js, y un frontend en React con Vite. La base de datos utilizada es PostgreSQL con Prisma ORM.

## 🔗 API REST
La API REST proporciona endpoints para la gestión de usuarios, inscripciones, roles y eventos relacionados con las procesiones. Incluye autenticación, validaciones y manejo de errores.

## 📂 Estructura de Carpetas
El proyecto está dividido en dos principales directorios:
```
/procesion_digital
├── backend/  # API en Node.js con Express y TypeScript
│   ├── src/
│   ├── tests/
│   ├── package.json
│   ├── tsconfig.json
├── frontend/  # Interfaz de usuario en React con Vite
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
└── redmid.rm  # Documentación principal del proyecto
```

## 📌 Source

El código del proyecto está alojado en un repositorio de GitHub, con un flujo de trabajo basado en Gitflow.

## ⚡ Manejo de Repositorio

### Ramas principales:
 - `main`: Contiene el código estable en producción.
 - `develop`: Rama de desarrollo donde se integran las nuevas funcionalidades.

### Ramas de características: 
Se crean con el prefijo `feature/HU-[código]-[descripción-corta]` para nuevas funcionalidades.
### Estándares de commits:
 - `feat`: Nueva funcionalidad.
 - `fix`: Correción de errores. 
 - `chore`: Tareas de mantenimiento.
