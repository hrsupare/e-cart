const express = require("express");
const router = express.Router();
const { getUser, createUser, loginUser, updateUserDetail } = require("../controller/userController")
const { createProduct, getproductbyfilter, getProductById,updateProductDetail, deleteProductById } = require("../controller/productController")
const { authenticate } = require("../middleware/auth")

//==================== User ==============================//

router.post('/register', createUser)

router.post('/login', loginUser)

router.get('/user/:userId/profile', authenticate, getUser)

router.put('/user/:userId/profile', authenticate, updateUserDetail)

//==================== product ===============================//

router.post('/products', createProduct)

router.get("/products/:productId", getProductById)

router.get("/products", getproductbyfilter)

router.put("/products/:productId", updateProductDetail)

router.delete("/products/:productId", deleteProductById)


module.exports = router;