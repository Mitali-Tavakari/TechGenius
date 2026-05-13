const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
 
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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
