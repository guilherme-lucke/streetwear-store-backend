// controllers/userController.js
const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const userId = await User.create(req.body);
    res.status(201).json({ message: "User created successfully", userId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Critério de avaliação: Usar sessão para identificar o usuário
  req.session.userId = user._id;
  res.status(200).json({ message: "Logged in successfully" });
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Could not log out." });
    }
    res.status(200).json({ message: "Logged out successfully" });
  });
};
