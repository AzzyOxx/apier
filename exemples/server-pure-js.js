import {createServer} from 'http';

async function handler(req, res ){
    const {method} = req;
    
    if (method === 'GET'){
        return res.end('Isto foi um GET');
    }else if (method === 'POST'){
        return res.end('Isto foi um POST');
    }
}

const app = createServer(handler);

app.listen(3000, () => console.log('Server running at http://localhost:300...'));