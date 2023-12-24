import dotenv from 'dotenv';
import next from 'next';
import http from 'http';

console.log('-------Starting the app---------')
console.log(process.argv);
const envFilePath = process.argv[2];
console.log(`env file ${envFilePath}`);
if (envFilePath) {
  dotenv.config({ path: envFilePath });
} else {
  console.error('Error: Environment file path not provided.');
  process.exit(1);
}

console.log(`NODE_ENV is ${process.env.NODE_ENV}`);
const dev = process.env.NODE_ENV !== 'production';
console.log(dev);
const app = next({ dev });
console.log('Port is '+process.env.PORT);
const port = parseInt(process.env.PORT, 10) || 3000;
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Application is listining on port ${port}`);
  });

});