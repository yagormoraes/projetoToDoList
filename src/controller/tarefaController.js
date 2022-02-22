const tarefaController = (app)=>{
    app.get('/tarefa', (req, res)=>{
    res.send('Rota GET para entidade tarefa')
})
}

export default tarefaController