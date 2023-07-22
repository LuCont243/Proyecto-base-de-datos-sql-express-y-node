import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("registro");
});

app. listen (3000, function(){
    console.log("Servidor creado http://localhost3000")
});

