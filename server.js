const express = require("express");
const path = require("path");

const app = express();

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

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

// Export for Vercel
module.exports = app;

// Localhost only
if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}