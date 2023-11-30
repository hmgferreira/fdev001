import express from 'express';
import cors from 'cors';
import RotasPublicas from './routes/RotasPublicas.js';
import RotasPrivadas from './routes/RotasPrivadas.js';

const app = express();
app.use(express.json());
app.use(cors())

// VALIDACAO DE DADOS
// UPLOAD DE IMAGEM - 
// ENVIO DE EMAIL - https://www.w3schools.com/nodejs/nodejs_email.asp
// REFRESH TOKEN

app.use(RotasPublicas);
app.use(RotasPrivadas);


app.listen(8000, function() {
    console.log("Servidor executando...");
})