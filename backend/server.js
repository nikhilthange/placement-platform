require("dotenv").config();
console.log("MONGO_URI =", process.env.MONGO_URI);

const app = require("./src/app");

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});