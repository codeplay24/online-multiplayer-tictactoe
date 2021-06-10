const http = require('http')
const express = require('express')
const Socket = require('socket.io')
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const map = {}

const app = express()
const server = http.createServer(app)
const io = Socket(server)


const excPath = path.join(__dirname,'/public')

const PORT = process.env.PORT || 5500

app.set('view engine', 'ejs')
app.use(express.static(excPath))

app.get('/' , (req,res)=>{
    res.render('home')
})

app.post('/create' , (req,res)=>{
    res.redirect(`/room/${uuidv4()}`)
})

app.post('/offline', (req,res)=>{
    res.redirect('/offlinegame')
})

app.get('/offlinegame', (req,res)=>{
    res.render('offlineGameBoard')
})
app.get('/room/:id', (req,res)=>{
    res.render('game', {roomId:req.params.id})
})

io.on('connection', (socket)=>{
    socket.on('join-room', (roomId)=>{
        socket.join(roomId)
        map[socket.id] = roomId
        socket.broadcast.to(roomId).emit('newJoinee', socket.id)
    })
    socket.emit('connected')
    socket.on('played', (row, col)=>{
        const roomId = map[socket.id]
        //socket.broadcast.emit('opponentPlayed', row,col)
        socket.broadcast.to(roomId).emit('opponentPlayed', row,col)
    })
    socket.on('opponent_refreshed', ()=>{
        const roomId = map[socket.id]
        socket.broadcast.to(roomId).emit('refresh')
    })
})

server.listen(PORT, ()=>{
    console.log('server running');
})