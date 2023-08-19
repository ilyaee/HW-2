const prompt = require("prompt-sync")();
const fs = require('fs')
const path = require('path')

let logFileDir
let logFileAddr = prompt("Введите адрес файла, в который вы хотите сохранять лог (можете просто нажать enter для сохранения в файл ../data/log.txt: ")

if (logFileAddr === "") {
    logFileAddr = path.join(__dirname, 'data', 'log.txt')
    logFileDir = path.join(__dirname, 'data')
} else {
    logFileDir = path.join(logFileAddr, '..')
}

fs.mkdir(logFileDir, (err) => {
    if (err) {
        if (err.code != "EEXIST") //ok если такая папка есть - продолжаем
            throw Error(err)
    }
})

console.log(`Логи будут сохранены в файл ${logFileAddr}`)

let isOk = new Boolean(true)
let a = Math.floor(Math.random() * 2) + 1
let turns = []

// console.log(a) // to delete

let inp = prompt(`Вам нужно отгадать число 1 или 2. Введите число: `)
turns.push(inp)
do {
    if (+inp === a) {
        console.log(`Вы угадали, это ${a}`)
        fs.appendFile(logFileAddr, `${JSON.stringify(turns)}\n`, (err) => {
            if (err) {
                throw Error(err)
            }            
        })
        isOk = false
    } else {
        inp = prompt(`Неверно, попробуйте отгадать еще раз: `)
        turns.push(inp)
    }
} while (isOk)