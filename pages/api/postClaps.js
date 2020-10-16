// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mongoClient = require('mongodb').MongoClient


export default (req, res) => {
  mongoClient.connect(process.env.MONGODB_URL, function(err, db){
    if (err) throw err;
    var dbo = db.db("db");
    dbo.collection("claps").findOne({slug: req.query.slug}, function(err, result){
      if(err) throw err;
      if(!result){
        dbo.collection("claps").insertOne({slug: req.query.slug, claps: 1}, function(inerr, inres){
          if(inerr) throw inerr;
          console.log('first clapsed');
          res.status(201);
          res.json({});
          db.close();
        })
      }
      else{
        
        dbo.collection("claps").updateOne({slug: req.query.slug}, {$inc: {claps: 1}}, function(inerr, inres){
          if(inerr) throw inerr;
          res.status(201);
          res.json({});
          db.close();
        })        
      }
    })
  })
}
