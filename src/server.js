const proffys = [

    {   
        name:"diego",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"5465465",
        bio:"bla bla bla",
        subject:"quimica",
        cost:"20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {   name:"dani",
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

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "quimica",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]

//Funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber -1 
    return subject[position]
}

function pageLanding(req,res){
    return res.render("index.html")
}

function pageStudy(req,res){
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req,res){
    const data = req.query

    // se tiver dados(data)

    const isNotEmpty = Object.keys(data).lenght > 0
    if (isNotEmpty){

        data.subject = getSubject(data.subject)

        // adicionar data a lista dos proffys
        proffys.push(data)

        return res.redirect("/study")

    }

    // se não mostras a página
    return res.render("give-classes.html", {subjects, weekdays})

}

const express = require('express')
const server = express()

//importei o nunJucks e configurei(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
    })

//inicio da configuração do servidor
server
//configurar arquivos estáticos (tipo css scripts e imagens)
.use(express.static("public"))
// todos os .get são as rotas da aplicação onde irá buscar as paginas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)
//start do servidor
.listen(5000)
// console log(__dirname)
