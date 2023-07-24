import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalle.routes.js";

// Set up Environmental Variables
dotenv.config();
// Set up Express App
const app = express();
app.use(cors());
// specify weight of the payload to send
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
