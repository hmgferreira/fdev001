const n1 = 0;
const n2 = 0;
let resultado = null;
try {
    if(n1 === 0 || n2 === 0) {
        throw "Nao podemos dividir zero";
    }
    resultado = n1 / n2;

    // LINHA QUE GRAVA NO BANCO
}catch(e) {
    console.log(e);
} finally {
    console.log(resultado);
}