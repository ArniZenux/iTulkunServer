const userRoutes = require('./users');
const verkefniRoutes = require('./verkefni');

var appRoutes = (app, fs, db) => {

  app.get('/', (req, res, next) => {
  	res.json(
      [
        {
          id: 1,
          username : 'Arni'
        },
        {
          id: 2,
          username : 'Robert'
        }]);
    //res.render("_index");
  });
  
  userRoutes(app, fs, db);

  verkefniRoutes(app, fs, db); 
}

module.exports = appRoutes;
