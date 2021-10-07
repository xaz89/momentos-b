'use strict'

var http = require('http').createServer(webServer),
    form = require('fs').readFileSync('assets/form.html'),
    querystring =require('querystring'),
    util =require('util
    
    
    ')

function webServer (req, res)
{
    if(req.method == 'GET')
    {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(form)
    }
}


http.listen(3000)
console.log('servidor corriendo en http://localhost:3000')