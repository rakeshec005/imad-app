var express = require("express"); //used to create webservers
var morgan = require("morgan"); // output logs of a server
var path = require("path");

var app = express();
app.use(morgan("combined"));

let articleOne = {
  title: "Article One | Rakesh",
  heading: "Article first",
  date: "Sep 5, 2017",
  content: `
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, optio enim! Vel enim placeat dolor laboriosam
  debitis mollitia soluta quas ducimus in nihil quaerat repellat consequatur animi nemo, veniam fugiat!</p>
  
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, optio enim! Vel enim placeat dolor laboriosam
  debitis mollitia soluta quas ducimus in nihil quaerat repellat consequatur animi nemo, veniam fugiat!</p>

  `
};

let createTemplate = data => {
  let title = data.title,
  date = data.date,
  content = data.content;
  let htmlTemplate = `
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${title}</title>
      <link rel="stylesheet" href="/ui/style.css">
  </head>

  <body>
      <div class="container">
          <a href="/">Home</a>
          <hr>
          <h3>Article First</h3>
          <div>${date}</div>
          <div>
            ${content}
          </div>
      </div>
  </body>

  </html>
  `;
  return htmlTemplate;
};
// Handling specific url
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "ui", "index.html"));
});

app.get("/article-one", (req, res) => {
  res.send(createTemplate(articleOne));
});

app.get("/article-two", (req, res) => {
  res.sendFile(path.join(__dirname, "ui", "article-two.html"));
});

app.get("/article-three", (req, res) => {
  res.sendFile(path.join(__dirname, "ui", "article-three.html"));
});

app.get("/ui/style.css", function(req, res) {
  res.sendFile(path.join(__dirname, "ui", "style.css"));
});

app.get("/ui/madi.png", function(req, res) {
  res.sendFile(path.join(__dirname, "ui", "madi.png"));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function() {
  console.log(`IMAD course app listening on port ${port}!`);
});
