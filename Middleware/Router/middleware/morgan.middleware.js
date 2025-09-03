var morgan = require('morgan')
var fs = require('fs')
var path = require('path')



const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "..", ".logs.txt"),
  { flags: "a" }
);



 var morganMiddleware=morgan(function (tokens, req, res) {
  return [
       "Method:",  tokens.method(req, res),
       "| URL:", tokens.url(req, res),
       "| Status:", tokens.status(req, res),
       "| Content-Length:", tokens.res(req, res, 'content-length'), '-',
       "| Time-Taken:", tokens['response-time'](req, res), 'ms',
        "| Date:",  tokens.date(req, res, ),
    "| HTTP/", req.httpVersion

  ].join(' ') 
},{ stream: accessLogStream })

module.exports=morganMiddleware