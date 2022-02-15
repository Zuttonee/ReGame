"use strict";
const CommentsDB = require('../models/CommentDB');
const Comment = require('../models/Comment');

var commentDB = new CommentsDB();

function getAllComments(request, respond){

    commentDB.getAllComments(function(error, result){

        if (error){
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

function addComment(request, respond){
    var now = new Date();
    var comment = new Comment(null, request.body.movieId, request.body.movie, request.body.review, request.body.username, request.body.rating, now.toString());

    CommentsDB.addComment(comment, function(error, result){

        if (error){
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

module.exports = { getAllComments, addComment };