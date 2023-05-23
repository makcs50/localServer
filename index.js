import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    city: "Grozny",
    street: "Trosheva",
    building: 7,
  });
});

app.get("/users", (req, res) => {
  res.send(["user1", "user2", "user3"]);
});

app.post("/users", (req, res) => {
  res.send("успех");
});

app.delete("/users:id", (req, res) => {
  res.send("юзер с ID :id удален");
});

app.patch("/users:id", (req, res) => {
  res.send("юзер с ID :id изменен");
});

app.listen(port, () => {
  console.log("сервер запущен");
});
