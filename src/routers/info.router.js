import express from 'express';
import { countCPUs } from '../app.js';
import { loggerWarn } from '../../config/config.js' 

const { Router } = express;
const infoRouter = new Router();


infoRouter.get('/', (req, res) => {
    
    console.log({'Args': `${process.argv.join(", ")}`,
                    'SO': `${process.platform}`,
                    'Node Version': `${process.version}`,
                    'Mem rss': `${JSON.stringify(process.memoryUsage())}`,
                    'Path executing': `${process.argv[1]}`,
                    'PID': `${process.pid}`,
                    'Foldername Project': `${process.cwd().split('\\')[10]}`,
                    'CPUs': `${countCPUs}`})

    return res.send({
        'Args': `${process.argv.join(", ")}`,
        'SO': `${process.platform}`,
        'Node Version': `${process.version}`,
        'Mem rss': `${JSON.stringify(process.memoryUsage())}`,
        'Path executing': `${process.argv[1]}`,
        'PID': `${process.pid}`,
        'Foldername Project': `${process.cwd().split('\\')[10]}`,
        'CPUs': `${countCPUs}`
    });
});

infoRouter.get('/*', (req, res) => {
    const {method, headers} = req
    loggerWarn.warn( method, headers.referer );
    res.redirect("/")
});

export default infoRouter;