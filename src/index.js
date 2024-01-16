import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  const rdm = Math.random();
  if (rdm > 0.5) return next(rdm);

  res.json(`Hello World: ${rdm}!`);
});

app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);

  res.json(`Hello Error: ${error}!`);
});

console.log(`Listening on http://localhost:${process.env.PORT}`);
app.listen(process.env.PORT);
