const http = require('http');
const port = 3000;

const equipos = [
    {nombre: 'Real Madrid', localidad: 'Madrid'},
    {nombre: 'Atlético de Madrid', localidad: 'Madrid'},
    {nombre: 'F.C. Barcelona', localidad: 'Barcelona'}
]

http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('Hola Mundo desde el servidor!');
            res.end();
        break;
        case '/contacto':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('Contacto');
            res.end();
        break;
        case '/equipos':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(equipos));
            res.end();
        break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('El recurso no existe');
            res.end();
    }

}).listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})