/*

Metodologia ATER = Aula, Teoria, Exercicios e Revisão
Aula = Entender os conceitos em aula
Teoria = Consolidar a aula lendo a documentação ( MDN, W3Schools)
Exercicios = Realizar exercicios propostos.
Revisão = Revisar o conteúdo periódicamente para não esquecer.

*Tomar cuidado com o assincronismo - Estudar conceitos de recursos 
que exigem conhecimento prévio antes de possuir o mesmo.

**Comando Debugger - Pausa a lógica para verificar a mesma.




// ---------------------------------------------------------------------------------------------
// ------------------------------- STRING  -----------------------------------------------------
// ---------------------------------------------------------------------------------------------





Comparar strings sem distinção camelcase utilizar função para mudar para uppercase
antes da comparação. Ex:
*/

// const a = 'Texto'
// const b = 'texto'
// if(a.toUpperCase === b.toUpperCase) console.log('O texto é igual sem distinçao de Camelcase')

// let a = 'foo'
// let b = new String('foo')

// if(!(a===b)) console.log('Object String é diferente de string primitiva')

// if((a===b.valueOf())) console.log('Para testar estes dois tipos de Strings deve ser utilizado o ' +
// 'recurso valueOf')

// ** para tranformar a String Objeto para primitiva pode ser utilizado também o String.toString.

// console.log(' Para quebrar linhas \n detnro de exibição de um \n texto pode ser utilizado o \\n')

// let a = 'Metodos para quebrar linha dentro do VSCODE:' +
// ' "a" + "b" e também\
// \ assim'

// console.log(a)

let obj = new String("foo");
let a = "Esta é a primeira String";
let b = "Esta é a segunda String";
let c = ["Este", "é", "um", "array"];
let d = { texto1: "Este é", texto2: "é um", texto3: "Objeto" };
let num = 10;
let aux = "";

// O método array.join (' ') é utilizado para adicionar os elementos de um array para uma String.
// e = c.join(' ') // não funciona com objetos
// console.log(e)

// O método String.split retorna a String como array de acordo com o separador passado por (param).
// console.log(a.split(' '))

// O método String.raw exibe uma string sem a interpretação de código com a / por exemplo.  retorna a String.
// console.log(String.raw`C:\Development\profile\aboutme.html`)
// aux = String.raw`C:\Development\profile\aboutme.html`
// console.log(aux)

// O método String.at retorna a posição selecionada no (param) *Aceita valores negativos. ***Não funciona.k
// console.log(a.at(3))***Não funciona.

// O método String.charAt retorna a posição selecionada no (param). Retorna String com o caracter.
// console.log(a.charAt(3))

// O método String.includes verifica se o (param) está incluso na string, returna True or False.
// console.log(a.includes('p') , a.includes('P'))

// O método String.endWith verifica se a string termina com o (param), retorna True || False.
// console.log(a.endsWith('g') , a.endsWith('G'))

// O método String.startWith verifica se a string começa com o (param), retorna True || False.
// console.log(a.startsWith('E') , a.startsWith('e'))

// O método String.indexOf verifica o primeira posição do caracter passado por (param) Retorna um
// number com o número da posição
// console.log(a.indexOf('a'), a)

// O método String.lastIndexOf verifica a ultima posição do caracter passado por (param)
// console.log(a.lastIndexOf('a')) Retorna um number com o número da posição

// O método String.padStart adiciona o (param) no final até que somada com a String original atingir
// a quantidade passada por (param) Retorna a String Modificada.
// console.log(a.padEnd(30, '.'))

// O método String.padStart adiciona o (param) no começo até que somada com a String original atingir
// a quantidade passada por (param). Retorna a String Modificada.
// console.log(a.padStart(30, '.'))

// O método String.repeat repete o (param) a quantidade passada por (param).
// console.log(`Vou repetir a string 3 vezes: ${a.repeat(3)}`)

// O método String.replace substitui a primeira aparição na String desejada o segundo (param) pelo
//  primeiro (param). Retorna a String modificada .
// console.log(a.replace('primeira', 'quinta'))

// O método String.replaceAll substitui todas as aparições na String desejada o segundo (param) pelo
//  primeiro (param). Retorna a String modificada.
// console.log(a.replaceAll('a', 'e'))

// O método String.slice recupera uma parte da String de acordo com os (param), o primeiro (param) é o
// início e o segundo (param) é o fim da String que irá retornar, quando passado (param) negativo a
// recuperação começa do últ${imo indice.
// console.log(`${a.slice(0,6)} |  ${a.slice(-6)} | ${a.slice(-8,-1)} | ${a.slice(7)}`)

//O método String.toUpperCase retorna a String original com todas as letras maiúsculas.
// console.log(a.toUpperCase())

//O método String.toLowerCase retorna a String original com todas as letras minúsculas.
// console.log(a.toLowerCase())

// O método String.toString pode retornar um objeto new String para String primitiva, este método também
// pode retornar uma String com um Number com uma base diferente, como binário por exemplo caso passado 2
// passado como (param).
// console.log(num.toString(2), obj.toString())

// ---------------------------------------------------------------------------------------------
// ------------------------------- MATH && Number ----------------------------------------------
// ---------------------------------------------------------------------------------------------

let num1 = 10;
let num2 = 21.9283198;
let num3 = -33;
let num4 = "45";
let nan = NaN;
let null1 = null;
let arrNum = [1, 5, 32, -2, 4, 55, 621, -25, 82, 3];

// O método num.toFixed() retorna o valor da váriavel com as casas decimais limitadas de acordo
// com o número passado como (param). o número é retornado como String
// console.log(typeof Number(num2.toFixed(2)))

// O método Number.isInteger(num) testa se o (param) é um Integer e retorna True || False.
// console.log(Number.isInteger(num1), Number.isInteger(num2))

// O método Number.isNaN(num) testa se o (param) é um NaN(Not a Number) e retorna True || False.
// console.log(Number.isNaN(nan), Number.isNaN(num2), Number.isNaN(num4))

// Os métodos Number(), parseInt() e parseFloat() retornam a váriavel passada com (param) como Number,
// caso não seja possível a conversão, como no caso de um Texto, será retornado NaN.
// console.log(num4, Number(num4), parseInt(num4), parseFloat(num4), Number(a))

// O método estático Number.MAX_VALUE retorna o maior valor possível no JS

// O método Math.abs() retorna o valor absoluto do (param).
// console.log(Math.abs(num3), Math.abs(num4))

// O método Math.cbrt() retorna a raíz cúbica do (param).
// console.log(Math.cbrt(27))

// O método Math.sqrt() retorna a raíz quadrada do (param).
// console.log(Math.sqrt(9))

// Os métodos Math.round(), Math.ceil, Math.floor retornam o arredondamento do (param).
// -round: arredondamento de acordo com a regra matemática.
// -ceil: arredondamento para cima.
// -floor: arredondamento para baixo.
// console.log(num2, Math.round(num2), Math.ceil(num2), Math.floor(num2))

// O método Math.max retorna o maior número dos (param)
// console.log(Math.max(num1, num2, num3, num4))
// ** para realizar o teste com posições de um array seria necessário uma função como por Ex:
// console.log(arrNum.reduce((acc, num) => Math.max(acc, num), 0))

// O método Math.min retorna o menor número dos (param)
// console.log(Math.min(num1, num2, num3, num4))
// ** para realizar o teste com posições de um array seria necessário uma função como por Ex:
// console.log(arrNum.reduce((acc, num) => Math.min(acc, num),Number.MAX_VALUE))

// O método Math.pow retorna o (1º param) elevado a potência do (2º param)
// console.log(Math.pow(num1, 2))
// **** a potência de um número pode ser realizado também utilizando **
// console.log(num1 ** 2)

// O método Math.random retorna um valor aleatório entre 0 e 1 ( o 1 não incluso)
// console.log(Math.random())
// para determinar um range para o número random pode ser utilizado uma função com
// a formula (max-min) + min e para arredondar utilizar o num.toFixed
// let random = Math.random()
// const NumRandom = (max, min, value) => Number((value * (max - min) + min).toFixed())
// console.log(NumRandom(1, 10, random))

// ---------------------------------------------------------------------------------------------
// ------------------------------- ARRAY -------------------------------------------------------
// ---------------------------------------------------------------------------------------------

const auxArr = [];
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arrName = ["Felipe", "Luiz", "Pontes", "de", "Andrade"];

// o método length retorna o tamanho do array.
// console.log(arr1.length)

// o método pop retira o último indice do array, caso passado para uma variável o valor retirado é
// passado para a mesma.
// auxArr.push(arr1.pop());
// console.log(`arr1: ${arr1} -  auxArr: ${auxArr}`);

// O método push adiciona o (param) no final do array.
// arr1.push(6);
// console.log(arr1);

// o método shift retira o primeiro indice do array, caso passado para uma variável o valor retirado é
// passado para a mesma.
// auxArr.push(arr1.shift());
// console.log(`arr1: ${arr1} -  auxArr: ${auxArr}`);

// o método unshift adiciona o (param) no começo do array.
// arr1.unshift(6);
// console.log(arr1);

// o método delete remove um índice específico no array.
// delete arr1[2]
// console.log(arr1);

// ***NodeList !== array, porém é semelhante.
// array é valor por refeência, portanto mesmo que a variavel do array seja const os valores ainda podem ser
// alterados, pois a const é o endereço da variavel.

// método spread/rest serve para adicionar/separar os valores do array
// arr1.push(...arr2)
// console.log(arr1);

// [primeiro, segundo, terceiro, quarto, quinto] = [...arr1]
// console.log(primeiro, segundo, terceiro, quarto, quinto)

// o método splice pode adicionar, remover índices de acordo com (param) que são (start, deleteCount, item1,
// itemN),
// somente o start é obrigatório.
// com somente o start ele modificao array original de acordo com o (param) e caso passado para uma variável
// o valor
// retirado é passado para a mesma.
// auxArr.push(arr1.splice(-1))
// console.log(`arr1: ${arr1}, auxArr: ${auxArr}`)
// auxArr.push(arr2.splice(1))
// console.log(`arr2: ${arr2}, auxArr: ${auxArr}`)
// const nameRemoved = arrName.splice(2,1)
// console.log(`arrName: ${arrName} - nameRemoved: ${nameRemoved}`)
// arr1.splice(arr1.length, 0, ...auxArr)
// console.log(`arr1: ${arr1}, auxArr: ${auxArr}`)

// O método indexOf retorna o indice do que foi passado como (param)
// console.log(arr2.indexOf(8))

// O método slice retorna o array com range passado como (param)
// auxArr.push(arr1.slice())
// auxArr.push(arr2.slice(1,3))
// console.log(auxArr)

// o metodo forEach itera um array, percorrendo todos os indices do array conforme função anonima passada
// como (param)
// arr1.forEach((item, indice, array) => console.log(`item: ${item}, indice: ${indice}, array: ${array}`))

// além do forEach existem outras formas para iterar um array.

// forin itera o array de acordo com seu tamanho e pode utilizar o indice para acessar seus valores
// for(const i in arr1){
//     console.log(arr1[i])
// }

// forof itera o array de acordo com seu tamanho e acessa seus valores diretamente.
// for(const num of arr2){
//     console.log(num)
// }

// e então temos o filter, map e reduce que fazem a iteração em arrays de formas bem específicas 
// e de alguma forma se complementam

// o map pode receber 3 (param) element, index e array, porém somente o element é obrigatório, 
// este método retorna um array com o mesmo tamanho do original com seus valores atualizados 
// de acordo com a função passada, esta função pode ser anõnima ou de callback.
let auxArr1
// auxArr1 = arr1.map((num, indice, array) => [indice, num*2, array])
// console.log(auxArr1)
// auxArr1.forEach(item => console.log(`indice: ${item[0]}, valor: ${item[1]}, array: ${item[2]}`))

// o filter pode receber 3 (param) element, index e array, porém somente o element é obrigatório, 
// este método retorna um array com mesmo tamanho ou menor do que o original, visto que os valores
// do array podem ou não atender o filtro passado como para a função.
// auxArr1 = arr1.filter((num, indice, array) => {
//     console.log(num, indice, array)
//     return num % 2 === 0
// })
// console.log(auxArr1)

// o reduce pode receber 5 (param) previusValue, currentValue, index, array e initialValue sendo 
// obrigatório somente os 2 primeiros, este método retorna um dado de acordo com o passado como
// valor inicial ou valores do array
// auxArr1 = arr1.reduce((accumulator, num, index, array) => {
//     console.log(accumulator, num, index, array)
//     return accumulator + num;
// }, 0)

// console.log(auxArr1)

// como mencionado os 3 podem se complementar.

// auxArr1 = arr1.filter(num => num % 2 === 0).map(num => num * 2).reduce((ac, num) => ac + num, 0)
// console.log(auxArr1)




// ---------------------------------------------------------------------------------------------
// ------------------------------- FUNCTION ----------------------------------------------------
// ---------------------------------------------------------------------------------------------

// passar um (param) atribuindo um valor faz com que esse valor seja padrão para quando este
// argumento não receber um valor quando a função foi executada.
// const func = ( n=2 ) => { console.log(n) }
// func(3)
// func()

// Quandos estiver trabalhando no formado procedural é recomendado emglobar todo o código dentro
// de uma função para evitar o escopo global.

// a declaração function(){} sofre hoisting, portanto podem ser utilizadas antes da declaração.
// em hoisting somente a declaração sofre elevação, o valor não.

// argumentos passados como (param) sem serem declarados no escopo podem ser acessados pelo
// atributo arguments. *** arrow func não pode usar o arguments ***
// function func () {
//   let total = 0;
//   for(argumento of arguments){
//       total += argumento
//   }
//   console.log(total);
// };

// no caso da array func é necessário usar o rest para armazenar os (param) não declarados e caso 
// a função possua (param) declarados o rest precisa ser o último (param)
// const func = ( ...args) => {
//     let total = 0;
//     for(arg of args){
//         total += arg
//     }
//     console.log(total, typeof args)
// }
// // Ambos (rest e arguments) ~ são do tipo Object.

// func(1, 2, 3, 4, 5);
// func(10, 20, 3, 1);

// O destructuring tanto de objetos com o array podem ser utilizados como (param) de uma função
// const func = ([primeiro,segundo]) => {
//     console.log(primeiro+segundo)
// }
// func(arr1)

// Closure functions são funções que retornam outras funções para usos específicos. a primeira chamada da
// função se refere a função mais externa, depois 1 nível mais interno e assim consecutivamente até o último
// return que não for uma função.
// const func = (x) => {
//     return function(y) {
//         return function(z) {
//             return x + y + z
//         }
//     }
// }
// const add5 = func(5)
// const add7 = add5(7)
// console.log(add7(10))

// IIFE é a função que se auto-executa no momento de sua declaração.
// (function( n=2 ){console.log(n)}())
// !function( n=2 ){console.log(n)}()

// Em uma função, quando se utilizado o "this" há uma diferença com as notações arrow func e a function(){}
// na notação arrow func o "this" preserva o escopo global do objeto que ela está já na segunda notação o 
// "this" vai mudar conforme a função se torna mais interna.

// const buttonEL = document.querySelector('#enviar')
// console.log(buttonEL)
// buttonEL.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log(`arrow function: ${this}`)
// })
// buttonEL.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(`function(){}: ${this}`)
// })

// para preservar o contexto do this mesmo com functions mais internas é necessário o .bind

// function func(e) {
//     e.preventDefault();
//     console.log(`function(){}: ${this}`)
// }
// const funcBind = func.bind(window)

// buttonEL.addEventListener('click', funcBind)



// ---------------------------------------------------------------------------------------------
// ------------------------------- Lógica ------------------------------------------------------
// ---------------------------------------------------------------------------------------------


