const express = require("express");
const apiRouter = require("./routes");

const app = express();
app.use(express.json());

app.use(apiRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ errors: { err: err.message } });
});

app.listen(3001, () => console.log("Server listening on port 3001..."));
