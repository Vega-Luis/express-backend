import { request } from 'express';
import { Int, pool } from 'mssql';
import { send } from 'process';
import { getConnection } from '../database/connection'
const path = require('path')

export const login = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('inUserName', req.body.userName)
        .input('inPassword', req.body.password)
        .output('OutStatus', 0)
        .output('OutResult', 0)
        .execute('CheckUser');
    
        if (result.output.OutStatus == 1) {
        res.json({
            access: true
        })
    } else {
        res.json({
            access: false
        })
    }
};

export const consultByPattern  = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('inName', req.body.pattern)
        .output('outResult', 0)
        .execute('FilterByName');
    console.log(result.recordset);
    res.json(result.recordset)
   // return result;
};

export const consultByAmount = async (req, res) => {
    console.log(req.body);
    const pool = await getConnection();
    const result = await pool.request()
        .input('inAmount', req.body.rowAmount)
        .output('outResult', 0)
        .execute('FilterTopAmount');
    console.log(result.recordset);

    res.json(result.recordset)
};

export const insert = async (req, res) => {
    console.log(req.body)
    const pool = await getConnection();
    const result = await pool.request()
        .input('inName', req.body.name)
        .input('inPrice', req.body.price)
        .output('outResult', 0)
        .execute('InsertArticle');
    console.log(result.output.outResult);

    if (result.output.outResult == 0) {
        console.log("enter")
        res.json({
            access: true
        })
    } else {
        res.json({
            access : false 
        })
    }
};