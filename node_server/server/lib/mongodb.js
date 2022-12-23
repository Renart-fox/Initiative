var MongoClient = require('mongodb').MongoClient;
fs = require("fs");

var MONGODB_URI = "";

fs.readFile('./server/lib/tokens.tk', (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        json = JSON.parse(data);
        MONGODB_URI = json.MONGODB_URI;
    }
})

async function connectToDatabase() {
    try{
        client = await MongoClient.connect(MONGODB_URI);
        var dbo = client.db("jdr");
        return dbo;
    }
    catch(err) {console.log(err);}
}

module.exports = {connectToDatabase}