const userController = (app)=>{
    app.get('/usuario', (req, res)=>{
        //res.send('Rota GET para entidade usuário')
        res.json({
            "msg_get":"Pegando algo pela rota GET do usuário"
        })
    })

    app.post('/usuario',(req,res)=>{
        res.json({
            "msg_post":"Rota POST de usuário ativada: user add ao banco de dados"
        }

        )
    })
    
}


export default userController
