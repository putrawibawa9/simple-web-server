const http = require("http");
const fs = require("fs");
const port = 3000;

const rendHTML = (file, res) => {
  fs.readFile(file, (e, data) => {
    if (e) {
      res.writeHead(404);
      res.write("<h1> FILE NOT FOUND </h1>");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const url = req.url;
    if (url === "/about") {
      rendHTML("./about.html", res);
    } else {
      rendHTML("./index.html", res);
    }
  })
  .listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
