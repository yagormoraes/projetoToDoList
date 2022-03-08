import Usuario from "../model/Usuario.js"


const userController = (app, bd)=>{
    app.get('/usuario', (req, res)=>{
        //res.send('Rota GET para entidade usuário')
        res.json({
            "usuario":bd.usuarios
        })
    })

    app.post('/usuario',(req,res)=>{
        const body = req.body
        const userNovo = new Usuario(body.nome, body.email, body.senha)
        console.log(userNovo);
        bd.usuarios.push(userNovo)


        res.json({
            "msg_post":"Rota POST de usuário ativada: user add ao banco de dados",
            "user":userNovo
        }

        )
    })
    
}


export default userController
