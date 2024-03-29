# Sólo para desarrollo

# Configuración Técnica del Proyecto

## Frontend

- **Framework:** ReactJS
- **Styling:** Tailwind CSS
- **Bundler:** Vite
- **HTTP Client:** Axios (para la interacción con la API)

## Backend

- **Entorno de ejecución:** Node.js
- **Framework:** Express.js
- **Logging:** Morgan
- **Auto-reloading:** Nodemon (sólo para el desarrollo)

## Base de Datos

- **Gestor de Base de Datos:** MySQL


## Estructura del Proyecto

El proyecto sigue una estructura típica de aplicaciones web modernas, con el frontend y el backend separados en directorios distintos.

├── frontend/ # Directorio del Frontend
│   ├── src/ # Código fuente del Frontend
│   ├── public/ # Archivos públicos del Frontend
│   ├── package.json # Dependencias y scripts del Frontend
│   └── ...
│
├── backend/ # Directorio del Backend
│   ├── src/ # Código fuente del Backend
│   ├── package.json # Dependencias y scripts del Backend
│   └── ...
│
└── ...

## Instrucciones para Ejecutar el Proyecto

1. **Configuración del Entorno:**
   - Asegúrese de tener Node.js y npm instalados en su sistema.
   - Instale las dependencias del frontend y el backend ejecutando `npm install` dentro de los directorios correspondientes.

2. **Configuración de la Base de Datos:**
   - Asegúrese de tener un servidor MySQL en ejecución.
   - Configure las credenciales de acceso a la base de datos en el backend según sea necesario.

3. **Ejecución del Backend:**
   - Para iniciar el servidor backend, ejecute el siguiente comando dentro del directorio `backend`: `npm start`.
   - Utilice Nodemon para el desarrollo ejecutando `npm run dev`.

4. **Ejecución del Frontend:**
   - Para iniciar la aplicación frontend, ejecute el siguiente comando dentro del directorio `frontend`: `npm start`.

5. **Acceso a la Aplicación:**
   - Una vez que los servidores estén en funcionamiento, acceda a la aplicación a través de su navegador web visitando la URL proporcionada por el servidor de desarrollo.
