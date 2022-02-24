const userController = (app)=>{
    app.get('/usuario', (req, res)=>{
        //res.send('Rota GET para entidade usuário')
        res.send('Rastreamento da aplicação sendo feito com nodemon')
    })

    app.post('/usuario',(req,res)=>{
        res.json({
            "nome" : "yago",
            "msg" : "fala fiote"
        }

        )
    })
    
}


export default userController

