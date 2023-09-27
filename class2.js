// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end("welcome");
// }).listen(8081)

//ReadFile

// var inputflie = require('fs')
// var data = inputflie.readFileSync('demofile1.html','utf-8')
// console.log(data)
// console.log('done')


// var http = require('http')
// var fs = require('fs')
// http.createServer(function(req,res){
//     fs.readFile('demofile1.html', function(err,data){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data)
//         return res.end();
//     });
// }).listen(8080);


//Create Files

// var fs = require('fs')
// fs.appendFile('mynewfile1.text','welcome', function(err){
//     if(err)throw err;
//     console.log('Saved!!....');
// });


//FS open

// var fs = require('fs')
// fs.writeFile('mynewfile2.text','Welcome2', function(err){
//     if(err)throw err;
//     console.log('Saving2...')
// });

//  var fs = require('fs')
//  fs.open('mynewfile3.text','welcome boyz', function(err,file){
//     if(err)throw err;
//     console.log('saved!!!...')
//  });


//Delete file

// var f1 = require('fs')
// fs.unlink('mynewfile1.text', function(err){
//     if(err)throw err;
//     console.log("File_Deleted...")
// });


//Rename File 

// var f1 = require('fs')
// f1.rename('mynewfile2.text','sample.text', function(err){
//     if(err)throw err;
//     console.log('FileRemaed!!!')
// })


//URL

// var url = require('url')
// var addr = 'https://www.google.com';
// var q = url.parse(addr,true);

// console.log(q.host);
// console.log(q.hostname);
// console.log(q.pathname);
// console.log(q.protocol);


//NodejS File Server

// var http = require('http')
// var url = require('url')
// var fs = require('fs')

// http.createServer(function(req,res){
//     var q = url.parse(req,url,true);
//     var filename = +"."+q.pathname;
//     fs.readFile(filename,function(err,data){
//         if(err){
//         res.writeHead(404,{'Content-Type':'text/html'});
//         return res.end('404 Not Found');
//         }
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(8080)


// var http = require('http')
// var uc = require('upper-case')
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write(uc.upperCase('Welcome'))
//     res.end()
// }).listen(8080);
