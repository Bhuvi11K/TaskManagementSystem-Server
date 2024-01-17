const express = require("express");
const router = express.Router();
const db = require("../../db/knexfile");

const { authenticateToken } = require("../../middleware/authenticateToken");

router.post("/", authenticateToken, async (req, res) => {
  const { developer, task } = req.body;

  try {
    await db("tasks").insert({
      developer_id: developer,
      task: task,
    });

    res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Error creating task" });
  }
});

module.exports = router;
