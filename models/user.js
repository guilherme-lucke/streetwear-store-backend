// models/user.js
const { getDB } = require("../config/database");
const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb"); // Para buscar por ID

class User {
  static async create(userData) {
    const db = getDB();
    // Critério: Validação de campos obrigatórios
    if (!userData.email || !userData.password) {
      throw new Error("Email and password are required");
    }
    // Critério de Segurança: Hashing da senha
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    try {
      const result = await db.collection("users").insertOne(newUser);
      return result.insertedId;
    } catch (error) {
      // Critério: Tratamento de exceção (ex: email duplicado)
      console.error("Error creating user:", error);
      // Critério: Log de erro (simplificado por enquanto)
      // Idealmente, usaríamos um utilitário de log aqui.
      throw new Error("Could not create user.");
    }
  }

  static async findByEmail(email) {
    const db = getDB();
    return await db.collection("users").findOne({ email: email });
  }

  static async findById(id) {
    const db = getDB();
    return await db.collection("users").findOne({ _id: new ObjectId(id) });
  }
}

module.exports = User;
