const express=require('express')
const app=express()
const connectDB = require('./config/connectDB')
let validator = require('validator')
let mongoose = require('mongoose');


connectDB()

let personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true},
    age:Number,
    favoriteFoods:[String]
  })
  
let Person =mongoose.model("Person",personSchema)
//------------------------------------------------------------------------------------------------------
/* let person = new Person({
    name:"Akrem",
    age:25,
    favoriteFoods:["ma9rouna","3ejja","mlewi"]
})
person.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err=>{
        console.error(err)
    })
let person = new Person({
    name:"Fawzi",
    age:50,
    favoriteFoods:["Tajin","Zlebya","Mkhara9"]
})
person.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err=>{
        console.error(err)
    })    
*/

//------------------------------------------------------------------------------------------------------

    /*
    Person.create([{name:"Jack",age:35,favoriteFoods:["pizza","burger","cheese"]},
                   {name:"Mehrez",age:40,favoriteFoods:["kosksi","jelbena","rouz"]},
                   {name:"Ayoub",age:24,favoriteFoods:["pizza","lablebi","mlewi"]}
                ])
    .then(doc => {
        console.log(doc)
    })
    .catch((error) => {
        console.error(error);
       });*/

//------------------------------------------------------------------------------------------------------

       /*Person.find({}, function(err, users) {
        var userMap = {};
    
        users.forEach(function(user) {
          userMap[user._id] = user;
        });
        console.log(userMap)  
      });*/

//------------------------------------------------------------------------------------------------------  
      
/*
Person.findOne({ favoriteFoods: 'mlewi' }, function (err, person) {
    console.log(person);
});
*/

/*
let personId = "60895ba26a31d44bd8b4af93";
Person.findById(personId, function (err, theperson) {
    console.log(theperson)
});
*/

//------------------------------------------------------------------------------------------------------

/*
Person.findOne({
    _id: '60895ba26a31d44bd8b4af93',  // search query
  },function (error, theperson) {
    //console.log(theperson[0].favoriteFoods)
    
    theperson.favoriteFoods.push("hamburger");
    theperson.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err=>{
        console.error(err)
    })
})
*/


//------------------------------------------------------------------------------------------------------



/*
const filter = { name: 'Fawzi' };
const update = { age: 20 };
Person.findOneAndUpdate(filter, update,(err,data) => {
    if(err) console.error(err);
    console.log(data)
} );*/

//------------------------------------------------------------------------------------------------------

/*
const removeID = '60895ea0508c4c24d077033c';
Person.findByIdAndRemove(removeID, function (err, docs) {
    if (err){
        console.error(err)
    }
    else{
        console.log("Removed User : ", docs);
    }
});
*/

//------------------------------------------------------------------------------------------------------    

   /* Person.remove({name:'Mary'}, function (err, result) {
        if (err){
            console.log(err)
        }else{
            console.log("Result :", result) 
        }
    })*/


//------------------------------------------------------------------------------------------------------

Person.find({favoriteFoods: 'burritos'}).sort({name: 1}).limit(2).exec(function(err, result) {
    err ? console.log(err) : console.log(result);
})

//------------------------------------------------------------------------------------------------------

app.listen(5000,(err)=>{
    err ? console.log(err):console.log("server running on port 5000")
})
