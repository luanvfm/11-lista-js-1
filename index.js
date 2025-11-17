/**** Escreva o código abaixo 👇******/
function somar(numero1, numero2) {
  soma = numero1 + numero2;
  return soma
}
function multiplicar(a, b) {
  multiplica = a * b;
  return multiplica
}
function subtrair(numero1, numero2) {
  subtrai = numero1 - numero2;
  return subtrai
}
function dividir(numero1, numero2) {
  if (numero2 === 0) {
    throw new Error("Erro: divisão por zero")
  }
  return numero1 / numero2
}

function calcularMedia(nota1, nota2, nota3, nota4) {
  media = (nota1 + nota2 +nota3 + nota4) / 4
  return media
}

function elevarPotencia(base, expoente) {
  resultado = Math.pow(base, expoente)
  return resultado
}

function calcularAreaRetangulo(largura, altura) {
  area = largura * altura
  return area
}
function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "par" : "ímpar"
}

function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero)
}

function calcularHipotenusa(cateto1, cateto2) {
  const n1 = elevarPotencia(cateto1, 2)
  const n2 = elevarPotencia(cateto2, 2)
  const soma = n1 + n2
  return Math.sqrt(soma)
}

/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
