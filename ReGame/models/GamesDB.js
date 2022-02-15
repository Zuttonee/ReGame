"use strict";

//This if to get the connection to the database
var db = require('../db-connection');//reference of db-connection.js

class GamesDB{

    getAllGames(callback){
        var sql = "SELECT * FROM game_review.game";

        //This to call the built-in query function in the database connection
        db.query(sql, callback);
    }

}

module.exports = GamesDB;