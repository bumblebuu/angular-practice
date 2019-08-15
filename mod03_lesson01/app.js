const http = require('http');

const server = http.createServer((req, res) => {
  res.end('<h1>Hello NodeJS</h1>');

});

server.listen(3331, () => {
  console.log('Server listen to 3331.');
});
