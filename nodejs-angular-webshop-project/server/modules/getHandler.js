const DB = require('./db');
const urlParser = require('url');

module.exports = class GetHandler {
  constructor(req, res) {

    const parsedUrl = urlParser.parse(req.url);
    const reqParams = parsedUrl.pathname.split('/');

    const ordersDB = new DB(reqParams[1]);
    const id = reqParams[2] || 0;
    ordersDB.find(id, parsedUrl.query).then(
      data => res.end(JSON.stringify(data)),
      (err) => {
        res.statusCode = 404;
        res.end(JSON.stringify(err));
      },
    );

  }
};
