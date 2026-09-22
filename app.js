const http = require("http");

const requestListener = (req, res) => {
  console.log("REQUEST:", req);
  console.log("RESPONSE:", res);
};

const server = http.createServer(requestListener);

server.listen(3000);
