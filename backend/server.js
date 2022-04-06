const express = require("express");
const path = require("path");


const port = 9000;
const app = express();
const pathToFrontend = path.join(`${__dirname}/../frontend`);

app.use(express.json());
app.use('/pub', express.static(`${pathToFrontend}/pub`));
app.use('/dist', express.static(`${pathToFrontend}/dist`));

app.get("/", (request, response)=>{
    response.sendFile(`${pathToFrontend}/index.html`);
});

app.get("/img-list", (request, response)=>{
    response.sendFile(`${pathToFrontend}/data.json`);
});

app.listen(port, ()=>{
    console.log(`http://127.0.0.1:${port}`)
});