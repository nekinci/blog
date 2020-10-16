// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mongoClient = require('mongodb').MongoClient


export default (req, res) => {

  mongoClient.connect(process.env.MONGODB_URL, function(err, db){
    if (err) throw err;
    var dbo = db.db("db");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("claps").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  })
  res.statusCode = 200
  console.log(req.connection.remoteAddress)
  res.json(req)
}
