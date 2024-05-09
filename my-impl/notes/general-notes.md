## Short cuts
### Change multiple occourences
``command + d`` in the selected string, that way you can change all places that has that word. example:

```js
const http = require('http');
// you can select http bellow and change it to url
const http = require('http');
// like this
const url = require('url');
```

## Useful tricks
### Parse JSON
**From string to json**
```js
const productData = JSON.parse(data);
console.log(productData);
```

## Node Commands
``node index.js`` to run a file

## External File Management

### Read from file

**For sync**
```js
const fs = require('fs');

const text = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(text);
```

**For async**
```js
const fs = require('fs');

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  // here the line has the name of the file it will read
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
  });
});
```
### Write to files

**For sync**
```js
const fs = require('fs');

const text = 'Such a avocado';

const textOut = `This is what we know about the avocado: ${text}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written.');
```

**For async**
```js
const data1 = 'Amazing';
const data2 = 'Wow';

fs.writeFile('./txt/file.txt', `${data1} ${data2}`, 'utf-8', err => {
  console.log('Your file has been written');
});
```