"use strict";

const commentController = require('../controllers/commentController');

function routeComments(app){

    app.route('/comments')
        .get(commentController.getAllComments)
        .post(commentController.addComment);
}

module.exports = { routeComments };