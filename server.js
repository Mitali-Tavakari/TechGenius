const express = require("express");
const app = express();

// EJS
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

// Export app for Vercel
module.exports = app;

// Localhost only
if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}