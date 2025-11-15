// server.js
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const { connectDB } = require("./config/database");

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao banco de dados ANTES de iniciar o servidor
connectDB().then(() => {
  // Middlewares essenciais
  app.use(express.json()); // Para parsear o corpo de requisições JSON
  app.use(express.urlencoded({ extended: true })); // Para parsear formulários

  // Configuração da Sessão
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }, // 'secure: true' em produção com HTTPS
    })
  );

  // Rota de teste
  app.get("/api", (req, res) => {
    res.json({ message: "Streetwear Store API is running!" });
  });

  // Importar e usar rotas
  const userRoutes = require("./routes/userRoutes");
  app.use("/api/users", userRoutes);
  const productRoutes = require("./routes/productRoutes");
  app.use("/api/products", productRoutes);

  // Iniciar o servidor
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
