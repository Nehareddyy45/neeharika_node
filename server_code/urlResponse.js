const http = require("http");
const path = require("path");
const fs = require("fs");




const server = http.createServer((req, res) => {

    // we are sending to print whatever url we are in
    console.log(req.url);


    if (req.url === '/') {


        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1> 200 </h1>")
    }
    if (req.url === '/hmm') {
        res.end("<h1>Why so serious?</h1>");
    }


});

const PORT = process.env.PORT || 5959;
server.listen(PORT, () => console.log(`Great our server is running on port ${PORT} `));