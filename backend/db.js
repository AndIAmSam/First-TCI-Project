import { createPool } from 'mysql2/promise';  

export const pool = new createPool({
    host: 'db',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'projectdb',
})