import Tarefa from "../model/Tarefa.js"

const tarefaController = (app, bd)=>{
    app.get('/tarefa', (req, res)=>{
        const allTarefas = bd.tarefas
        res.json({
            "tarefa":allTarefas
        })
    })

    app.post('/tarefa',(req,res)=>{
        const body = req.body
        const tarefaNova = new Tarefa(body.titulo,body.descricao,body.status)
        bd.tarefas.push(tarefaNova)

        res.json({
            "msg_post":`Tarefa com título ${tarefaNova.titulo} inserida com sucesso`,
            "tarefa":tarefaNova
        }

        )
    })

    app.get('/tarefa/titulo/:titulo',(req,res)=>{
        const titulo = req.params.titulo
        const tituloFind = bd.tarefas.filter(tarefa => (tarefa.titulo == titulo))
        res.json({
            "titulo":tituloFind
        })
    })

    app.delete('/tarefa/titulo/:titulo',(req,res)=>{
        const titulo = req.params.titulo
        const novoBD = bd.tarefas.filter(tarefa => (tarefa.titulo != titulo))
        bd.tarefas = novoBD
        res.json({
            "msg":`Tarefa ${titulo} deletada`
        })
    })
    
}

export default tarefaController