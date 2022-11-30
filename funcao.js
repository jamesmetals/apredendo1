/* funcao e um codigo indepedente, que so sera executado 
quando eu quiser, ele nao sera lido na hora da
execucao do codigo*/

function somar (n1, n2){
    let resultado = n1 + n2
    console.log('resultado '+ resultado)
}
somar(10, 20)

//exercicio

function multiplicar(numero1, numero2){
    let resultado = numero1 * numero2;
    console.log('sua multiplicacao e ' + resultado )
}
multiplicar(2, 10)

function expressao(m, d, s, sb){
    let expressaoNumerica = m * d / s - sb;
    console.log('sua expressao numerica resulta em: '+  expressaoNumerica);
}
expressao(
2, 10, 6, 3
)