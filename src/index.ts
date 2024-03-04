import express from "express"
import cors from "cors"
import {config} from "dotenv"
config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

import cursosRouter from "./routes/cursos.router"
import paisesRouter from "./routes/paises.router"

app.use("/cursos", cursosRouter)
app.use("/paises", paisesRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
