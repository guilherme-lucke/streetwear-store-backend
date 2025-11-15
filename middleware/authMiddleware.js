// middleware/authMiddleware.js
exports.isLoggedIn = (req, res, next) => {
  if (!req.session.userId) {
    return res
      .status(401)
      .json({ message: "You must be logged in to perform this action." });
  }
  next(); // Se estiver logado, pode prosseguir para a próxima função (o controlador)
};
