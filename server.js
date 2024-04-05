import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Yaaaay, you've done it!");
});

app.get("/", (req, res) => {
  let searchQuery = req.query.search;
  res.send("Hello World! You searched for " + searchQuery);
});

app.get("/chocolate", (req, res) => {
  let searchQuery = parseInt(req.query.amount);
  res.send(`Gimme ${searchQuery} chocolates!`);
});

app.get("/about", (req, res) => {
  res.send("<h1>Hi, I am Rabia!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>My Contact number is</h2> 0123456789!");
});

app.get("/node", (req, res) => {
  res.send("Welcome to the Node.js endpoint!");
});

app.get("/cyf", (req, res) => {
  res.send("Welcome to the CodeYourFuture endpoint!");
});

app.get("/multiply", (req, res) => {
    
  let value1 = parseInt(req.query.value1);
  let value2 = parseInt(req.query.value2);

  if (isNaN(value1) || isNaN(value2)) {
    res.status(400).send("Please provide valid numbers for value1 and value2.");
    return;
  }
  let result = value1 * value2;
  res.send(`The result of ${value1} multiplied by ${value2} is ${result}.`);
});




app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
