const userController = (app)=>{
    app.get('/usuario', (req, res)=>{
        //res.send('Rota GET para entidade usuário')
        res.json({
            "usuario":[]
        })
    })

    app.post('/usuario',(req,res)=>{
        const body = req.body
        console.log("o body ta aqui");
        console.log(body);


        res.json({
            "msg_post":"Rota POST de usuário ativada: user add ao banco de dados",
            "user":body
        }

        )
    })
    
}


export default userController
