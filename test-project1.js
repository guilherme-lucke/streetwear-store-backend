// test-project1.js
const { connectDB, getDB } = require("./config/database");
const User = require("./models/user");
const Product = require("./models/product");
const Order = require("./models/order");

async function run() {
  try {
    await connectDB();
    console.log("--- TESTING PROJECT 1 ---");

    // 1. Criar Usuário
    console.log("\n1. Creating user...");
    const userId = await User.create({
      name: "Takashi",
      email: "takashi@street.com",
      password: "supersecretpassword",
    });
    console.log(`User created with ID: ${userId}`);

    // 2. Criar Produto
    console.log("\n2. Creating product...");
    const productData = {
      name: 'Oversized Hoodie "Tokyo Night"',
      description: "Black hoodie with neon print.",
      price: 350.0,
      category: "hoodies",
      variants: [
        { size: "M", stock: 10 },
        { size: "L", stock: 5 },
      ],
    };
    const productId = await Product.create(productData);
    console.log(`Product created with ID: ${productId}`);

    // 3. Criar Pedido
    console.log("\n3. Creating order...");
    const orderData = {
      userId: userId,
      products: [
        { productId: productId, quantity: 1, size: "M", price: 350.0 },
      ],
      totalAmount: 350.0,
    };
    const orderId = await Order.create(orderData);
    console.log(`Order created with ID: ${orderId}`);

    // 4. Buscar pedidos do usuário
    console.log("\n4. Finding orders for user...");
    const orders = await Order.findByUserId(userId);
    console.log("Orders found:", orders);

    console.log("\n--- TEST COMPLETED SUCCESSFULLY ---");
  } catch (error) {
    console.error("--- TEST FAILED ---");
    console.error(error);
  } finally {
    // Fechar a conexão com o banco para o script terminar
    const dbClient = getDB().client;
    if (dbClient) await dbClient.close();
  }
}

run();
