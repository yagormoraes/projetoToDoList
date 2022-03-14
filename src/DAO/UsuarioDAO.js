class UsuarioDAO{
    constructor(db){
        this.db = db
    }

    pegaTodosUsuarios = ()=>{
        return new Promise((resolve,reject)=>{
            this.db.all('SELECT * FROM USUARIOS', (error, rows)=>{
                if(error){
                    return({
                        "usuario":error.message,
                        "erro":true
                    })
                }else{
                    return({
                        "usuario":rows,
                        "erro":false
                    })
                }
            })
        })
    }

    insereUsuario = (novoUsuario)=>{
    
    }

    deletaUsuario = (id)=>{
    
    }
}

export default UsuarioDAO