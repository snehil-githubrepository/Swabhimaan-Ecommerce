const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

//methods and all properties of express are in app
require("./db/connection");
const Register = require("./models/registers");

const port = process.env.PORT || 3000;
//this implies wherever we host it, It will get that port number which will be assigned default

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/register.html", (req, res) => {
  res.render("register");
});

app.get("/register.hbs", (req, res) => {
  res.render("register");
});

app.get("/login.html", (req, res) => {
  res.render("register");
});

app.get("/blog.html", (req, res) => {
  res.render("blog");
});

app.get("/index.html", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "register.html"));
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/about.html", (req, res) => {
  res.render("about");
});

app.get("/index.hbs", (req, res) => {
  res.render("index");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/shop", (req, res) => {
  res.render("shop");
});

app.get("/shop.html", (req, res) => {
  res.render("register");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/about.hbs", (req, res) => {
  res.render("about");
});

app.get("/aroma.hbs", (req, res) => {
  res.render("aroma");
});

app.get("/gift_kit.hbs", (req, res) => {
  res.render("gift_kit");
});

app.get("/cart_view.html", (req, res) => {
  res.render("cart_view");
});

app.get("/register");

app.get("/login", (req, res) => {
  res.render("login");
});
//create a new user in our database
app.post("/register", async (req, res) => {
  console.log("registering");

  try {
    const userData = new Register({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });

    const registered = await userData.save();
    console.log({ registered });
    res.status(201).redirect("/");
  } catch (error) {
    console.log({ error });

    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`server is running at port number ${port}`);
});
