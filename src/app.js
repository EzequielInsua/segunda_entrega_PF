import express from 'express';
import session from "express-session";
import MongoStore from "connect-mongo";
// import passport from 'passport';

import productosRouter from './routers/producto.router.js';
import userRouter from './routers/user.router.js';
import infoRouter from './routers/info.router.js';
import apiRouter from './routers/api.router.js';
// import carritosRouter from './routers/carrito.router.js';

import handlebars from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

import { Server as IOServer} from 'socket.io';
import { Server as HttpServer } from 'http';

import { messagesDao } from './daos/index.js';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
import parseArgs from 'minimist'

const options = {
    default: {
        port: 8080
    },
    alias: {
        p: 'port'
    }
}
const args = parseArgs(process.argv.slice(2), options);
const { port:PORT } = args

dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const app = express()
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const generateToken = (user) =>{
    return jwt.sign({data:user }, PRIVATE_KEY, {expiresIn: '10m'});
}

const isLogged = (req, res, next) => {
    jwt.verify(req.session.jwt, PRIVATE_KEY, (err) => {
        if (err) {
            return res.render("main", {layout: 'error', msj: err})
        }
        req.session.jwt = generateToken(req.session.username)
        next();
    });
};


app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URL,
            mongoOptions: advancedOptions,
        }),
        resave: false,
        saveUninitialized: false,
    })
);

// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

app.use('/productos', isLogged, productosRouter);
app.use('/user', userRouter);
app.use('/info', infoRouter);
app.use('/api', apiRouter);
// app.use('/carritos', carritosRouter)

// Config del front
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", "./views");
app.use(express.static(__dirname))
app.set("view engine", "hbs");

app.get('/', isLogged, (req, res) => {
    return res.render("index", {layout: 'main', username: req.session.username}); 
});

app.get('/*', (req, res) => {
    res.redirect("/")
});

app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: "main",
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    }),
)

//------------------------------------------------------------------------
// instancio servidor

const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))

//--------------------------------------------
// configuro el servidor

io.on('connection', async ( socket ) => {
    const mensajes = await messagesDao.getAllMessages();
    io.sockets.emit("mensajes", mensajes);

    socket.on("new_msg", async (data) => {
        messagesDao.insertMessages({...data});
        const mensajes = await messagesDao.getAllMessages();
        io.sockets.emit("mensajes", mensajes);
    });
})