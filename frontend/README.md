# 💻 Frontend - Proseción digital V1.0.0  

## 📌 Descripción  
Este servicio proporciona la interfaz de usuario para la gestión y registro de los nazarenos de Mompox. Permite la administración de usuarios, inscripciones y roles, asegurando una experiencia intuitiva y eficiente para los participantes.  

---

## 🛠️ Tecnologías  
El frontend ha sido desarrollado con las siguientes tecnologías:  

- **Next.js** - Framework de React para aplicaciones web modernas.  
- **TypeScript** - Superset de JavaScript que agrega tipado estático.  
- **Tailwind CSS** - Framework de estilos para diseño responsivo.  
- **Axios** - Cliente HTTP para consumir la API backend.  
- **Jest + React Testing Library** - Pruebas unitarias e integración.  
- **ESLint** - Herramientas para mantener código limpio y formateado.  
- **Docker** - Contenedorización para el entorno de desarrollo.  

---

## 📂 Estructura del Proyecto  

```
/frontend
├── src/
│   ├── assets/          # Archivos estáticos (imágenes, íconos, fuentes)
│   ├── components/      # Componentes reutilizables
│   ├── hooks/           # Hooks personalizados
│   ├── layouts/         # Estructura de páginas con navegación y secciones
│   ├── pages/           # Rutas de Next.js (cada archivo es una ruta)
│   ├── services/        # Llamadas a la API con Axios
│   ├── store/           # Gestión del estado global con Zustand
│   ├── styles/          # Archivos de estilos globales
│   ├── utils/           # Funciones auxiliares
│   ├── app/             # Nuevo directorio de Next.js (App Router)
│   ├── middleware.ts    # Middleware global (si aplica)
│   ├── next.config.js   # Configuración de Next.js
│   └── types/           # Definición de tipos y modelos de datos
├── public/              # Archivos estáticos públicos
├── tests/               # Pruebas unitarias e integración
├── .gitignore           # Archivos a ignorar en el repositorio
├── package.json         # Dependencias del proyecto
├── tsconfig.json        # Configuración de TypeScript
├── next-env.d.ts        # Configuración de Next.js para TypeScript
├── dockerfile           # Configuración para contenedorización
└── README.md            # Documentación del frontend
```

---

## ⚙️ Configuración  

### **1️⃣ Clonar el repositorio**  
```sh
git clone https://github.com/tu-repositorio.git
cd frontend
```

### **2️⃣ Instalar dependencias**  
```sh
npm install
```

### **3️⃣ Configurar variables de entorno**  
Crear un archivo `.env.local` en la raíz del proyecto con la siguiente estructura:  
```sh
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
```

### **4️⃣ Ejecutar en modo desarrollo**  
```sh
npm run dev
```

### **5️⃣ Construir para producción**  
```sh
npm run build
npm start
```

### **6️⃣ Ejecutar con Docker**  
```sh
docker build -t procesion-digital-frontend .
docker run -p 3000:3000 procesion-digital-frontend
```
---

## 🧪 Pruebas  

### **Ejecutar pruebas unitarias**  
```sh
npm test
```

### **Ejecutar pruebas de integración**  
```sh
npm run test:integration
```
