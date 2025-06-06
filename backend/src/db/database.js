import mysql from "mysql2/promise"; 
import config from "./../config.js"; 

let connection = null;

const getConnection = async () => {
    if (connection && connection.connection.state === 'connected') {
        return connection;
    }
    try {
        connection = await mysql.createConnection({
            host: config.host,
            database: config.database,
            user: config.user,
            password: config.password,
            port: config.port 
        });
        console.log("Conectado a la base de datos MySQL!");
        return connection;
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        throw error;
    }
};

export default getConnection;
//si