const express = require("express");

const router = express.Router();
const authMiddleware=require("../middleware/authMiddleware");
const adminMiddleware=require("../middleware/adminMiddleware");
const {
  register,
  login,
  profile
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get(
  "/profile",
  authMiddleware,
  profile
);
router.get(
  "/admin",
  authMiddleware,
  adminMiddleware,
  (req, res) => {
    res.json({
      message: "Welcome Admin"
    });
  }
);

module.exports = router;