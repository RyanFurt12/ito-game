const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let salas = {};
let socketIds = {};

//front-end
app.use(express.static('public'));

app.get('/sala/:id', (req, res) => {
  res.sendFile(__dirname + '/public/sala.html');
});

//back-end
app.get('/criar-sala', (req, res) => {
  const idSala = Math.random().toString(36).substring(3, 8);
  salas[idSala] = { jogadores: [], status: 'aguardando' };

  res.send({ idSala: `${idSala}` });
});

io.on('connection', (socket) => {
  socket.on('entrarSala', (idSala) => {
    if (salas[idSala]) {
      salas[idSala].jogadores.push(socket.id);
      socketIds[socket.id] = idSala;

      socket.join(idSala)
      io.to(idSala).emit('atualizarJogadores', salas[idSala].jogadores.length);
    }
    else{
      io.to(socket.id).emit('salaErrada');
    }
  });

  function sairSala(idSala){
    if (salas[idSala]) {
      const index = salas[idSala].jogadores.indexOf(socket.id);
      if (index !== -1) {
        salas[idSala].jogadores.splice(index, 1); 
        socketIds[socket.id] = undefined;
        io.to(idSala).emit('atualizarJogadores', salas[idSala].jogadores.length);
      }
    }
  }

  socket.on('disconnect', () => {
    let idSala = socketIds[socket.id];
    if(idSala) sairSala(idSala);
  });
  
  socket.on('iniciarJogo', (idSala) => {
    if (salas[idSala] && salas[idSala].status === 'aguardando') {
      salas[idSala].status = 'em jogo';
      const numeros = [];
      while (numeros.length < salas[idSala].jogadores.length) {
        const num = Math.floor(Math.random() * 101);
        if (!numeros.includes(num)) {
          numeros.push(num);
        }
      }
      salas[idSala].jogadores.forEach((id, index) => {
        io.to(id).emit('numeroJogador', numeros[index]);
      });

      salas[idSala].jogadores.forEach((id) => {
        let s = io.sockets.sockets.get(id);
        if(s){
          s.leave(idSala);
          s.removeAllListeners();
          s?.disconnect(true);
        }
      });
      salas[idSala] = undefined;
    }
  });
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
