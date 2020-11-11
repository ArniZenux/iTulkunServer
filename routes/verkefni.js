const verkefniRoutes = (app, fs, db) => {
    
    /*app.get('/api/project', (req, res, next) => {
        res.json({"message": "Verkefni"});
        //res.render("_index");
    });*/
    
    //get all project. 
    app.get('/api/project', (req, res, next) => {
        try {
            var sql = "SELECT * FROM tblVerkefni";
            var params = [];
            db.all(sql, params, (err, rows) => {
                if(err){
                    res.status(400).json({"error":err.message});
                    return;
                }
                res.status(200).json({
                   "message":"ok", 
                   "data": rows});
            })
        }
        catch(e){
            next(e); 
        }
    })

    //get one project 
    app.get('/api/project/:id', (req, res, next ) => {
        var sql ="SELECT * FROM tblVerkefni WHERE = ?:id";
        var params = [];
        db.all(sql, params, (err, rows) => {
            if(err){
                res.status(400).json({"error": err.message});
                return ; 
            }
            res.status(200).json({
                "message":"ok",
                "data": rows});
            })
        })

    //get one project by interpreter

    //put 

    //UPDATE
    // get one update - change project name. 
    app.post('/api/project/:id', (req, res, next ) => {
        var sql ="UPDATE Heiti SET name =' sadf' WHERE Id = id";
        var params = [];
        db.all(sql, params, (err, rows) => {
            if(err){
                res.status(400).json({"error": err.message});
                return ; 
            }
            res.status(200).json({
                "message":"ok",
                "data": rows});
            })
        })
    } 


module.exports = verkefniRoutes;
