import express from "express";

const app = express();

app.get('/aluno', (req, res) => {
    return res.json({message: 'Hello devs!!'})
})

app.listen(3000, () => console.info('Funfou...'));

//yarn dev
//yarn nodemon src/server.js