const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../Controllers/product.controller');

// Obtener todos los productos
router.get('/', getProducts);

// Crear nuevo producto 
router.post('/', createProduct);

// Actualizar producto
router.put('/:id', updateProduct);

// ELiminar producto
router.delete('/:id', deleteProduct);

module.exports = router;