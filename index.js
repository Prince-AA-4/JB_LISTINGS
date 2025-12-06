import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/dbConfig.js';
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())


const startServer = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Database conected succesfully.');
        app.listen(port, ()=>{
            console.log(`Serverver is runnung on port http://localhost:${port}`)
        })
    } catch (error) {
        console.error('Failed to start Server:', error)  
    }
}

startServer()