const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(express.json());
const path = require("path")

app.use(express.static(path.join(__dirname, "client", "build")))

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        // express-jwt gives the 401 status to the err object for us
        res.status(err.status);
    }
    return res.send({ message: err.message });
 });

app.get("*", (req, res) => {
     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

 