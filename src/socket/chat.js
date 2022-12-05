import { Server as IOServer} from 'socket.io';
import { Server as HttpServer } from 'http';
// import app from '../bootServer';
// import messagesDAOMongo from '../daos/messages/messagesDAOMongo';

const chatSocket = () =>{
    const httpServer = new HttpServer(app);
    const io = new IOServer(httpServer);
    const dbMsg = new messagesDAOMongo();
    
    const server = httpServer.listen( PORT, () => {
        console.log(`Listening on port ${ PORT }`);
    });
    
    server.on( "Error", error => console.log(`Error while listening on port ${PORT}: ${error}`) );
    
    io.on('connection', async ( socket ) => {
        // const products = await dbProducts.popular();
        // socket.emit('products', products);
        
        const { wasError, data } = await dbMsg.getAllMessages();
        !wasError && socket.emit("mensajes", data);
    
        socket.on("new_msg", async (data) => {
            console.log('new_msg',data);
            const { wasError, data: newMsg} = await dbMsg.insertMessages({...data});
            
            if (!wasError){
                const { wasError:Error, data } = await dbMsg.getAllMessages();
                console.log('back',data);
                !Error && io.sockets.emit("mensajes", data);
            }
            // socket.to().emit('evento', 'data')
        });
    
        /* socket.on('new_product', async ( newProduct ) => {
            console.log('producto recibido')
            console.log('new_product',newProduct);
            await dbProducts.save(newProduct);
            const products = await dbProducts.getAll();
            io.sockets.emit('products', products);
        }) */
    })
} 

export default chatSocket