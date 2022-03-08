import Tarefa from "../model/Tarefa.js"

const tarefaController = (app, bd)=>{
    app.get('/tarefa', (req, res)=>{
        //res.send('Rota GET para entidade tarefa')
        //res.send('Rastreamento da aplicação sendo feito com nodemon para a tarefa')
        res.json({
            "tarefa":bd.tarefas
        })
    })

    app.post('/tarefa',(req,res)=>{
        const body = req.body
        const tarefaNova = new Tarefa(body.titulo,body.descricao,body.status,body.dataCriacao)
        console.log(tarefaNova);
        bd.tarefas.push(tarefaNova)

        res.json({
            "msg_post":"Rota POST de tarefa ativada: tarefa add ao banco de dados",
            "tarefa":tarefaNova
        }

        )
    })
    
}

export default tarefaController