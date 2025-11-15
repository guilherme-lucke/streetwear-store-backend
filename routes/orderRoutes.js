// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { isLoggedIn } = require("../middleware/authMiddleware");

router.post("/", isLoggedIn, orderController.createOrder);
router.get("/", isLoggedIn, orderController.getUserOrders);

module.exports = router;
