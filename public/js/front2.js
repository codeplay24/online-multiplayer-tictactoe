const cell00 = document.getElementById("cell00")
const cell01 = document.getElementById("cell01")
const cell02 = document.getElementById("cell02")
const cell10 = document.getElementById("cell10")
const cell11 = document.getElementById("cell11")
const cell12 = document.getElementById("cell12")
const cell20 = document.getElementById("cell20")
const cell21 = document.getElementById("cell21")
const cell22 = document.getElementById("cell22")
const gamedone = document.getElementById('game-over')
const refresh = document.getElementById('refresh-button')

let HITS = 0;
let chg00 = false
let chg01 = false
let chg02 = false
let chg10 = false
let chg11 = false
let chg12 = false
let chg20 = false
let chg21 = false
let chg22 = false
let gameover = false

let matrix = [['','',''],['','',''],['','','']]

const cell00Event = ()=>{
    if(chg00 || gameover){
        return
    }
    
    //console.log(playedOnce);
    chg00 = true
    let char = 'X'
    if(HITS%2===0){
        char = "X"
    }else{
        char = "O"
    }
    cell00.innerHTML = "<h1>"+char+"</h1>"
    matrix[0][0] = char
    if(check(0,0)){
        killTheGame()
    }
    
    HITS = HITS+1
}
const cell01Event = ()=>{
    if(chg01 || gameover){
        return
    }
    
    chg01 = true
    let char = 'X'
    if(HITS%2===0){
        char = "X"
    }else{
        char="O"
    }
    cell01.innerHTML = "<h1>"+char+"</h1>"
    matrix[0][1] = char
    if(check(0,1)){
        killTheGame()
    }
    
    HITS = HITS+1
}
const cell02Event = ()=>{
    if(chg02 || gameover){
        return
    }
    chg02 = true
    let char = 'X'
    if(HITS%2===0){
        char = "X"
    }else{
        char="O"
    }
    cell02.innerHTML="<h1>"+char+"</h1>"
    matrix[0][2] = char
    if(check(0,2)){
        killTheGame()
    }
    HITS = HITS+1
}
const cell10Event = ()=>{
    if(chg10 || gameover){
        return
    }
    chg10 = true
    let char = 'X'
    if(HITS%2===0){
        char = "X"
    }else{
        char="O"
    }
    cell10.innerHTML = "<h1>"+char+"</h1>"
    matrix[1][0] = char
    if(check(1,0)){
        killTheGame()
    }
    HITS = HITS+1
}
const cell11Event = ()=>{
    if(chg11 || gameover){
        return
    }
    chg11 = true
    let char = 'X'
    if(HITS%2===0){
        char = "X"
    }else{
        char="O"
    }
    cell11.innerHTML = "<h1>"+char+"</h1>"
    matrix[1][1] = char
    if(check(1,1)){
        killTheGame()
    }
    HITS = HITS+1
}
const cell12Event = ()=>{
    if(chg12 || gameover){
        return
    }
    chg12 = true
    let char = 'X'
    if(HITS%2===0){
        char = "X"
    }else{
        char="O"
    }
    cell12.innerHTML = "<h1>"+char+"</h1>"
    matrix[1][2] = char
    if(check(1,2)){
        killTheGame()
    }
    HITS = HITS+1
}
const cell20Event = ()=>{
    if(chg20 || gameover){
        return
    }
    chg20 = true
    let char = 'X'
    if(HITS%2===0){
        char = "X"
    }else{
        char="O"
    }
    cell20.innerHTML = "<h1>"+char+"</h1>"
    matrix[2][0] = char
    if(check(2,0)){
        killTheGame()
    }
    
    HITS = HITS+1
}
const cell21Event = ()=>{
    if(chg21 || gameover){
        return
    }
    chg21 = true
    let char = 'X'
    if(HITS%2===0){
        char = "X"
    }else{
        char="O"
    }
    cell21.innerHTML = "<h1>"+char+"</h1>"
    matrix[2][1] = char
    if(check(2,1)){
        killTheGame()
    }
    
    HITS = HITS+1
}
const cell22Event = ()=>{
    if(chg22 || gameover ){
        return
    }
    chg22 = true
    let char = 'X'
    if(HITS%2===0){
        char = "X"
    }else{
        char="O"
    }
    cell22.innerHTML = "<h1>"+char+"</h1>"
    matrix[2][2] = char
    if(check(2,2)){
        killTheGame()
    }
    HITS = HITS+1
}

const check = (row,col)=>{
    if(rowCheck(row)){
        return true
    }
    if(colCheck(col)){
        return true
    }
    if((row===0 && col===0) || (row===2 && col===2)){
        if(lDig()){
            return true
        }
    }
    if((row===0 && col===2) || (row===2 && col===0)){
        if(rDig()){
            return true
        }
    }
    if(row===1 && col===1){
        if(lDig()){
            return true
        }
        if(rDig()){
            return true
        }
    }
    return false
}

const rowCheck = (row)=>{
    let char = matrix[row][0]
    for(let i=0; i<3; i++){
        if(matrix[row][i]!=char){
            return false
        } 
    }
    return true
}

const colCheck = (col)=>{
    let char = matrix[0][col]
    for(let i=0; i<3; i++){
        if(matrix[i][col]!=char){
            return false
        }
    }
    return true
}

const lDig = ()=>{
    if(matrix[0][0]==matrix[1][1] && matrix[1][1]==matrix[2][2]){
        return true
    }
    return false
}

const rDig = ()=>{
    if(matrix[0][2]==matrix[1][1] && matrix[1][1]==matrix[2][0]){
        return true
    }
    return false
}

const killTheGame = ()=>{
    
    gameover = true
    gamedone.style.width = "300px"
    gamedone.style.left = "-13px"
    gamedone.innerHTML = "<h1 style='color:green;'>SOMEONE WON !!!</h1>"
    
}

const refreshMethod = (opponentRefreshed)=>{
    matrix = [['','',''],['','',''],['','','']]
    cell00.innerHTML = "<h1></h1>"
    cell01.innerHTML = "<h1></h1>"
    cell02.innerHTML = "<h1></h1>"
    cell10.innerHTML = "<h1></h1>"
    cell11.innerHTML = "<h1></h1>"
    cell12.innerHTML = "<h1></h1>"
    cell20.innerHTML = "<h1></h1>"
    cell21.innerHTML = "<h1></h1>"
    cell22.innerHTML = "<h1></h1>"
    gamedone.innerHTML = "<h1></h1>"
    chg00 = false
    chg01 = false
    chg02 = false
    chg10 = false
    chg11 = false
    chg12 = false
    chg20 = false
    chg21 = false
    chg22 = false
    gameover = false
    HITS = 0
    
}

cell00.addEventListener('click', cell00Event)
cell01.addEventListener('click', cell01Event)
cell02.addEventListener('click', cell02Event)
cell10.addEventListener('click', cell10Event)
cell11.addEventListener('click', cell11Event)
cell12.addEventListener('click', cell12Event)
cell20.addEventListener('click', cell20Event)
cell21.addEventListener('click', cell21Event)
cell22.addEventListener('click', cell22Event)


//ROOM ID SENT FROM SERVER TO THE EJS HANDLEBARS




