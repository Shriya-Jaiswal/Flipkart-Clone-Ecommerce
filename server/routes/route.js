import express from 'express';
import { userSignUp, userLogin } from '../controller/userController.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { addPaymentGateway , paytmResponse } from '../controller/payment-controller.js';

const router = express.Router();

router.post('/signup',userSignUp);
router.post('/login',userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback', paytmResponse);

export default router;