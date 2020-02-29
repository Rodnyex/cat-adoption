const express = require("express");
const expresHandlebars = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 3001;

const connection = require("./config/connection");

const routes = require("./routes");

app.use(expres.json());
app.use(express.urlencoded({ entended: true }));
app.engine("handlebars", expresHandlebars({ defaultLayout: "main"}));
app.set('view engine', "handlebars");

app.use(routes);

connection.connect(err => {
  if (err) {
    throw new Error(err)
  }

  app.listen(PORT, function() {
    console.log("Server is working on http://localhost:" + PORT);
  });
});


