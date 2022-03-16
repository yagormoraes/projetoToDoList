const soma = (a,b) => {return a+b}

const sub = (a,b) => {return a-b}

const obj = (a,b) =>{
    const objeto = {
        a:a,
        b:b,
    }
    return objeto
}

const ehPar = (numero) =>{
    if(numero%2 == 0){
        return "par"
    }else{
        return "impar"
    }
}

export default {soma, sub, obj, ehPar}