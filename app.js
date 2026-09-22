const http = require("http");
const fs = require("fs");

const { testHtml, testFormHtml } = require("./constants");

const renderHtml = (res, html) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
};

const writeOutput = (value, callback) => {
  fs.mkdirSync("./outputs", { recursive: true });
  fs.writeFile("./outputs/value.txt", value, { recursive: true }, callback);
};

const requestListener = (req, res) => {
  const { url, method } = req;

  console.log(method, url);

  if (url === "/") {
    renderHtml(res, testFormHtml);
    return;
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log("CHUNK:", chunk);
      body.push(chunk);
    });

    return req.on("end", (chunk) => {
      console.log("END CHUNK:", chunk);

      const parsedBody = Buffer.concat(body).toString();
      console.log("END PARSED BODY:", parsedBody);

      const value = parsedBody.split("=")[1];
      writeOutput(value, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
  }

  renderHtml(res, testHtml);
};

const server = http.createServer(requestListener);

server.listen(3000);
