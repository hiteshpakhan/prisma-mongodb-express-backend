import "dotenv/config";
import express from "express";
const app = express();
const PORT = process.env.PORT || 4000

app.get("/", (req, res)=>{
    return res.send("he there ...");
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));