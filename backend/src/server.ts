import "dotenv/config";
import express from "express";
import { router } from "./api/routes/userRoutes.js"
// import cors from "cors";

const app = express();
app.use(express.json());
// app.use(cors()); usado apenas pra testar com um frontend
app.use(router);

const PORT= process.env.PORT || 3000;




app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

