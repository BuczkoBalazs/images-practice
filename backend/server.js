const { response } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const { stringify } = require("querystring");

const app = express();
const port = 9000;

app.use(express.json());

app.use('/pub', express.static(`${__dirname}/../frontend/pub`));

app.get("/", (request, response, next)=>{
    response.sendFile(path.join(`${__dirname}/../frontend/index.html`));
});

app.get("/img-list", (request, response, next)=>{
    response.sendFile(path.join(`${__dirname}/../frontend/data.json`));
});

app.listen(port, ()=>{
    console.log(`http://127.0.0.1:${port}`)
});