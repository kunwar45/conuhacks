const express = require("express");
 
// framesRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /frames.
const routes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

 
// This section will help you get a list of all the users.
// routes.route("/register").get(function (req, res) {
//  let db_connect = dbo.getDb("users");
//  db_connect
//    .collection("frames")
//    .find({})
//    .toArray(function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
// This section will help you get a single frame by id
// routes.route("/frame/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("frames")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
// This section will help you create a new person.
routes.route("/register/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   _id: req.body.username,
   password: req.body.password
 };

 try{
  db_connect.collection("registry").insertOne(myobj, function (err, res) {
    if (err){
      response.json(err)
      
    }
    else{
      console.log("sdasdasd")
      response.json(res);
    }
  });
 } catch (e) {
   
 }

 
});
 
// // This section will help you update a frame by id.
// routes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  let newvalues = {
//    $set: {
//     user: req.body.user,
//     time: req.body.time,
//     emotion: req.body.emotion,
//    },
//  };
//  db_connect
//    .collection("frames")
//    .updateOne(myquery, newvalues, function (err, res) {
//      if (err) throw err;
//      console.log("1 document updated");
//      response.json(res);
//    });
// });
 
// // This section will help you delete a frame
// routes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("frames").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });
 
module.exports = routes;