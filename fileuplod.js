var http = require('http');
var formidable = require('formidable');
http.createServer(function(req,res){
    if(req.url == '/fileuplod'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.write('File Uploaded');
            res.end();
        });
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br><br>');
        res.write('<input type="submit" value="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);