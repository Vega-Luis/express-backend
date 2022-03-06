import { request } from 'express';
import { pool } from 'mssql';
import { getConnection } from '../database/connection'

export const getUserCredentials = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
    .input('inUserName', 'Juan')
    .input('inPassword', 'j123')
    .output('OutStatus', 0)
    .output('OutResult', 0)
    .execute('CheckUser');
console.log(result);
    res.json('Hola')
}; 