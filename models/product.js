// models/product.js
const { getDB } = require("../config/database");
const { ObjectId } = require("mongodb");

class Product {
  static async create(productData) {
    const db = getDB();
    // Critério: Validação
    if (!productData.name || !productData.price) {
      throw new Error("Product name and price are required");
    }
    try {
      const result = await db.collection("products").insertOne(productData);
      return result.insertedId;
    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error("Could not create product.");
    }
  }

  static async findAll() {
    const db = getDB();
    return await db.collection("products").find({}).toArray();
  }

  static async findById(id) {
    const db = getDB();
    return await db.collection("products").findOne({ _id: new ObjectId(id) });
  }
}

module.exports = Product;
