import express from "express";
import cors from "cors";
import { connectDb } from "./config/dbConnect.js";
import authRoutes from "./routes/authRoutes.js";
import engineerRoutes from "./routes/engineerRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const allowedOrigins = ["http://localhost:5173"];

const corsOption = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/engineers", engineerRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/assignments", assignmentRoutes);

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB. Server not started.", error);
    process.exit(1);
  }
};

startServer();
