const fs = require('fs');
const http = require('http');
// const url = require('url');

/////////////////////////////
/////////FILES

//Blocking, synchronous
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// const textOut = `This is what we know about the avocado : ${textIn}.\nCreate on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File has been written!');

//Non-blocking, asynchronous
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       const output = data2 + '\n' + data3;
//       fs.writeFile('./txt/final.txt', output, (err) => {
//         console.log('File has been written :)');
//       });
//     });
//   });
// });

/////////////////////////////
/////////SERVER
const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/product':
      res.end('This is the PRODUCT');
      break;
    case '/api':
      fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
        const productData = JSON.parse(data);
        res.writeHead(200, {
          'Content-type': 'application/json',
        });
      });
      res.end(productData);
      break;
    case '/overview':
    case '/':
      res.end('This is the OVERVIEW');
      break;
    default:
      res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello-world',
      });
      res.end('<h1>Page not found 404</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000...');
});
