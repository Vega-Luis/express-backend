import { request } from 'express';
import { Int, pool } from 'mssql';
import { send } from 'process';
import { getConnection } from '../database/connection'
const sp_connection = require('../database/sp_connection')
const path = require('path')

export const invalidRoute = async (req, res) => {
    res.send('Error 404 page not found')
};

export const showLogin = async (req, res) => {
    const existUser = sp_connection.checkUser()
    res.send('Showing login page');
   //res.sendFile(path.join(__dirname, '../../../interface-layer/src/index.html'));
}

export const login = async (req, res) => {
    res.send('Sending data for login')
};

export const getAllArticles = async (req, res) => {
    res.send("Showing all articles")
};

export const consultByPattern  = async (req, res) => {
    res.send("Showing pattern search result")
};

export const consultByAmount = async (req, res) => {
    res.send("Showing amount search result")
};

export const showInsert = async (req, res) => {
    res.send("Showing insert page")
};

export const insert = async (req, res) => {
    res.send("Sending insert data")
};
export const getUserCredentials = async (req, res) => {
    res.json('Hola')

}; 