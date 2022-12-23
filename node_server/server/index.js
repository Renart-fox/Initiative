
const express = require("express");
const MongoData = require("./lib/mongoData");

const PORT = 3001;

const app = express();

app.get("/GetCyberpunkMook/:mookname", async function (req, res) {
    mookName = req.params.mookname;
    post = await MongoData.getDbData("cyberpunk_mooks", {
        "mookName": mookName
    });
    console.log(post);
    res.json(post);
});

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});