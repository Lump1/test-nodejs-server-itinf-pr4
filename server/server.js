import express from "express";

const app = express();
const port = 8080;

app.get('/hello', (req, res) => {
  res.send('Hello, Docker!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});