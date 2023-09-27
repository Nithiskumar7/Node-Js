// console.log("welcome to the my world");


// var h1 = require("http")
// h1.createServer(function(req,res){

// }).listen(8080)
// console.log("server is running....")


// var h1 = require("http")
// h1.createServer(function(req,res){
// res.writeHead(200,{'Content-Type':'text/html'});
// res.end("Hello")
// }).listen(8080)
// console.log("Server is Running");


// console.log("hai%s","hello");
// console.log(new Error("this is an error"));


// const name1 = "Kumar";
// console.warn(`Do not combine ${name1}`);


// function display(x){
//     console.warn(`Welcome to our node program ${x}`);
// } const x = "Waring Concepys";
// display(x)


// function Number(x,y){
//     if(x>y){
//         console.log(`${x}is greater${y}`);
//     }else{
//         console.log(`${x}is less than or equal to ${y}`);
//     }
// }
// x = 100;
// y = 200;
// Number(x,y)/


// console.log(__filename);
// console.log(__dirname);


// const os = require('os')
// console.log('os homedire::\n', os.homedir());
// console.log('os hostname::\n', os.hostname());
// console.log('os.platform::\n', os.platform());
// console.log('os release::\n', os.release());
// console.log('os tempdir::\n', os.tmpdir());
// console.log('os totalmen::\n', os.totalmem());
// console.log('os type::\n', os.type());
// console.log('os uptime::\n', os.uptime());



// const f1 = require('os')
// console.log('os cpus::\n', f1.cpus());
// console.log('os arch::\n', f1.arch());
// console.log('os networkinterface is ::\n', f1.networkInterfaces());


// setInterval(function(){
//     console.log("setIntervaltime::Hello 1 millisconds completed");
// },10000)



// var i = 0;
// console.log(i);
// setInterval(function(){
//     i++;
//     console.log(i);
// },1000);



// var rec = function(){
//     console.log("Hey 1000 milisecond completed");
//     setTimeout(rec,1000)
// }
// rec();

// function myMethod(){
//     return 123;
// }
// console.log(myMethod());

// function unDefinedValue(){
//     return 321;
// }
// console.log(unDefinedValue());

// setTimeout(function(){
//     console.log("Finished");
// },2000);
// console.log("Wating....");



// var i = 1;
// setTimeout(function(){
//     console.log("Finished");
//     i++;
// },0);
// if(i==1){
//     console.log("wating....");
// }else{
//     console.log("I value did not change..");
// }
// try{
//     setTimeout(function(){
//         console.log("Finished");
//         i++;
//     },0);
// }catch(err){
//     console.log("An error occurred err");
// }



//Stat Function

// var fs = require('fs')
// console.log('get the file info');
// fs.stat('sample.txt', function(err,stat){
//     if(err){
//         return console.error(err);
//     }
//     console.log(stat);
//     console.log('fileinformation success.....');
//     //check the file type
//     console.log('In File::\n'+stat.isFile());
//     console.log('InDreetory::\n'+stat.isDirectory());
// })

// //Buffer

// buf = new Buffer(256)
// len = buf.write("NITHISKUMAR");
// console.log("Length of the string::"+len)



// buf = new Buffer(26);
// for(var i=0; i<26; i++){
//     buf[i]=i+97;
// }
// console.log(buf.toString('ascii'));
// console.log(buf.toString('ascii',0,5));
// console.log('utf8',0,5);



// var fs = require('fs')
// var data = ' ';
// //Create a readable stream
// var readerStream = fs.createReadStream('samole.txt');
// //set the encoding to be utf-8
// readerStream.setEncoding('utf-8')
// //handle stream event
// readerStream.on('data',function(chunk){
//     data+=chunk;
// });
// readerStream.on('end',function(){
//     console.log(data);
// });
// readerStream.on('error',function(){
//     console.log(err.stack);
// });
// console.log("End Programs......")



// var fs = require('fs')
// var readerstream = fs.createReadStream('sample.text');
// var writerStream = fs.createReadStream('output.txt');

// readerstream.pipe(writerStream);
// console.log('program to be end....')



// var fs = require('fs')
// var zlib = require('zlib')
// //compress the file
// fs.createReadStream('sample.text')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('sample.text.gz'))
// console.log('file compressed');

//NodeJs Events

// var fs = require('fs')
// var readerStream = fs.createReadStream('sample.text')
// readerStream.on('open',function(){
//     console.log("This file is open");
// });

//Event Module

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var myEventHandle = function(){
//     console.log("I hear a Scream!!...")
// }
// eventEmitter.on('scream', myEventHandle);
// eventEmitter.emit('scream')


// const fs = require("fs")
// const filedata = fs.readFileSync('sample.text')
// console.log(filedata.toString)
// console.log("Eng of the program")


const fs = require('fs')
fs.readFile('sample.text',function(ferr,filedata){
    if(ferr)return console.error(ferr)
    console.log(filedata.toString())
});
console.log("End of Program");
