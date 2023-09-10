const http = require('http');

const requireListener =  (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'nodeJS');
    // response.statusCode = 200;
    
    const { method, url} = request;


    if (url === '/'){
        if (method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'This is HOMEPAGE',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringfy({
                message: `The page cannot be accessed with this ${method} method`,
            }));
        }
    } else if (url === '/about'){
        response.statusCode = 200;
        if ( method === 'GET'){
            response.end(JSON.stringify({
                message: 'This is ABOUT'
            }))
        } else if ( method === 'POST'){
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringfy({
                    message: `Hello ${name}, youre are in page ABOUT with method ${method}`,
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringfy({
                message: `This page cannot be accessed with this ${method} method`,
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message : 'Page Not Found',
        }));
    }
    
};

const server = http.createServer(requireListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server OKE http://${host}:${port}`)
});