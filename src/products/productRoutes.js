const express = require('express')
const router = express.Router()

const { 
    getAllProductsStatic,
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('./productController')

router.route('/static').get(getAllProductsStatic)
router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)

module.exports = router
