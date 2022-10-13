import { api } from "@serverless/cloud";

api.get("/", async (req, res) => {
  res.send("<h1>Hello Serverless Cloud!</h1>");
});

api.get("/git", async (req, res) => {
  res.send("<h1>Hello Git!</h1>");
});
