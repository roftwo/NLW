const proffys = [
    {name:"diego",
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:"5465465",
    bio:"bla bla bla",
    subject:"quimica",
    cost:"20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
    },
    {name:"dani",
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:"5465465",
    bio:"bla bla bla",
    subject:"quimica",
    cost:"20",
    weekday: [3],
    time_from: [720],
    time_to: [1220]
    }
]


const express = require('express')
const server = express()

server.use(express.static("public"))
// todos os .get são as rotas da aplicação onde irá buscar as paginas
.get("/",(req,res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/study",(req,res) => {
    return res.sendFile(__dirname + "/views/study.html")
})
.get("/give-classes",(req,res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
})

.listen(4000)

