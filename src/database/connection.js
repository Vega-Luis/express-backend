import sql from 'mssql';

const dbSettings = {
    user: 'sa',
    password: 'sapassword',
    server: 'localhost',
    database: 'PTP',
    port:  62392,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

export async function getConnection() {
    try {
    const pool = await sql.connect(dbSettings);
    return pool;
    } catch (error) {
        console.error(error);
    }
}