// controllers/orderController.js
const Order = require("../models/order");

exports.createOrder = async (req, res) => {
  try {
    const orderData = {
      ...req.body,
      userId: req.session.userId, // Pega o ID do usuário da sessão, garantindo segurança
    };
    const orderId = await Order.create(orderData);
    res.status(201).json({ message: "Order created successfully", orderId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.findByUserId(req.session.userId);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
s;
