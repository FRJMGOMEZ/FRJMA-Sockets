const{io} = require('../server');

io.on('connection',(client)=>{

  client.on('disconnect',()=>{console.log('User disconnected')})

  client.on('enviarMensaje',(data)=>{

    console.log(data);

  //  if(data.nombre){callback({resp:'Everything was OK'})}
  //  else{callback({resp:'Everything was BAD'})}

  client.broadcast.emit('enviarMensaje','Hola a todos!')})

  console.log('User connected')})
