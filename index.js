import { api } from "@serverless/cloud";

api.get("/", async (req, res) => {
  res.send("<h1>Hello Serverless Cloud!</h1>");
});

api.get("/git", async (req, res) => {
  res.send("<h1>Hello Git!</h1>");
});


api.get("/pr", async (req, res) => {
  res.send("<h1>Hello PR!</h1>");
});

api.get("/pr2", async (req, res) => {
  res.send("<h1>Hello PR2!</h1>");
});

api.get("/pr3", async (req, res) => {
  res.send("<h1>Hello PR3!</h1>");
});
api.get("/pr4", async (req, res) => {
  res.send("<h1>Hello PR3!</h1>");
});