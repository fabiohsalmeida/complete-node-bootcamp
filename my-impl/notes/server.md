## Vanilha JS
### Create server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  // Send this message for any requests on the server
  res.end('Hello from the server!');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
```

### Basic routing

```js
const http = require('http');

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/') {
    res.end('Home');
  } else if (pathName === '/overview') {
    res.end('This is overview');
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
```