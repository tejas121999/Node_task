const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect Database
connectDB();

// init middleleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// define routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
