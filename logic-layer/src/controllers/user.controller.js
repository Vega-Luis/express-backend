import { request } from 'express';
import { Int, pool } from 'mssql';
import { getConnection } from '../database/connection'
const path = require('path')

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

export const checkUserCrendentials = async (req, res) => {
    var dataString = ''
    req.on('data', function(data) {
        dataString += data
    })
    .on ('end', function () {
        console.log(dataString);
    })
    var ran = Math.trunc((Math.random() * 100) % 2);
    console.log(ran);
    if (ran == 0) {
        
    res.sendFile(path.join(__dirname, '../../../interface-layer/src/query.html'))
    } else {
    res.sendFile(path.join(__dirname, '../../../interface-layer/src/index.html'));
    }
};

export const showLogin = async (req, res) => {
   res.sendFile(path.join(__dirname, '../../../interface-layer/src/index.html'));
}