import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "simple_restful_api",
  waitForConnections: true,
  connectionLimit: 10,
});

pool.on("error", (err) => {
  console.error("Database error:", err);
});

pool.on("connection", () => {
  console.log("Database connected");
});

export default pool;
