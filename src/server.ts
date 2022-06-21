import express, { Request, Response } from "express";

const app = express();

app.get('/aluno', (req: Request, res: Response) => {
    return res.json({message: 'Hello devs!!'})
})

app.listen(3000, () => console.info('Funfou...'));

//yarn dev
//yarn nodemon src/server.js
//yarn add -D typescript @types/node
//yarn add -D ts-node-dev
// yarn tsc --init
//yarn add -D @types/express