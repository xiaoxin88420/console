const inquirer = require('inquirer')
const fs = require('fs')
const Choices = require('inquirer/lib/objects/choices')

function Character(name, hp, mp, weapon) {
    this.name = name
    this.hp = hp
    this.mp = mp
    this.weapon = weapon
}

function Wizard(name, hp, mp, weapon, elemtype, sommonname) {
    Character.call(name, hp, mp, weapon)
    this.elemtype = elemtype
    this.sommonname = sommonname
}

function Soldier(name, hp, mp, weapon, rankname, bannername) {
    Character.call(name, hp, mp, weapon)
    this.rankname = rankname
    this.bannername = bannername
}

function Assassin(name, hp, mp, weapon, stealth, poison) {
    Character.call(name, hp, mp, weapon)
    this.stealth = stealth
    this.poison = poison
}

const question = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Hero, we need your help to save the world. Tell me what character would you like to be?',
            choices: ['Wizard', 'Soldier', 'Assassin']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's your hero's name?"
        },
        {
            type: 'input',
            name: 'hp',
            message: "What's your hero's Hit Point(hp)?"
        },
        {
            type: 'input',
            name: 'mp',
            message: "What's your hero's Magic Point(mp)?"
        },
        {
            type: 'input',
            name: 'weapon',
            message: "What's your hero's weapon?"
        },
    ])
        .then(res => {
            if (res.choice === 'Wizard') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'elemtype',
                        message: "What's your weapon's Element Type?"
                    },
                    {
                        type: 'input',
                        name: 'sommonname',
                        message: "What's the name of your sommons?"
                    },
                ])
                .then(wizanswer => {
                    let wizChar = new Wizard(res.name, res.hp, res.mp, res.weapon, wizanswer.elemtype, wizanswer.sommonname)
                    console.log(wizChar)                    
                })
                .catch(err => { console.log(err) })


            }   else if (res.choice === 'Soldier') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'rankname',
                        message: "What's your rank name?"
                    },
                    {
                        type: 'input',
                        name: 'bannername',
                        message: "What's your banner name?"
                    },
                ])
                .then(solanswer => {
                    let solChar = new Soldier(res.name, res.hp, res.mp, res.weapon, solanswer.rankname, solanswer.bannername)
                    console.log(solChar)
                })
                .catch(err => { console.log(err) })


            }   else if (res.choice === 'Assassin') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'stealth',
                        message: "What's your stealth skill?"
                    },
                    {
                        type: 'input',
                        name: 'poison',
                        message: "What's your poison name?"
                    },
                ])
                .then(assanswer => {
                    let assChar = new Assassin(res.name, res.hp, res.mp, res.weapon, assanswer.stealth, assanswer.poison)
                    console.log(assChar)
                })
                .catch(err => { console.log(err) })
            }


        })
        .catch(err => { console.log(err) })
}

question ()