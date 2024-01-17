const express = require("express");
const router = express.Router();
const db = require("../../db/knexfile");
const { authenticateToken } = require("../../middleware/authenticateToken");

router.delete("/", authenticateToken, async (req, res) => {
    const { managerId } = req.body;
  
    if (!managerId) {
        return res.status(400).json({ error: "Please provide managerId" });
      }

    try {
        const managerExists = await db("teams").where({ id: managerId }).first();

        if (!managerExists) {
            return res.status(404).json({ error: "Manager not found" });
          }


         

      res.status(201).json({ message: "Team deleted successfully" });
    } catch (error) {
      console.error("Error deleting team:", error);
      res.status(500).json({ error: "Error deleting team" });
    }
  });
  
  module.exports = router;
  