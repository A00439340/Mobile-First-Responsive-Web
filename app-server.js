const SERVER_PORT = 8148;​

var express = require('express');​
var fs = require('fs');​
const FILE_NAME = "result.txt";​


//CORS Middleware, causes Express to allow Cross-Origin Requests​

// Do NOT change anything here​

var allowCrossDomain = function (req, res, next) {​

    res.header('Access-Control-Allow-Origin', '*');​

    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');​

    res.header('Access-Control-Allow-Headers','Content-Type');​

    next();​

};​

​
//set up the server variables​

var app = express();​
app.use(express.bodyParser());​
app.use(allowCrossDomain);​
app.use('/scripts', express.static(__dirname + '/scripts'));​
app.use('/css', express.static(__dirname + '/css'));​
app.use(express.static(__dirname));​

​
//now start the application server​

var server = app.listen(SERVER_PORT, function () {​
        console.log('Listening on port %d',​
                server.address().port);​

});


app.post('/saveUniversity', function (request, response) {​
   ​
    console.log("saveUniversity being executed in " + __dirname);​   
    console.log(request.body);​    
    
    var uni = request.body;
    ​mongodb.connect(connectionString, function(err, db){
        if(err){
            throw err;
        }
        var mongoConnection = db.db(database);
        mongoConnection.collection("uni").insertOne(uni,function(err,result){
            if(err){
                throw err;
            } 
            result.send(response);
            db.close;

        })
    })
    
});

app.post('/getUniversity', function (request, response) {​

    console.log("getUniversity being executed in " + __dirname);​
    console.log(request.body);​
        ​
    var uniName = request.params.name;
    var uniNameJson = {name:uniName};
    ​
    ​mongodb.connect(connectionString, function(err, db){
        if(err){
            throw err;
        }
        var mongoConnection = db.db(database);
        mongoConnection.collection("uni").findOne(uniNameJson).then(function(err, result){
            if(err){
                throw err;
            }
            if(result == null){
                console.log("could not find the university")
            }
            else{
                console.log("found university");
                response.send(result);
            }
            db.close();
        });
    })
    
});

app.post('/deleteUniversity', function (request, response) {​

    console.log("deleteUniversity being executed in " + __dirname);​

    console.log(request.body);​
      ​
    var uniName = request.params.name;
    var uniNameJson = {name:uniName};​

    mongoConnection.collection("uni").deleteOne(uniNameJson,function(err, collection){
        if(err){
            throw err;
        }
        if(collection.deletedCount < 1){
            console.log("there is not university to delete");
            response.send("there is not university to delete");
        }
        else{
            console.log("one university to delete");
            response.send("one university to delete");
        }
        db.close();
    
    })
    
});


app.post('/getAllUniversities', function (request, response) {​

    ​

    console.log("getAllUniversities being executed in " + __dirname);​

    ​

    /**​

        * Implement the rest!​

        * ​

        * Reads the university object array and returns it (if not empty).​

        * ​

        * ​

        */​



});


            var mongodb = require('mongodb');​

            var user = 't_kudaibergenov';​
            var password = 'A00439340';​
            var database = 't_kudaibergenov';​
            
            //These should not change, unless the server spec changes​
            var host = '127.0.0.1';​
            var port = '27017'; // Default MongoDB port for all the students


// Now create a connection String to be used for the mongo access​

var connectionString = 'mongodb://' + user + ':' + password + '@' +​

    host + ':' + port + '/' + database;​

//will create: ​

// mongodb://dk_govindaraj:A00421724@127.0.0.1:27017/dk_govindaraj​

//now connect to the db​

mongodb.connect(connectionString, function (error, db) {​

    ​
    if (error) {​
    throw error;​
    }//end if​

    /**​
    *  code if successfully accessing the db!!​
    */​

});

app.listen(SERVER_PORT);