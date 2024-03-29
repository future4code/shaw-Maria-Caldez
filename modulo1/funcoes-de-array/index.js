// Exercícios de interpretação de código

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//   a) O que vai ser impresso no console?
// Vai aparecer 3 arrays titulados com o mesmo nome de cada objeto e dentro de cada array
// os mesmos objetos internos do array original


// 2

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//   a) O que vai ser impresso no console?
// Vai aparecer 1 array listando 3 elementos titulados com o nome dos objetos que compõem o 
// array original



// 3

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// a) O que vai ser impresso no console?
// Vai aparecer os dois objetos que não tem apelido "Chijo"


// EXERCÍCIOS DE ESCRITA

// 1

// Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações 
// pedidas nos itens abaixo utilizando as funções de array map e filter:


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

const arrayNomesDog = pets.map((pet) => {
    return pet.nome
})

console.log(arrayNomesDog)

// b) Crie um novo array apenas com os cachorros salsicha

const arraySalsichas = pets.filter((pet) => {
    return pet.raca === "Salsicha"
}).map ((pet) => {
    return pet
})

console.log(arraySalsichas)


// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que 
// são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


const arrayPoodles = pets.filter((pet) => {
    return pet.raca === "Poodle"
}).map ((pet) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})

console.log(arrayPoodles)



// 2

// Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo
//  utilizando as funções de array map e filter:


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


//  a) Crie um novo array que contenha apenas o nome de cada item

const arrayNomeProdutos = produtos.map((item) => {
    return item.nome
})
console.log(arrayNomeProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 
// 5% de desconto em todos eles

const arrayDesconto = produtos.map((item) => {
      
      return {
        nome: item.nome,
        preco: (item.preco * 0.95).toFixed(2)}

})

console.log(arrayDesconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const arrayBebidas = produtos.filter ((item) => {
    return item.categoria === "Bebidas"
})

console.log(arrayBebidas)


// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const produtoYpe = produtos.filter ((item) => {
    if (item.nome.includes ("Ypê")){
        return item
    }
})

console.log(produtoYpe)


// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases
//  apenas dos itens cujo nome contenha a palavra "Ypê"

const fraseYpe = produtos.filter ((item) => {
    if (item.nome.includes ("Ypê")){
        return item
    }
}).map ((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})

console.log(fraseYpe)


// DESAFIOS

// Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//  a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética  sort()


const pokemonsNomes = pokemons.map((pokemon) => {
    return pokemon.nome
}).sort()

console.log(pokemonsNomes)


// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

const arrayTipos = pokemons.map((pokemon) => {
    return pokemon.tipo
})

const novoArray = new Set(arrayTipos)
const arraySemRepetir = [...novoArray]

console.log(arraySemRepetir)    








