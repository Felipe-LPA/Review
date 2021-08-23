// const curiosidades_chuck_norris = [
//     { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},
//     { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
//     { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
//     { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
//     { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
//     { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},
//     { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},
//     { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
//     { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
//     { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."}
// ];


// const curiosidade =  Math.floor(Math.random() * curiosidades_chuck_norris.length)

// console.log('CURIOSIDADE SOBRE CHUCK NORRIS')
// console.log(`Titulo: ${curiosidades_chuck_norris[curiosidade].titulo}`)
// console.log(`Conteúdo: ${curiosidades_chuck_norris[curiosidade].conteudo}`)

// var colecao_jogos = [

//     { titulo: "The Legend of Zelda: Ocarina of Time",   plataforma: "Nintendo Switch" },
//     { titulo: "State of Decay",                         plataforma: "Xbox One" },
//     { titulo: "Mario Kart 8 Deluxe",                    plataforma: "Nintendo Switch" },
//     { titulo: "Quantum Brake",                          plataforma: "Xbox One" },
//     { titulo: "Forza Horizon 4",                        plataforma: "Playstation 4" },
//     { titulo: "Horizon Zero Dawn",                      plataforma: "Playstation 4" }
// ];

// console.log(colecao_jogos);

// console.log(colecao_jogos.length);

// var notas_aluno =
//  [
//     7, 6, 8, 5
// ];

// var total_notas = notas_aluno.length
// ;

// var soma_notas =
//  notas_aluno[0] + notas_aluno[1] + notas_aluno[2] 
// + notas_aluno[3]
// ;

// var media_aluno = soma_notas / total_notas
// ;

// console.log("Média do aluno: " 
// + media_aluno
// );

// var signos = [
//     { nome: "Aquário",       descricao: "Inovação, originalidade e independência" },
//     { nome: "Peixes",        descricao: "Solidariedade, intuição e desapego" },
//     { nome: "Áries",         descricao: "Espontaneidade, coragem e energia" },
//     { nome: "Touro",         descricao: "Persistência, sensualidade e teimosia" },
//     { nome: "Gêmeos",        descricao: "Curiosidade, inteligência e liberdade" },
//     { nome: "Câncer",        descricao: "Sensibilidade, carinho e família" },
//     { nome: "Leão",          descricao: "Criatividade, autoestima e nobreza" },
//     { nome: "Virgem",        descricao: "Objetividade, humanidade e organização" },
//     { nome: "Libra",         descricao: "Vaidade, empatia e diplomacia" },
//     { nome: "Escorpião",     descricao: "Intensidade, mistério e intuição" },
//     { nome: "Sagitário",     descricao: "Otimismo, liberdade e movimento" },
//     { nome: "Capricórnio",   descricao: "Responsabilidade, ambição e persistência"}
//   ];


//   var signo = {
//     nome: "Gêmeos",
//     descricao: "Curiosidade, inteligência e liberdade"
//   };

//   console.log(signos[11].descricao)
//   console.log(signo.nome)

//Declaração da constante nome
// const nome ='';

// //Aqui é verificado se o nome possui ao menos um caractere
// //Retorna true se possuir e false caso contrário
// const nomeValido = nome.length > 0;

// //Imprime o nome no console se for diferente de vazio
// nomeValido && console.log(nome);

// let produto = "sofá";

// let retorno = (produto == "Geladeira") ? "desconto" : "normal"

// console.log(retorno)
// let status = 2;

// if(status === 1)
//  {
//     console.log("Carro novo");
// }
// else if(status === 0)
//  {
//     console.log("Carro usado");
// }
// else
//  {
//     console.log("Nenhum carro");
// }
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// let resultado = false;
// let msg = "";

// msg = resultado && "Classificado";
// console.log(msg);

// console.log(5 + null);

// console.log(null + false);

// console.log(true + null);


// let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

// let percentual_desconto = 5;

// for(propriedade in carro) {

//     if (propriedade === 'preco') {

//         let preco = propriedade;

//         let desconto = ( carro[preco] * percentual_desconto ) / 100;

//         let novo_preco = carro[preco] - desconto;

//         console.log("novo preço: R$" + novo_preco + ",00 ");

//     } else {

//         console.log(propriedade + ": " + carro[propriedade]);

//     }
// }

// let produtos = [
//     { id: 1, nome: "pizza", preco: 50 },
//     { id: 2, nome: "macarronada", preco: 25 },
//     { id: 3, nome: "lasanha", preco: 45 },
//     { id: 4, nome: "nhoque", preco: 30 }
// ];

// let desconto = 5;

// for (let contador = 0; contador <= produtos.length; contador++) {

//     let produto = produtos[contador];


//     for (propriedade in produto) {

//         if (propriedade == "preco") {

//             let preco = propriedade;

//             let novo_preco = produto[preco] - desconto;

//             console.log("preço atualizado: R$" + novo_preco + ",00");

//         } else {

//             console.log(propriedade + ": " + produto[propriedade]);
//         }

//     }

//     console.log("\n");
// }

// let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

// for ( let dados in aluno ) {
//     console.log(aluno[dados]);
// }

// let total_alunos = alunos.length
// ;
// let produtos_array = [
//     { id: 1, nome: "mouse", preco: 50 },
//     { id: 2, nome: "teclado", preco: 90 },
//     { id: 3, nome: "monitor", preco: 350 },
//     { id: 4, nome: "nobreak", preco: 600 }
// ];

// let percentual_desconto = 10;

// for(let produto of produtos_array){

//     let nome = produto.nome
// ;
//     let preco = 
// produto.preco
// ;

    
// let valor_desconto
//  = (preco * percentual_desconto) / 100;
    
// let novo_preco = preco - valor_desconto
// ;

//     console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");

// }

// let produtos_array = [
//     { id: 1, nome: "mouse", preco: 50 },
//     { id: 2, nome: "teclado", preco: 90 },
//     { id: 3, nome: "monitor", preco: 350 },
//     { id: 4, nome: "nobreak", preco: 600 },
// ];

// let percentual_desconto = 10;

// for ( let produto of produtos_array ) {

//     let nome = produto.nome;
//     let preco = produto.preco;

//     let valor_desconto = (preco * percentual_desconto) / 100;
//     let novo_preco = preco - valor_desconto;

//     console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");

// }

// let disciplinas = [
//     { id: 1, nome: "português", carga_horaria: 250 },
//     { id: 2, nome: "matemática", carga_horaria: 220 },
//     { id: 3, nome: "história", carga_horaria: 150 },
//     { id: 4, nome: "geografia", carga_horaria: 150 },
//     { id: 5, nome: "inglês", carga_horaria: 70 }
// ];

// for(let disciplina of disciplinas) {

//     let id_disciplina = disciplina.id;
//     let nome_disciplina = disciplina.nome;
//     let carga_horaria_disciplina = disciplina.carga_horaria;

//     console.log("Id da disciplina: " + id_disciplina );
//     console.log("Nome da disciplina: " + nome_disciplina );
//     console.log("Carga horária da disciplina: " + carga_horaria_disciplina );

//     console.log("\n");

// }

// let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

// let percentual_desconto = 5;

// for ( let propriedade in carro ) {

//     if ( propriedade == "preco" ) {

//         let preco = propriedade;

//         let desconto = (carro.preco * percentual_desconto ) / 100;

//         let novo_preco = carro.preco - desconto;

//         console.log("novo preço: R$" + novo_preco + ",00");

//     } else {

//         console.log(propriedade + ": " + carro[propriedade]);

//     }

// }

// const celsius_fahrenheit = temperatura_celsius => {

//     let temperatura_fahrenheit = temperatura_celsius * 1.8 + 32;
//     return temperatura_fahrenheit;
// }


// let temperatura_celsius = 12;
// const temperatura_fahrenheit = celsius_fahrenheit(temperatura_celsius);

// console.log(temperatura_celsius + "°C equivalem a " + temperatura_fahrenheit + "°F")


// const data1 = new Date(2019, 0, 1);
// const data2 = new Date(2019, 0, 1);

// console.log(data1.getTime() == data2.getTime())
// console.log(data1.getTime())

// class Carro {
//     constructor(nome, marca, velMax){
//         this.nome = nome;
//         this.marca = marca;
//         this.velMax = velMax;
//     }
//     acelerar = who =>{
//         console.log(`${who} acelerou o ${this.nome} até a velocidade ${this.velMax}`);
//     }
// }

// let array1 = ['Pedro','Antonio','Marcelo'];

// const carro = new Carro('Uno', 'Fiat', '100km/h');

// array1.map(carro.acelerar);

// console.log(new Date());

const chuvasDeMeteoros = [
    { nome: 'Alfa Centaurídeos',            inicio: '01/28', fim: '02/21', pico: 'Fev 8',   ascencao: 210,  declinacao: -59,  velocidade: 56, thz: '6',        intensidade: 'Média'},
    { nome: 'Gama Normídeos',               inicio: '02/25', fim: '03/22', pico: 'Mar 14',  ascencao: 239,  declinacao: -50,  velocidade: 56, thz: '6',        intensidade: 'Média'},
    { nome: 'Pi Pupídeos',                  inicio: '04/15', fim: '04/28', pico: 'Abr 23',  ascencao: 110,  declinacao: -45,  velocidade: 18, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Líridas',                      inicio: '04/16', fim: '04/25', pico: 'Abr 22',  ascencao: 271,  declinacao:  34,  velocidade: 49, thz: '18',       intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Eta Aquáridas',                inicio: '04/19', fim: '05/28', pico: 'Mai 5',   ascencao: 338,  declinacao:  -1,  velocidade: 66, thz: '65',       intensidade: 'Forte com meteoros muito rápidos e de grande comprimento'},
    { nome: 'Bootídeos de Junho',           inicio: '06/28', fim: '06/28', pico: 'Jun 28',  ascencao: 224,  declinacao:  48,  velocidade: 18, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Capa Cignídeos',               inicio: '08/03', fim: '08/26', pico: 'Ago 17',  ascencao: 286,  declinacao:  59,  velocidade: 25, thz: '3',        intensidade: 'Fraca com velocidades médias e brilhantes'},
    { nome: 'Táuridas do Sul',              inicio: '09/10', fim: '11/20', pico: 'Out 10',  ascencao: 32,   declinacao:   9,  velocidade: 27, thz: '5',        intensidade: 'Fraca'},
];

const dataAtual = new Date();

const verificaProximaChuva = (chuva, data) => {
    const anoAtual = data.getFullYear();
    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataInicioLimite = new Date(data);
 
     if ( data.getMonth() > dataInicio.getMonth() ) {
         const anoFinal = dataInicio.getFullYear();
         dataInicio.setFullYear(anoFinal +1);
     }

     dataInicioLimite.setMonth( dataInicioLimite.getMonth() + 2 );
    
     return ( data < dataInicio && dataInicio < dataInicioLimite);
 }

 const chuvasVisiveis = chuvasDeMeteoros.filter( (chuva)=> verificaProximaChuva(chuva, dataAtual) );

 console.log(chuvasVisiveis);