import calculadora from "../logica/calculadora.js";

test("Testar se 4 + 2 = 6",()=>{
    expect(calculadora.soma(4,2)).toBe(6)
})

test("Testar se 4 + 4 = 8",()=>{
    expect(calculadora.soma(4,4)).toBe(8)
})

test("Testar a função objeto",()=>{
    expect(calculadora.obj(4,2)).toMatchObject({a:4, b:2})
})

test("Testar o ehPar para impar", ()=>{
    expect(calculadora.ehPar(5)).toMatch("impar")
})

test("Testar o ehPar para par", ()=>{
    expect(calculadora.ehPar(4)).toMatch("par")
})