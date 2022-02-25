const middleware = (app)=>{
    
// verifica se é o yago entrando
    app.use((req,res,next)=>{
        const body = req.body
        const head = req.headers
        console.log(head);
        if(body.nome === "Yago"){
            res.send("Otaku carecah")
        }else{
            console.log("passei pelo middleware")
            next()
        }
        
    })

// verifica que ta faltando a senha
    app.use((req,res,next)=>{
        const body = req.body
        if(body.senha){
            next()
        }else{
            res.json({
                "erro":true,
                "msg":"campo senha não encontraro",
                "conta":2+2
            })
        }
        
    })
    //verifica se tem a comida favorita e retorna o tamanho dela
    app.use((req,res,next)=>{
        const body = req.body
        if(body.comidaFavorita){
            for(let i = 0; i<body.comidaFavorita.length; i++){
                console.log(body.comidaFavorita[i]);
            }
            next()
        }else{
            res.json({
                erro:"erro, seu trouxa"
            })
            
        }
        
    })


}

export default middleware