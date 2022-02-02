// import the Express and the Mongoose packages
import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

// App Config
const app = express();
const port = process.env.PORT || 8001; // to run on port 8001.
const connection_url =
  "mongodb+srv://codingbearda01:<audwkwkd1!>@cluster0.3m51r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Middleware
app.use(express.json());
app.use(Cors());

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));
app.post("/dating/cards", (req, res) => {
  const dbCard = req.bodyCards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener, listen on port 8001
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
