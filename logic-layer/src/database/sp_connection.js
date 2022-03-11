import { getConnection } from "./connection";

const mssql = require('mssql')

export async function checkUser() {
    const pool = await getConnection();
    const result = await pool.request()
    .input('inUserName', 'Juan')
    .input('inPassword', 'j123')
    .output('OutStatus', 0)
    .output('OutResult', 0)
    .execute('CheckUser');
    console.log(result);
    return result;
}

export async function insertArticle() {

}

export async function filterByName() {

}

export async function filterTopAmount() {

}