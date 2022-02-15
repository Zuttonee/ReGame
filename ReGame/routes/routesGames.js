"use strict";

const gameController = require('../controllers/gameController');

function routeGames(app){

    app.route('/games') //URL pattern ie. http://localhost:8080/games
        .get(gameController.getAllGames);//if GET method is requested
}

module.exports = { routeGames };