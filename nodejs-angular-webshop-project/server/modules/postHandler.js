const DB = require('./db');
const urlParser = require('url');

module.exports = class PostHandler {
  constructor(req, res) {

    const parsedUrl = urlParser.parse(req.url);
    const reqParams = parsedUrl.pathname.split('/');

    const ordersDB = new DB(reqParams[1]);

    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', async () => {
      let response = await ordersDB.create(JSON.parse(data));
      res.end(JSON.stringify(err));

    })

  }
}
