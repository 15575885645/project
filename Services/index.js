const express = require("express");
const app = express();

app.get("/user", function (req, res) {
    res.send(res)
})

app.listen(9093);