import config from '../../config/config.js'

let productosDao
let carritosDao
let messagesDao
let usersDao

switch (config.TypeDB) {
    case 'json':
        const { default: ProductosDaoFile } = await import('./productos/ProductosDaoFile.js')
        const { default: CarritosDaoFile } = await import('./carritos/CarritosDaoFile.js')

        productosDao = new ProductosDaoFile()
        carritosDao = new CarritosDaoFile()
        break
    case 'firebase':
        const { default: ProductosDaoFirebase } = await import('./productos/ProductosDaoFirebase.js');
        const { default: CarritosDaoFirebase } = await import('./carritos/CarritosDaoFirebase.js');
        
        productosDao = new ProductosDaoFirebase();
        carritosDao = new CarritosDaoFirebase();    

        break
    case 'mongodb':
        const { default: ProductosDaoMongoDb } = await import('./productos/ProductosDaoMongoDb.js');
        const { default: CarritosDaoMongoDb } = await import('./carritos/CarritosDaoMongoDb.js');
        const { default: messagesDAOMongo } = await import('./messages/messagesDAOMongo.js');
        const { default: usersDaoMongoDb } = await import('./users/usersDaoMongo.js');
        
        productosDao = new ProductosDaoMongoDb();
        carritosDao = new CarritosDaoMongoDb();
        messagesDao = new messagesDAOMongo();
        usersDao = new usersDaoMongoDb();
        break
    case 'mariadb':
        
        break
    case 'sqlite3':
        
        break
    default:
        
        break
}

export { 
        productosDao, 
        messagesDao, 
        usersDao, 
        carritosDao 
    }