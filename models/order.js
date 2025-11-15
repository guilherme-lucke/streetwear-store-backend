// models/order.js
const { getDB } = require("../config/database");
const { ObjectId } = require("mongodb");

class Order {
  static async create(orderData) {
    const db = getDB();
    // Critério: Validação
    if (
      !orderData.userId ||
      !orderData.products ||
      orderData.products.length === 0
    ) {
      throw new Error("User ID and products are required for an order.");
    }

    const newOrder = {
      ...orderData,
      userId: new ObjectId(orderData.userId), // Garante que o ID é um ObjectId
      status: "pending",
      createdAt: new Date(),
    };

    try {
      const result = await db.collection("orders").insertOne(newOrder);
      return result.insertedId;
    } catch (error) {
      console.error("Error creating order:", error);
      throw new Error("Could not create order.");
    }
  }

  static async findByUserId(userId) {
    const db = getDB();
    return await db
      .collection("orders")
      .find({ userId: new ObjectId(userId) })
      .toArray();
  }
}

module.exports = Order;
