import Usuario from "../model/Usuario.js"
import UsuarioDAO from "../DAO/UsuarioDAO.js"


const userController = (app, bd)=>{
    const usuarioDao = new UsuarioDAO(bd)

    app.get('/usuario', (req, res)=>{
       usuarioDao.pegaTodosUsuarios()
       .then((resposta)=>{
           res.json(resposta)
       })
       .catch((erro)=>{
           res.json(erro)
       })
    })

    app.post('/usuario',(req,res)=>{
        const body = req.body
        try{
            const novoUser = new Usuario(body.nome,body.email,body.senha)
            usuarioDao.insereUsuario(novoUser)
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })
        }catch (error){
            res.json({
                "msg":error.message,
                "erro":true
            })
        }
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

    app.delete('/usuario/id/:id',(res,req)=>{
        const id = req.params.id
        usuarioDao.deletaUsuario(id)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })
    
    
}


export default userController
