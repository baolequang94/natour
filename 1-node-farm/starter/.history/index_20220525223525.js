const fs = require('fs');
const http = require('http');
const url = require('url');

const replaceTemplate = require('module/replaceTemplate');

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
//SERVER
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  switch (pathname) {
    // Overview page
    case '/':
    case '/overview': {
      // res.writeHead(200, { 'Content-type': 'text/html' });
      const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el)).join('');
      const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
      res.end(output);
      break;
    }
    // Product page
    case '/product': {
      const product = dataObj[query.id];
      const output = replaceTemplate(tempProduct, product);
      res.end(output);

      break;
    }
    // API
    case '/api':
      // res.writeHead(200, { 'Content-type': 'application/json' });
      res.end(data);
      break;

    // Not Found
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
