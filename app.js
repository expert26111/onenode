/**
 * Created by Yoana on 10/25/2017.
 */
/**
 * Created by Yoana on 9/12/2017.
 */
var express = require('express');
var app = express();
var db_stories = require('./db_users');
var db = require('./db');
var router = require('./routes/stories');
var cors = require('cors');
// var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
// var config = require('./config'); // get our config file
// var port = process.env.PORT || 3000


app.use(cors());
app.use('/stories',router);

// app.use(express.static('./public'));


db.connect(db.MODE_TEST, function(err)
{
    if (err) {
        console.log('Unable to connect to MySQL.')
        process.exit(1)
    } else {
        app.listen(5000, function() {
            console.log('app 1 listening...')
        })
    }
})

app.get('/',function(request,response){
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

})