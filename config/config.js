import dotenv from 'dotenv';
import log4js from 'log4js';
dotenv.config();

export default {
    TypeDB: 'mongodb',
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: process.env.MONGODB_URL,
        options: {
            serverSelectionTimeoutMS: 5000,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    firebase: process.env.FIREBASE_CONFIG_FILE,
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: ``,
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
        
        }
    }
}
log4js.configure({
    appenders: {
        loggerConsole: { type: 'console' },
        loggerWarningFile: { type: 'file', filename: 'warn.log' },
        loggerErrorFile: { type: 'file', filename: 'error.log' }
    },
    categories: {
        default: { appenders: ["loggerConsole"], level: 'trace' },
        fileWarning: { appenders: ["loggerWarningFile"], level: 'warn'},
        fileError: { appenders: ["loggerErrorFile"], level: 'error'}
    }
})

export const logger = log4js.getLogger();
export const loggerWarn = log4js.getLogger("fileWarning");
export const loggerError = log4js.getLogger("fileError");