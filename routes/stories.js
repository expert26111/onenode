/**
 * Created by Yoana on 10/25/2017.
 */
/**
 * Created by Yoana on 9/12/2017.
 */
var express = require('express');
var db_stories = require('../db_users');
var router = express.Router();
//var babelregister  = require('babel-register')({stage: 1});

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

router.route('/')
    .post(parseUrlencoded, function (request,response){
        //console.log("THE BODY IS ",request.body);
        db_stories.create(request.body.title, request.body.description, new Date(), request.body.img, request.body.link, function(err, id){
            if(err)
            {
                console.log(err);
                response.status(500).json("Internal Server Error");
            }else
            {
                response.status(201).json(id);
            }
        });
    })
    .get(function(request,response){
        db_stories.getAll(function(err, stories){
            if(err)
            {
                response.status(500).json("Internal Server Error");
            }else
            {
                //console.log("THE STORIES ARE ",stories);
                response.status(200).json(stories);
            }
        })
    });

router.route('/:id')

    .delete(function(request,response){
        var storyId = request.params.id;
        //console.log("THE STORIES ARE DELETED ",storyId);
        //console.log("THE STORIES body ARE DELETED ",request.body);

        db_stories.deleteById(storyId, function(err){
            if(err)
            {
                response.status(500).json("Internal Server Error");
            }else
            {
                //  console.log("THE STORIES ARE DELETED ",story);
                response.status(200).json({ message: 'Deleted Story' });
                // response.status(204).end();
            }
        })
    })
    .get(function(request,response){
        var storyId = request.params.id;

        db_stories.getById(storyId, function(err,story){
            if(err)
            {
                response.status(500).json("Internal Server Error");
            }else
            {
                response.status(200).json(story);
                // response.status(204).end();
            }
        })
    })
    .put(parseUrlencoded, function(request,response){
        var storyId = request.params.id;
        console.log('The body is ',request.body);
        db_stories.update(storyId,request.body.title, request.body.description, request.body.img, request.body.link, function(err, story){
            if(err)
            {
                console.log(err);
                response.status(500).json("Internal Server Error");
            }else
            {
                //  console.log("THE STORIES ARE DELETED ",story);
                response.status(200).json(story);
                // response.status(200).json({ message: 'Deleted Story' });
                // response.status(204).end();
            }
        })
    })
    .patch(parseUrlencoded, function(request,response){
        var storyId = request.params.id;
        console.log('The body is ',request.body.title);
        db_stories.update2(storyId,request.body.title,request.body.description, request.body.img, request.body.link, function(err, story){
            if(err)
            {
                console.log(err);
                response.status(500).json("Internal Server Error");
            }else
            {
                //  console.log("THE STORIES ARE DELETED ",story);
                response.status(200).json(story);
                // response.status(200).json({ message: 'Deleted Story' });
                // response.status(204).end();
            }
        })
    })

module.exports = router;// exports the router as a Node module



