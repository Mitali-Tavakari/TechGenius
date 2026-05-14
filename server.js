const express = require("express");
const app = express();

// Set EJS as templating engine
app.set("view engine", "ejs");

// Static files
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "AI & Technology" });
});

app.get("/blog", (req, res) => {
  res.render("blog", { title: "Blog" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// PORT
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});