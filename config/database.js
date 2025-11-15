// config/database.js
require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

async function connectDB() {
  if (db) return db;
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("Successfully connected to MongoDB Atlas."); // Mensagem atualizada
    return db;
  } catch (error) {
    console.error("Could not connect to Atlas", error);
    process.exit(1);
  }
}

const getDB = () => {
  if (!db) throw new Error("DB not initialized. Call connectDB first.");
  return db;
};

module.exports = { connectDB, getDB };
