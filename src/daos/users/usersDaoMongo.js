import ContainerMongoDb from "../../containers/ContainerMongoDb.js"

class usersDaoMongoDb extends ContainerMongoDb {

    constructor() {
        super('users', {
            email: { type: String},
            password: { type: String}
        })
    }
    async signUp(email, password) {        
        if (!email || !password){
            return {saved: false, data: 'complete usuario y password'};
        }
        try{
            const user = await this.coleccion.findOne({email: email});
            if (user){
                return {saved: false, data: 'ya existe el usuario'};
            }
            const newUser = this.save({email, password});
            return {saved: true, data: newUser}
        }catch(e){
            throw new Error(e);
        }
    }
    async listByEmail(email) {        
        if (!email){
            return {error: true, data: 'Complete usuario'};
        }
        try{
            const user = await this.coleccion.findOne({email: email});
            
            if (user){
                return {error: false, data: user};
            }
            return {error: true, data: 'El usuario no existe'};
        }catch(e){
            throw new Error(e);
        }
    }
}

export default usersDaoMongoDb