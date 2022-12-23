var Mongo = require('./mongodb');

async function getDbData(collection, filters){
    try
    {
      let dbo = await Mongo.connectToDatabase();
      let posts = await dbo
                .collection(collection)
                .find(filters);

      return posts.toArray();
    }
    catch (err) {console.log(err);}
}

module.exports = {getDbData};