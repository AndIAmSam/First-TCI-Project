# Development Only

# Project Technical Configuration

## Frontend

- **Framework:** ReactJS
- **Styling:** Tailwind CSS
- **Bundler:** Vite
- **HTTP Client:** Axios (for the API)

## Backend

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Logging:** Morgan
- **Auto-reloading:** Nodemon (for development only)

## Database

- **Database Management System:** MySQL

## Project Structure

The project follows a typical structure of modern web applications, with the frontend and backend separated into different directories.

├── frontend/ # Frontend Directory
│   ├── src/ # Frontend Source Code
│   ├── public/ # Public files of the Frontend
│   ├── package.json # Frontend Dependencies and Scripts
│   └── ...
│
├── backend/ # Backend Directory
│   ├── src/ # Backend Source Code
│   ├── package.json # Backend Dependencies and Scripts
│   └── ...
│
└── ...

## Instructions to Run the Project

1. **Environment Setup:**

   - Make sure you have Node.js and npm installed on your system.
   - Install frontend and backend dependencies by running `npm install` within the corresponding directories.

2. **Database Setup:**

   - Ensure you have a MySQL server running.
   - Configure database access credentials in the backend as needed.

3. **Running the Backend:**

   - To start the backend server, run the following command within the `backend` directory: `npm run dev`.

4. **Running the Frontend:**

   - To start the frontend application, run the following command within the `frontend` directory: `npm run dev`.

5. **Accessing the Application:**

   - Once the servers are up and running, access the application via your web browser by visiting the URL provided by the development server.
