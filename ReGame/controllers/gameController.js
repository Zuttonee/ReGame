"use strict";

const GamesDB = require('../models/GamesDB');

var gamesDB = new GamesDB();

function getAllGames(request, respond){

    //Call the getAllGames() function in the GamesDB class.
    gamesDB.getAllGames(function(error, result){

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

module.exports = { getAllGames };