import express from 'express';
import {usersDao} from '../daos/index.js';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { Router } = express;
const userRouter = new Router();
const jsonParser = bodyParser.json();

const PRIVATE_KEY = 'M1Pr1m3rK3y'

const generateToken = (user) =>{
    return jwt.sign({data:user }, PRIVATE_KEY, {expiresIn: '5s'});
}


// * ----------------------------------------------------------------
// * LOGIN
// * ----------------------------------------------------------------

function isValidPassword(user, password){
    return bcrypt.compareSync(password, user.password)
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

// * ----------------------------------------------------------------
// * SING UP
// * ----------------------------------------------------------------

userRouter.get('/signup', (req, res) => {
    return res.render("main", {layout: 'signup'});
});

userRouter.post('/signup', async (req, res) => {
    const {email, password} = req.body;    
    const {saved, data} = await usersDao.signUp(email, bcrypt.hashSync(password, bcrypt.genSaltSync(10), null))
    
    if (saved) {
        res.redirect("/user/login")
    }
    return res.render("main", {layout: 'error', msj: data});
});

// * ----------------------------------------------------------------
// * ROUTER USERS
// * ----------------------------------------------------------------


userRouter.get('/login', (req, res) => {
    return res.render("main", {layout: 'login'});
});

userRouter.post('/login', jsonParser, async (req, res) => {
        const {error, data} = await usersDao.listByEmail(req.body.email)
        
        if (error) return res.render("main", {layout: 'error', msj: data})
        if (isValidPassword(data, req.body.password)) {
            req.session.username = req.body.email;
            req.session.jwt = generateToken(req.body.email)
            return res.redirect('/productos');
        }
        return res.render("main", {layout: 'error', msj: 'Usuario o Password incorrecto'})
});

userRouter.get('/logout', isLogged, (req, res) => {
    setTimeout(function () {
        req.session.destroy( err => err && console.log(err))
    }, 2000)
    return res.render("main", {layout: 'vuelvaProntos', username: req.session.username})
});

export default userRouter;