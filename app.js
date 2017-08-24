var express = require("express");
var bodyParse = require("body-parser");
var mongoose = require("mongoose");
var methodOve = require("method-override");



var app = express();

mongoose.connect("mongodb://vuvu:todo@ds153123.mlab.com:53123/vu_todo_app");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParse.urlencoded({extended: true}));
app.use(methodOve("_method"));

var taskSchema = mongoose.Schema({
   task: String
});

var Task = mongoose.model("Task", taskSchema);

/*Task.create({
   task: "Dishes"
});*/

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running...") 
});

app.get("/", function(req, res){
   Task.find({}, function(err, fTasks){
      if(err){
         console.log(err);
      } else {
         res.render("index", {tasks: fTasks});
      }
   });
});

app.post("/", function(req, res){
   Task.create(req.body.ntask, function(err, ntask){
      if(err){
         console.log(err);
      } else {
         res.redirect("/");
      }
   });
});

app.delete("/:id", function(req, res){
   Task.findByIdAndRemove(req.params.id, function(err){
      if(err){
         console.log(err);
      } else {
         res.redirect("/");
      }
   });
});