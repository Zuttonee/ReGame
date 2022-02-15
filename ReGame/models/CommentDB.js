"use strict";

var db = require('../db-connection');

class CommentsDB{

    getAllComments(callback){
        var sql = "SELECT * FROM game_review.comment";
        db.query(sql, callback);
    }

    addComment(comment, callback){
        var sql = "INSERT INTO comment (movieId, movie, review, username, rating, datePosted) VALUES (?, ?, ?, ?, ?, ?)";

        db.query(sql, [comment.getMovieId(), comment.getMovie().trim(), comment.getReview(), comment.getUsername(), comment.getRating(), comment.getDatePosted()], callback);
    }
}

module.exports = CommentsDB;