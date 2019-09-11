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


// Update
router.get('/update/:id', async (req, res, next) => {
  const selectedProduct = await db.read(req.params.id);
  
  res.render('update-product', {
    product: selectedProduct[0],
  });
});


router.post('/update', async (req, res, next) => {
  const result = await db.update(req.body);
  res.json(result);
});


// Delete
router.get('/delete/:id', async (req, res, next) => {
  const result = await db.delete(req.params.id);
  res.json(result);
});


module.exports = router;
