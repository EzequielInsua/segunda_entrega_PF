export default {
    TypeDB: 'firebase',
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr:`mongodb://localhost:27017/ecommerce`,
        options: {
            serverSelectionTimeoutMS: 5000,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    firebase: 
    {
        "type": "service_account",
        "project_id": "imperkartdb",
        "private_key_id": "78d5c4611072da6d0b9b3960f6e6f315dd398392",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCbQlPIvDk4br2E\nbq/s0Dy5fyzReH8I9UtBgEeKgy9Y10i0Kfi1BIM8sccxJB6cDUKZnQyPJc6nxI7I\nN5p8aOa3SLAlwrFxZ1aTnNDBZHEdj9oNgxX1/x8jh88jXuO5QXvNARHPSeBlaq5V\nTSnOuwX82g6ryXstFF7Foo3JyJXXMFl7aFg/Ik9GkRUOFQMCYqBb+mNIhZQC8p30\nh7eWcmDYLmbFUG4WxdNBe5ntf/W+ckqprLAkoWdpjVUC8L+VmyYMbZu4BwXzKdsJ\nO88ooWP2ShEothGymhEAIW2RaHOyuHeN9guRmzmRH3mc30Cw/UCW2kD1hjYLgepp\n4WRa/PFPAgMBAAECggEARL/OEekm/VIsIWRSCm77NLiXw/mzZugXdt2y0Cbe5FwQ\nGZcsRhvFcS7XoW75DujgQN1GHm0DYU6sWwQkKErbPvW06kOYBztXHu4lkj1DyW9V\ngv40z0U1KKqOkn8GH5Zbl5+Nn1h7QO1IXQVaKeyu7hQwwujo3kFS5fjhCCUGFM7n\nBi39en0nppCgNQFULGMmMrRY9xieTJuie9/3nBbu1xCWoYh4dfa9LGOzbnrIfzqG\n0fhr5w6by9tNxQ8aVpK89UnWoDjF1LjajugQj2j35BEePFcM7JtjtGFOqA674GL8\n/9971WNpxilqM6+es89lajsyloyHnfvPWUvHW+ykIQKBgQDWnOAAtFHn5Xzi9Lq3\nncYiZMsq9ZOifc2vSkrfEyaPuCuJsh7IK5nOu/GG249X7BeSZsByOOOXfwxTeOQ5\nugULTPV/IA6gNP4VuSSAGIwBdsN9D8hHHHttmGYIg2yYgz5cchTlxYeETogD4bN5\nqTSJrdjFtLymL5o4DRhhI3w76wKBgQC5Mz7PFkbE/tcXVn1kyKcyObYfEGrAG955\nYO1QzWjd4YZTBHPKs1I9chbL8xSU+4GoTskdo4YtHrMrGlxqbP2RM+xzTvgGxmd7\nJM6o3s+PVmiZsersCmJieyFhO1Bm7QIWAKJpZcETWqDpz/lDGd4ENRzAFKb/ckyR\nUzHyh3X7LQKBgQCMPCYDT9DVfxeEFfaMVQRLJSG9CItX+myUxi72ZUUlVGrepw2G\nLzdp51WDkaSxBwzAFXRbLuFI9TPQt4YqUmtJXxhr4T6tYPNGrpwzN9cEfd5vsghk\nry/YBWVm2rnzTo9JSSJuogxTYB1wq+Li9LXn4TlstxUuYpybU7NChjV/0QKBgQCW\nIjzglCZ6vDyR5sNwWFlyFebV9/ESG4WW0ESSJHLGrHTAB/P2drhMp5hjbYNZ4ymQ\nz42qQU4cda65Wn1gqUpF09nzACmBFIX/Bi+iJj4M7PeO4PSYtTJcs4Sz1emwBqKS\nQ6Fl399NWULpSHfBNc8NiiDsddGLc5Uumkr7WWUDYQKBgFjJbFNOAgd33NmbxDBW\n+r+Ks2p78pf0XJM0w2yoM6dV13s7n16kPMJRl5c/Nf377IaMiJxDjy3Gg+uZyxiL\nY+P503Rjv3tHJ5GZEwZsDOaQ+qNZj/H7Zdc3CatF0OLMTLZjgmVvN99tTr+xwarE\n+bpkRghW0zqDirG1/qRTaABf\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-pdpjc@imperkartdb.iam.gserviceaccount.com",
        "client_id": "111354939613309146132",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pdpjc%40imperkartdb.iam.gserviceaccount.com"
    },
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
