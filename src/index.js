import express from "express";
import userController from "./controller/userController.js";
import tarefaController from "./controller/tarefaController.js";
//import middleware from "./middleware/mid.js";
import bd from "./database/bd.js";

const app = express()
const port = 3000


app.use(express.json())

userController(app, bd)
tarefaController(app, bd)

app.listen(port,()=>{
    console.log(`Testando o servido da http://localhost:${port}`);
    
})



