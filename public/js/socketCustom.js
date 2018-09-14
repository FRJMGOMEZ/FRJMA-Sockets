
let socket = io();

///////ON ES PARA ESCUCHAR SUCESOS////////
socket.on('connect',()=>{console.log('User connected')})

socket.on('disconnect',()=>{console.log('User disconnected')})

//////EMIT ES OARA EMITIR INFORMACIÓN////////
socket.emit('enviarMensaje',{nombre:'Pancho',
                             apellido:'Martínez',
                             mensaje:'Hola amigos'},(mensaje)=>{console.log('Respuesta Servidor:',mensaje)})

socket.on('enviarMensaje',(message)=>{console.log(message)})
