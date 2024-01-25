const app = require("./app");
const dontenv = require("dotenv");
const connectDB = require("./config/database");

// config
dontenv.config({ path: "backend/config/config.env" });

// connecting to database
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is woriking on http://localhost:${process.env.PORT}`);
});

module.exports = app;
