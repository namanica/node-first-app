const http = require("http");
const testHtml = require("./constants/test-html");

const requestListener = (req, res) => {
  // console.log("REQUEST:", req);
  // console.log("RESPONSE:", res);
  console.log(req.method, req.url);

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write(testHtml);
  res.end();
};

const server = http.createServer(requestListener);

server.listen(3000);
