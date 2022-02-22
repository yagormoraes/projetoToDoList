import express from "express";
import userController from "./controller/userController.js";
import tarefaController from "./controller/tarefaController.js";

const app = express()
const port = 3000

userController(app)

tarefaController(app)

app.listen(port,()=>{
    console.log(`Testando o servido da http://localhost:${port}`);

})



