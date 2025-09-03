import express from 'express'
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Testing!</h1> <p>Express App</p> <p>Running App</p>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
