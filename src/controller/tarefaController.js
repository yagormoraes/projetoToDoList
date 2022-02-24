const tarefaController = (app)=>{
    app.get('/tarefa', (req, res)=>{
        //res.send('Rota GET para entidade tarefa')
        //res.send('Rastreamento da aplicação sendo feito com nodemon para a tarefa')
        res.json({
            "msg_get":"Pegando algo pela rota GET da tarefa"
        })
    })

    app.post('/tarefa',(req,res)=>{
        res.json({
            "msg_post":"Rota POST de tarefa ativada: tarefa add ao banco de dados"
        }

        )
    })
    
}

export default tarefaController