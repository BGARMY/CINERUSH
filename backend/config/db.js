require("dotenv").config();
const mysql = require("mysql2/promise"); // <-- use promise version

// Use promise pool for async/await support
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "BGArmy@2908",
  database: process.env.DB_NAME || "cinerush",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;