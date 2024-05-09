const fs = require('fs');
const http = require('http');
const url = require('url');

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCT_NAME%}/g, product.productName);
  output = output.replace(/{%PRODUCT_IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);

  if(!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  }

  return output;
}

const templateOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const templateProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');
const tempalteCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html'});

    const cards = dataObj.map(el => replaceTemplate(tempalteCard, el)).join('');
    const output = templateOverview.replace('{%PRODUCT_CARDS%}', cards);

    res.end(output);
  } else if (pathName === '/overview') {
    res.end('This is overview');
  } else if (pathName === '/api') {
    fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
      const productData = JSON.parse(data);
      console.log(productData);
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Not mapped!</h1>');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});