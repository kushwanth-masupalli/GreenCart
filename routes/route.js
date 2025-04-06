const express = require('express');
const {
  getAllProducts,
  insertProduct,
  getById,
  getByName,  
  getByCat
} = require('../controllers.js/controller');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', insertProduct);

// Use specific route names to avoid path conflicts
router.get('/byid/:id', getById);
router.get('/byname/:name', getByName);
router.get('/bycat/:cat',getByCat)

module.exports = router;
