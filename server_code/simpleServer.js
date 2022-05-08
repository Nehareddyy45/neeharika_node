const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {


    console.log(req.url);
    res.end("You are in your server");


});

const PORT = process.env.PORT || 5959;

server.listen(PORT, () => console.log(`Great our server is running on port ${PORT} `));