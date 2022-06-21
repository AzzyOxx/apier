import {createServer} from 'http';

async function handler(req, res ){
    const {method} = req;
    
    if (method === 'GET'){
        return res.end(get(req));
    }else if (method === 'POST'){
        return res.end('Isto foi um POST');
    }
}

const app = createServer(handler);

app.listen(3000, () => console.log('Server running at http://localhost:300...'));

function get(req){
    return 'Isto foi um GET';
}
//https://pandafiles.com/fld/33732ixhwtp8xxqa