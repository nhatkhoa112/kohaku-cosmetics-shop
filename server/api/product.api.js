const router = require('express').Router();
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin');
const productController = require('../controllers/product.controller');

router.get('/', productController.get);

router.post('/', auth, authAdmin, productController.create);

router.delete('/:id', auth, authAdmin, productController.delete);

router.patch('/:id', auth, authAdmin, productController.update);

module.exports = router;