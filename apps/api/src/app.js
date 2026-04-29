const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const prisma = require("./config/prisma");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/api/health", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      ok: true,
      service: "api",
      db: "connected"
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      db: "error",
      message: error.message
    });
  }
});

module.exports = app;