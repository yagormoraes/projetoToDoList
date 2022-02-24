const tarefaController = (app)=>{
    app.get('/tarefa', (req, res)=>{
        //res.send('Rota GET para entidade tarefa')
        res.send('Rastreamento da aplicação sendo feito com nodemon para a tarefa')
    })
    
}

export default tarefaController