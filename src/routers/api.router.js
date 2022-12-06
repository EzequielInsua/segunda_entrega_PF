import express from 'express';
import { fork } from 'child_process';


const { Router } = express;
const apiRouter = new Router();

const forked = fork("./utilitis/random.fork.js");

apiRouter.get('/randoms', (req, res) => {

    const cant = Number(req.query.cant) || 100000000;
    
    forked.on('message', randoms => {
        res.end(JSON.stringify(randoms));
    })
    
    forked.send({cantidad: cant})

});
apiRouter.get('/*', (req, res) => {
    res.redirect("/")
});

export default apiRouter;