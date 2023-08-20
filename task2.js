const fs = require('fs')
const path = require('path')

let arr = []
fs.readFile(path.join(__dirname, 'data', 'log.txt'), 'utf-8', (err, data) => {
    if (err) throw Error(err)
    arr = data.split("\n")
    arr.pop()
    // console.log(arr)
    

    // всего партий
    let all = arr.length
    console.log(`Всего было сыграно: ${all}`)


    // выигранных партий
    // let wins = arr.reduce((acc, cur) => {
    //     if (cur === "Win") {
    //         acc++
    //     }
    //     return acc
    // }, 0)
    let wins = arr.filter((elem) => elem === "Win").length
    console.log(`Выигранных матчей: ${wins}`)
    
    
    // проигранных партий
    // let loses = arr.reduce((acc, cur) => {
    //     if (cur === "Lose") {
    //         acc++
    //     }
    //     return acc
    // }, 0)
    let loses = arr.filter((elem) => elem === "Lose").length
    console.log(`Проигранных матчей: ${loses}`)
    

    // процентное соотношение выигранных партий
    console.log(`Процентное соотношение выигранных партий: ${Math.round(wins/all*100)}%`)
})