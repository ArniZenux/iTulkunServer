const userRoutes = (app, fs, db) => {
  //select all users in tblTulkur
  app.get('/api/users', (req, res, next) => {
    var sql = "SELECT * FROM tblTulkur";
    var parms = []; 
  	db.all(sql, parms, (err, rows) => {
  		if(err) {
  			res.status(400).json({"error":err.message});
  			return;
  		}
  		res.status(200).json({
        "message":"ok", 
        "data": rows});
  	})
  })
  
  //select one user in tblTulkur
  app.get('/api/users/:ID', (req, res, next) => {
    var sql = "SELECT * FROM tblTulkur where ID = ?"
    var params = [req.params.ID]
    db.get(sql, params, (err, rows) => {
  		if(err) {
  			res.status(400).json({"error":err.message});
  			return;
  		}
  		res.status(200).json({
        "message":"Get - Id",
        "data": rows});
  	})
  })
  
//https://blog.alexdevero.com/react-express-sqlite-app/
//http://knexjs.org/
/*
  //Add new user in tblTulkur
  app.post('api/users', (req, res, next) => {
    var postData = req.body; 
    var sql = 'INSERT INTO tblTulkur(KT, Nafn,Simi, Netfang VALUES('?') '; 
    db.run(sql, (err, rows) => {
      if(err) {
        res.status(400).json({"error":err.message});
      }
      res.status(200).json({
        "message":"post-id"; 
      })
    } 
  })

  //Update one user in tblTulkur
  app.put('')  
  //Remove one user in tblTulkur
  
  /*
  app.get("/api/users", (req, res) => {
    fs.reaor) {
        throw err;
      }

      res.send(JSON.parse(data));
    })
  })
  */
}

module.exports = userRoutes;
