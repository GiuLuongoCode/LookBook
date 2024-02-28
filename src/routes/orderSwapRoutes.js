const express = require('express');
const router = express.Router();
const OrderSwapController = require('../controllers/orderSwapController');

router.post('/', OrderSwapController.createOrderSwap);
router.put('/:id', OrderSwapController.updateOrderSwap);
router.delete('/:id', OrderSwapController.deleteOrderSwap);
router.get('/', OrderSwapController.getAllOrders);
router.get('/date/:date', OrderSwapController.getOrdersByDate);
router.get('/product/:productId', OrderSwapController.getOrdersByProduct);
router.get('/status/:status', OrderSwapController.getOrdersByStatus);
router.get('/user/:userId', OrderSwapController.getOrdersByUser);

module.exports = router;
