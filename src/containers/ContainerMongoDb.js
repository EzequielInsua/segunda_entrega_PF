import mongoose from 'mongoose'
import config from '../../config/config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContainerMongoDb {

    constructor(nombreColeccion, esquema) {
        try{
            this.coleccion = mongoose.model(nombreColeccion, mongoose.Schema(esquema));
        }catch(e){
            throw new Error(e);
        }
    }

    async list(id) {
        try{
            const element = await this.coleccion.findOne({_id: id });
            return element
        }catch(e){
            throw new Error(e);
        }
    }

    async listAll() {
        try{
            const element = await this.coleccion.find({});
            console.log("🚀 ~ file: ContainerMongoDb.js ~ line 28 ~ ContainerMongoDb ~ listAll ~ element", element)
            return element
        }catch(e){
            throw new Error(e);
        }
    }

    async save(nuevoElem) {
        try{
            const element = await this.coleccion.create(nuevoElem);
            console.log("🚀 ~ file: ContainerMongoDb.js ~ line 38 ~ ContainerMongoDb ~ save ~ element", element)
            return element
        }catch(e){
            throw new Error(e);
        }
    }

    async update(nuevoElem) {
        try{
            const {n, nModified} = await this.coleccion.replaceOne({_id: nuevoElem._id}, nuevoElem);
            return nModified > 0
        }catch(e){
            throw new Error(e);
        }
    }

    async delete(id) {
        try{
            const element = await this.coleccion.delete(id);
            return element
        }catch(e){
            throw new Error(e);
        }
    }

    async deleteAll() {
        try{
            const element = await this.coleccion.deleteMany({});
            return element
        }catch(e){
            throw new Error(e);
        }
    }
}

export default ContainerMongoDb