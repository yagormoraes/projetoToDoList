
class UsuarioDAO{
    constructor(db){
        this.db = db
    }

    pegaTodosUsuarios = ()=>{
        return new Promise((resolve,reject)=>{
            this.db.all('SELECT * FROM USUARIOS', (error, rows)=>{
                if(error){
                    reject({
                        "usuario":error.message,
                        "erro":true
                    })
                }else{
                    resolve({
                        "usuario":rows,
                        "erro":false
                    })
                }
            })
        })
    }

    insereUsuario = (novoUsuario)=>{
       return new Promise((resolve,reject)=>{
           this.db.run("INSERT INTO USUARIOS(NOME, EMAIL, SENHA) VALUES (?, ?, ?)",
           novoUsuario.nome, novoUsuario.email, novoUsuario.senha,
           (error)=>{
               if(error){
                   reject({
                       "mensagem":error.message,
                       "erro":true
                   })
               }else{
                   resolve({
                       "mensagem":`Usuário ${novoUsuario.nome} inserido com sucesso`,
                       "usuario":novoUsuario,
                       "erro":false
                   })
               }
           })
       })
    }

    deletaUsuario = (id)=>{
        return new Promisse((resolve,reject)=>{
            this.db.run("DELETE FROM USUARIOS WHERE ID = ?",
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "usuario": `Usuario de ID ${id} deletado com sucesso`,
                        "erro": false
                    })
                }
            })
        })
    }
}

export default UsuarioDAO