const path = require('path');
const fs = require('fs');
const mariadb = require('mariadb');

const pool = mariadb.createPool({
  user: 'root',
  connectionLimit: 50,
  password: 'root',
  database: 'shop',
});


module.exports = class DB {
  constructor() {
    pool.getConnection().then( conn => {
      this.conn = conn
    });
  }

  mockData() {
    return new Promise((resolve, reject) => {
      const filePath = path.join(__dirname, 'products.json');
      fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
          return reject(err);
        }
        resolve(JSON.parse(content));
      });
    });
  }

  async read() {
    const sql = `
      SELECT
          p.id AS productID,
          p.name,
          p.price,
          p.stock,
          p.active,
          p.insdate,
          m.name AS manufacturer,
          m.contact
        FROM
          products AS p
        JOIN
          manufacturers AS m
        ON
          p.manufacturer = m.id
	
    `;

    const result = await this.conn.query(sql);
    return result;
  }
};
