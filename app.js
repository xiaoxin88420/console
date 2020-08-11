
// console.log (`My name is ${process.argv[2]} ${process.argv[3]} and my favorite movie is ${process.argv[4]}.`)

// const fs = require('fs')

// fs.writeFile('readme.md', 'Hi',(err) => {
//     if (err) { console.log (err) }

//     console.log('File Created!')

// })

// fs.appendFile('readme.md', '')

// const fs = require('fs') 
const inquirer = require('inquirer')
const Choices = require('inquirer/lib/objects/choices')
let comChoices = ['rock', 'paper', 'scissor']
let count = 0
let win = 0
let tie = 0
let lose = 0

const question = () => {

    let comChoice = comChoices[Math.floor(Math.random() * 3)]

    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: "Please choose 'rock', 'paper' or 'scissor'.",
            choices: ['rock', 'paper', 'scissor']
        }
    ])
        .then(answers => {
            // console.log(answers)
            switch (answers.choice) {
                case 'rock':
                    if (comChoice === 'rock') {
                        tie++
                    } else if (comChoice === 'paper') {
                        lose++
                    } else if (comChoice === 'scissor') {
                        win++
                    };
                    break;

                case 'paper':
                    if (comChoice === 'rock') {
                        win++
                    } else if (comChoice === 'paper') {
                        tie++
                    } else if (comChoice === 'scissor') {
                        lose++
                    };
                    break;

                case 'scissor':
                    if (comChoice === 'rock') {
                        lose++
                    } else if (comChoice === 'paper') {
                        win++
                    } else if (comChoice === 'scissor') {
                        tie++
                    };
                    break;

            }

            console.log(`You won ${win} times.`, `You tied ${tie} times.`, `You lost ${lose} times.`)
            count++
            if (count < 5) {
                question()
            }
        })

        .catch(err => {
            console.log(err)
        })

}

question()

// console.log(`You won ${win} times.`, `You tied ${tie} times.`, `You lost ${lose} times.`)