import { request } from 'express';
import { Int, pool } from 'mssql';
import { send } from 'process';
import { getConnection } from '../database/connection'
const path = require('path')

export const invalidRoute = async (req, res) => {
    res.send('Error 404 page not found')
};

export const showLogin = async (req, res) => {
    res.send('Showing login page');
   //res.sendFile(path.join(__dirname, '../../../interface-layer/src/index.html'));
}

export const login = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('inUserName', 'Juan')
        .input('inPassword', 'j123')
        .output('OutStatus', 0)
        .output('OutResult', 0)
        .execute('CheckUser');
    console.log(result);
    res.send('Sending data for login')
    return result;
};

export const getAllArticles = async (req, res) => {
    res.send("Showing all articles")
};

export const consultByPattern  = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('inName', 'a')
        .output('outResult', 0)
        .execute('FilterByName');
    console.log(result);
    res.send("Showing pattern search result")
   // return result;
};

export const consultByAmount = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('inAmount', 10)
        .output('outResult', 0)
        .execute('FilterTopAmount');
    console.log(result);

    res.send("Showing amount search result")
};

export const showInsert = async (req, res) => {
    
    res.send("Showing insert page")
};

export const insert = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('inName', 'new')
        .input('inPrice', 100)
        .output('outResult', 0)
        .execute('InsertArticle');
    console.log(result);
    res.send("Sending insert data")
};
export const getUserCredentials = async (req, res) => {
    res.json('Hola')

}; 