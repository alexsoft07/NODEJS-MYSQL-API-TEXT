import app from './app.js'
import { PORT } from './config.js'

/** Escuchando */
app.listen(PORT)

console.log("Server running on port", PORT);