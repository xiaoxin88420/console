
// console.log (`My name is ${process.argv[2]} ${process.argv[3]} and my favorite movie is ${process.argv[4]}.`)

// const fs = require('fs')

// fs.writeFile('readme.md', 'Hi',(err) => {
//     if (err) { console.log (err) }

//     console.log('File Created!')

// })

// fs.appendFile('readme.md', '')

// const fs = require('fs') 
// const inquirer = require('inquirer')
// const Choices = require('inquirer/lib/objects/choices')
// let comChoices = ['rock', 'paper', 'scissor']
// let count = 0
// let win = 0
// let tie = 0
// let lose = 0

// const question = () => {

//     let comChoice = comChoices[Math.floor(Math.random() * 3)]

//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'choice',
//             message: "Please choose 'rock', 'paper' or 'scissor'.",
//             choices: ['rock', 'paper', 'scissor']
//         }
//     ])
//         .then(answers => {
//             // console.log(answers)
//             switch (answers.choice) {
//                 case 'rock':
//                     if (comChoice === 'rock') {
//                         tie++
//                     } else if (comChoice === 'paper') {
//                         lose++
//                     } else if (comChoice === 'scissor') {
//                         win++
//                     };
//                     break;

//                 case 'paper':
//                     if (comChoice === 'rock') {
//                         win++
//                     } else if (comChoice === 'paper') {
//                         tie++
//                     } else if (comChoice === 'scissor') {
//                         lose++
//                     };
//                     break;

//                 case 'scissor':
//                     if (comChoice === 'rock') {
//                         lose++
//                     } else if (comChoice === 'paper') {
//                         win++
//                     } else if (comChoice === 'scissor') {
//                         tie++
//                     };
//                     break;

//             }

//             console.log(`You won ${win} times.`, `You tied ${tie} times.`, `You lost ${lose} times.`)
//             count++
//             if (count < 5) {
//                 question()
//             }
//         })

//         .catch(err => {
//             console.log(err)
//         })

// }

// question()

// console.log(`You won ${win} times.`, `You tied ${tie} times.`, `You lost ${lose} times.`)

// const axios = require('axios')
// const inquirer = require('inquirer')

// const question = () =>{

//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'favMovie',
//             message: 'What is your favorite movie?'
//         }
//     ])
//     .then(({favMovie}) =>{

        
//         axios.get(`${favMovie}`)
//             .then(({data}) =>{
//                 console.log(`
//                     ${data.Title}
//                     Directed by ${data.Director}
//                     ${data.Plot}
//                 `)
//             })
//             .catch(err =>{console.log(err)})
//     })
//     .catch(err =>{console.log(err)})
// }

function Game (name, producer) {
    this.name = name
    this.producer = producer
}

function Movie (name, year) {
    this.name = name
    this.year = year
}

function Music (name, performer) {
    this.name = name
    this.performer = performer
}

function Food (name, country) {
    this.name = name
    this.country = country
}


let aov = new Game('Arena of Valor', 'Tencent')
let chessRush = new Game('Chess Rush', 'Tencent')
let leagueoflegend = new Game('League of Legend', 'Tencent')

let thepersuitofhappiness = new Movie('The Persuit of Happiness', '2006')
let greenbook = new Movie('Green Book', '2018')
let interstellar = new Movie('Interstellar', '2014')

let acommeamour = new Music('A Comme Amour', 'Richard Clayderman')
let balladepouradeline = new Music('Ballade pour Adeline', 'Richard Clayderman')
let souveniersdenfance = new Music("Souvenirs d'Enfance", "Richard Clayderman")

let ramen = new Food ('Ramen', 'Japan')
let sushi = new Food ('Sushi', 'Japan')
let mapotofu = new Food ('Ma Po Tofu', 'China')

console.log(aov, chessRush, leagueoflegend, thepersuitofhappiness, greenbook, interstellar, acommeamour, balladepouradeline, souveniersdenfance, ramen, sushi, mapotofu)