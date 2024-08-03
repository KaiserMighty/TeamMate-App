import mysql from 'mysql2';

const databaseConnection = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dbpassword",
    database: "TeammateDB",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default databaseConnection;