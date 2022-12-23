import express from 'express';
import { fork } from 'child_process';
import { loggerWarn } from '../../config/config.js';


const { Router } = express;
const apiRouter = new Router();

// const forked = fork("./utilitis/random.fork.js");

/* apiRouter.get('/randoms', (req, res) => {

    const cant = Number(req.query.cant) || 100000000;
    
    forked.on('message', randoms => {
        res.end(JSON.stringify(randoms));
    })
    
    forked.send({cantidad: cant})

}); */
apiRouter.get('/*', (req, res) => {
    const {method, headers} = req
    loggerWarn.warn( method, headers.referer );
    res.redirect("/")
});

export default apiRouter;