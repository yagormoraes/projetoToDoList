import Usuario from "../model/Usuario.js"


const userController = (app, bd)=>{

    app.get('/usuario', (req, res)=>{
        const todosUsers = bd.usuarios

        res.json({
            "usuario":todosUsers
        })
    })

    app.post('/usuario',(req,res)=>{
        const body = req.body
        const novoUser = new Usuario(body.nome, body.email, body.senha)
        bd.usuarios.push(novoUser)
        res.json({
            "msg":`Usuário ${novoUser.nome} inserido com sucesso`,
            "user":novoUser
        })
    })

    app.get('/usuario/nome/:nome',(req,res)=>{
        const nome = req.params.nome
        const nomeFind = bd.usuarios.filter(usuario => (usuario.nome == nome))
        res.json({
            "nome":nomeFind
        })
    })

    app.get('/usuario/email/:email',(req,res)=>{
        const email = req.params.email
        const emailFind = bd.usuarios.filter(usuario => (usuario.email == email))
        res.json({
            "email":emailFind
        })
    })

    app.delete('/usuario/nome/:nome',(res,req)=>{
        const nome = req.params.nome
        const novoBD = bd.usuarios.filter(usuario => (usuario.nome != nome))
        bd.usuarios = novoBD
        res.json({
            "msg" : `Tarefa ${nome} deletada`
        })
    })
    
    
}


export default userController
