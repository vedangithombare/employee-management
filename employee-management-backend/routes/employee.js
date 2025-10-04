import express from "express";
import db from "../database.js";

const router = express.Router();

// Getting all the employee lists
router.get("/employees", (req, res) => {
  db.all("SELECT * FROM employees", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.json(rows);
  });
});

// adding employee
router.post("/add-employee", (req, res) => {
  const { name, email, position } = req.body;

  if (!name || !email || !position) {
    return res.status(400).json({ error: "All fields are required" });
  }

  db.get("SELECT MAX(id) as maxId FROM employees", [], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });

    const nextId = (row.maxId || 1000) + 1;

    db.run(
      "INSERT INTO employees (id, name, email, position) VALUES (?, ?, ?, ?)",
      [nextId, name, email, position],
      function (err) {
        if (err) return res.status(500).json({ error: err.message });

        res.json({ id: nextId, name, email, position });
      }
    );
  });
});

// deleting employee by id
router.delete("/employees/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM employees WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });

    if (this.changes === 0) {
      return res.status(404).json({ error: "Employee not found" });
    }

    res.json({ message: `Employee with ID ${id} deleted successfully` });
  });
});

// Editing employee details by id
router.put("/employees/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, position } = req.body;

  console.log("PUT request for ID:", id);
  console.log("Received data:", req.body);

  db.run(
    `UPDATE employees SET name = ?, email = ?, position = ? WHERE id = ?`,
    [name, email, position, id],
    function (err) {
      if (err) {
        console.error("Error updating employee:", err);
        return res.status(500).json({ error: err.message });
      }

      // Fetch the updated record
      db.get(`SELECT * FROM employees WHERE id = ?`, [id], (err, row) => {
        if (err) {
          console.error("Error fetching updated record:", err);
          return res.status(500).json({ error: err.message });
        }

        console.log("Updated record:", row);
        res.json(row);
      });
    }
  );
});

export default router;
