import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import cors from 'cors'
//import './config.js' 

const app = express();
const whiteList = ['https://nodejs-mysql-api-text-production.up.railway.app'];
// 'https://nodejs-mysql-api-text-production
/**
 * Recibe los datos y los convierte en un json
 * Luego se lo pasa a las rutas
 */
app.use(express.json())
app.use(cors({
    cors: whiteList
}));

/** Acceder a las rutas definidas */
app.use(indexRoutes)
app.use('/api',employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({ 
        message: 'Endpoint not found'
    })
})

export default app;