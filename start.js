const dotenv = require("dotenv");
const next = require("next");

const envFilePath = process.argv[2];
if (envFilePath) {
  dotenv.config({ path: envFilePath });
} else {
  console.error("Error: Environment file path not provided.");
  process.exit(1);
}

const dev = process.env.NODE_ENV !== "production";
console.log(dev);
const app = next({ dev });
console.log(process.env.PORT);
const port = parseInt(process.env.PORT, 10) || 3000;
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const http = require("http");

  const server = http.createServer((req, res) => {
    handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
