var sqlite3 = require('sqlite3').verbose();
var dbase = './database/TulkurDATA.db';

var db = new sqlite3.Database(dbase, (err) => {
	if(err){
		return console.log(`message: ${err}`);
	}
	console.log("Connected to the database system");
}) 

db.serialize(function() {
	
});

module.exports = db;
