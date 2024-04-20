import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
//import './config.js' 

const app = express();
/**
 * Recibe los datos y los convierte en un json
 * Luego se lo pasa a las rutas
 */
app.use(express.json())
/** Acceder a las rutas definidas */
app.use(indexRoutes)
app.use('/api',employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({ 
        message: 'Endpoint not found'
    })
})

export default app;