const express = require('express');
const router = express.Router();
const OrderSwapController = require('../controllers/orderSwapController');

router.post('/', OrderSwapController.createOrderSwap);
router.put('/:id', OrderSwapController.updateOrderSwap);
router.delete('/:id', OrderSwapController.deleteOrderSwap);
router.get('/', OrderSwapController.getOrders);

module.exports = router;
