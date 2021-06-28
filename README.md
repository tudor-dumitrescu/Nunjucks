# Nunjucks
https://mozilla.github.io/nunjucks/getting-started.html
https://javascript.plainenglish.io/deploying-a-localhost-server-with-node-js-and-express-js-58775f098407
https://www.npmjs.com/package/http-server

To help in working with Nunjucks, I installed:

1. $ npm install http-server (package found in "node_modules")
2. $ touch index.html app.js (this command creates the following files)
2. $ npm install express (a module framework that runs on Node. It empowers
developer to quickly build static and dynamic web applications and APIs with ease)
3. In the index.html pour some code
4. In app.js set up your localhost server by pouring the code:
const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});
5. Launch server:

$ node app.js

6. Your server is now running correctly, check the terminal to see. 


In more simplistic terms, Node allows you to run JS outside of your browser
i.e. in the terminal, and Express enables you to respon to individual client 
requests and build APIs quickly. 
