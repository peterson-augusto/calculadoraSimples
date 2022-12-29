const entrada1 = prompt('Insira um número: ')
const entrada2 = prompt('Insira outro número: ')

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
    'Resultado:\n' +
    '\nA soma entre ' + x + ' e ' + y + ' é igual a ' + soma + '.' +
    '\nA subtração entre ' + x + ' e ' + y + ' é igual a ' + subtracao + '.' +
    '\nA multiplicação entre ' + x + ' e ' + y + ' é igual a ' + multiplicacao + '.' +
    '\nA divisão entre ' + x + ' e ' + y + ' é igual a ' + divisao
)