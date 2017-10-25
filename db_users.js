/**
 * Created by Yoana on 10/25/2017.
 */
/**
 * Created by Yoana on 9/12/2017.
 */

var db = require('./db.js')
    , async = require('async');



exports.create =  function(title , description , date , img , link,  done) {
    var values = [title, description, date, img , link]

    db.get().query('INSERT INTO stories ( title, description, date_entry, ImgLink , Link) VALUES(?, ? , ? , ? , ?)', values, function(err, result) {
        if (err) return done(err)
        console.log('the returning value ',result);
        //  return result.insertId;
        done(null, result.insertId)
    })
}

exports.update =  function(id,title,description,img,link, done) {

    var values = [ title, description, img , link ,id]

    db.get().query('UPDATE stories SET  title = ? , description = ? , Img = ? ,  Link = ? WHERE Id = ? ' ,[values.title, values.description,values.img,values.link,values.id], function(err, result) {
        if (err) return done(err)
        console.log('the returning value ',result);
        //  return result.insertId;
        done(null, result)
    })
}


exports.update2 =  function(id, title, description, Img, Link, done) {
    //console.log("the whole body ",body)
    db.get().query('UPDATE stories SET title = ?, description = ? , Img = ? ,  Link = ? WHERE Id = ? ' , [title,description,Img,Link, id], function(err, result) {
        if (err) return done(err)
        console.log('the returning value ',result);
        //  return result.insertId;
        done(null, result)
    })
}


exports.getById =  function(storyId ,done) {

    db.get().query('SELECT * FROM stories WHERE Id = ?', storyId, function(err, rows) {
        if (err) return done(err)
        //console.log('the returning value ',result);
        //  return result.insertId;
        done(null, rows)
    })
}

exports.getAll = function(done) {
    db.get().query('SELECT * FROM stories', function (err, rows) {
        if (err) return done(err)
        done(null, rows)
    })
}

exports.deleteById = function(storyId,done) {
    //console.log("THE ID INSIDE DELETE ",storyId);
    db.get().query('DELETE  FROM stories WHERE Id = ?', storyId, function (err, rows) {
        if (err) return done(err)
        //console.log("THE DELETED ROWS INFO ",rows);
        done(null, rows)
    })
}

