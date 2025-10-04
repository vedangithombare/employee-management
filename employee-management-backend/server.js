import express from "express";
import db from "./database.js";
import router from "./routes/employee.js";
import cors from "cors";

const app = express();

app.use(express.json());
const PORT = 5000;
app.use(cors());

app.use("/api", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
