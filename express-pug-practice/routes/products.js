const express = require('express');
const DB = require('./../module/db');

const router = express.Router();
const db = new DB();

/* GET products listing. */
router.get('/', async (req, res, next) => {
  // const productsArr = await db.mockData();

  const realData = await db.read();
  console.log(realData[0]);

  res.render('products', {
    title: 'Products',
    products: realData,
  });
});

module.exports = router;
