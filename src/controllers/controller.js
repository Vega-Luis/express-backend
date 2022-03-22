import { request } from 'express';
import { Int, pool } from 'mssql';
import { send } from 'process';
import { getConnection } from '../database/connection'
const jwt = require('jsonwebtoken')

import { config } from 'dotenv'
config();

export const login = async (req, res) => {

    const pool = await getConnection();

    const result = await pool.request()
        .input('inUserName', req.body.userName)
        .input('inPassword', req.body.password)
        .output('OutStatus', 0)
        .output('OutResult', 0)
        .execute('CheckUser');
    if (result.output.OutStatus == 1) {
        jwt.sign({user: req.body}, `${config.TOKEN_KEY}`, (err, token) => {
            res.status(200).json({ status: 200,
                token, });
        });
    } else {
        res.status(403).json({
            status: "Not registered"
        })
    }
};

export const consultByPattern = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('inName', req.body.pattern)
        .output('outResult', 0)
        .execute('FilterByName');
    res.json(result.recordset)
};

export const consultByAmount = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('inAmount', req.body.rowAmount)
        .output('outResult', 0)
        .execute('FilterTopAmount');
    res.json(result.recordset)
};

export const insert = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('inName', req.body.name)
        .input('inPrice', req.body.price)
        .output('outResult', 0)
        .execute('InsertArticle');
    if (result.output.outResult == 0) {
        res.json({
            access: true
        })
    } else {
        res.json({
            access: false
        })
    }
};