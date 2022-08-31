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
//SERVER
const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  }
  return output;
};

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  switch (req.url) {
    // Overview page
    case '/':
    case '/overview':
      const cardsHtml = dataObj.map((el) => replaceTemplate(tempOverview, el));
      res.end(cardsHtml);
      break;

    // Product page
    case '/product':
      res.end('This is the PRODUCT');
      break;

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
