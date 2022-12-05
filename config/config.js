import dotenv from 'dotenv';
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
