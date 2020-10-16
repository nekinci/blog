const mongoClient = require('mongodb').MongoClient

export default (req, res) => {
    mongoClient.connect(process.env.MONGODB_URL, function(err, db){
        if (err) throw err;
        var dbo = db.db("db");
        dbo.collection("claps").findOne({slug: req.query.slug??''}, function(err, result){
          if(err) throw err;
          if(!result){
            db.close();
            return res.json({slug: req.query.slug??'', claps: 0});
          }
          else {
              db.close();
              return res.json(result);
          }
        })
      })
}