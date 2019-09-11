const express = require('express');

const router = express.Router();
const DB = require('../module/db');

const db = new DB();

/* GET home page. */
router.get('/', async (req, res, next) => {
  // let products = await db.mockData();
  const realData = await db.read();


  res.render('products', {
    title: 'Products',
    products: realData,
  });
});


// Create new product.

router.get('/new', async (req, res, next) => {
  res.render('new-product');
});

router.post('/', async (req, res, next) => {
  const result = await db.create(req.body);
  res.redirect('/products');
});

// Delete

router.get('/delete/:id', async (req, res, next) => {
  const id = req.params.id;

  await db.delete(parseInt(id));
  res.redirect('/products');
});

// Update

router.get('/:id', async (req, res, next) => {
  const id = req.params.id || 0;

  const prod = await db.readOne(id);

  res.render('show-product', {
    product: prod[0],
  });
});

router.post('/:id', async (req, res, next) => {
  const id = req.params.id || 0;
  await db.update(id, req.body);
  res.redirect('/products');
});


module.exports = router;
