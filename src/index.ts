import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "laga reh chote",
  });
});

app.listen(PORT, () => {
  console.log(`PORT is listening at:${PORT}`);
});
