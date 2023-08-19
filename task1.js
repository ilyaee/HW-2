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
// let turns = []

// console.log(a) // to delete

let inp = prompt(`Вам нужно отгадать число 1 или 2. Введите число: `)
let yn
// turns.push(inp)
do {
    if (+inp === a) {
        // console.log(`Вы угадали, это ${a}`)
        fs.appendFile(logFileAddr, `Win\n`, (err) => {
            if (err) {
                throw Error(err)
            }            
        })
        yn = prompt(`Верно. Хотите попробовать еще раз? (y / n): `)
        if (yn === "y") {
            a = Math.floor(Math.random() * 2) + 1
            // console.log(a) //to delete
            inp = prompt(`Вам нужно отгадать число 1 или 2. Введите число: `)
        } else {
            console.log(`До свидания`)
            isOk = false
        }
    } else {
        fs.appendFile(logFileAddr, `Lose\n`, (err) => {
            if (err) {
                throw Error(err)
            }            
        })
        yn = prompt(`Неверно. Хотите попробовать еще раз? (y / n): `)
        if (yn === "y") {
            a = Math.floor(Math.random() * 2) + 1
            // console.log(a) //to delete
            inp = prompt(`Вам нужно отгадать число 1 или 2. Введите число: `)
        } else {
            console.log(`До свидания`)
            isOk = false
        }
        // turns.push(inp)
    }
} while (isOk)