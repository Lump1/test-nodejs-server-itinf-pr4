import express from "express";

const app = express();
const port = 8080;

app.get('/hello', (req, res) => {
  res.send('Hello, Docker!');
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});