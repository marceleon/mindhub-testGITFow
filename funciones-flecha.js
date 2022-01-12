let suma = (a, b) =>  a+b;
let resta = (a, b) => a-b;
let multi = (a, b) => a*b;
let divi = (a, b) => a/b;

let operacion = (a,b,f) => {
    console.log(`Operacion ${f.name} de ${a} y ${b} da: ${f(a,b)}`);
}

operacion(3,7,suma);
operacion(3,7,resta);
operacion(3,7,multi);
operacion(3,7,divi);
operacion(3,0,divi);
