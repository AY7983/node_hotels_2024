/*
function callback(){
    console.log(`now adding is successful complete`);
}

const add = function(a,b,callback){
    var result = a+b;
    console.log(`result : ${result}`);  //main function work complete
    callback();
}
add(3,4,callback);
*/

// const add = function(a,b,callback){
//     var result = a+b;
//     console.log(`result : ${result}`);  //main function work complete
//     callback();
// }
// add(2,3,function(){
//     console.log('add successfully');
// })

// add(2,3,()=>{
//     console.log('added successfully');
// })

// -------------npm packages--------------
// var fs = require('fs');
var os = require('os');

var user = os.userInfo(); //inbuilt function in os library
console.log(user);
 // console.log(user.username);
// fs.appendFile('greeting.txt','Hi'+ user.username +'!\n',()=>{
//     console.log('file is created');
// })
console.log(os);
// console.log(fs);



//<------ FOR JSONFORMAT ----->

// 1. String into Object(conversion)

// const jsonString = '{"name" : "John" , "age" : 30 , "city" : "New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

// 2. Object into String(conversion)

// const objectToConvert = {name: "Alice" , age: 25};
// console.log(objectToConvert);
// console.log(typeof(objectToConvert));   //object
// const jsonStringified = JSON.stringify(objectToConvert);

// console.log(jsonStringified); //string
// console.log(typeof(jsonStringified));

//so that json data can be sended from server to server.



// <--- make a server with the help of express js --->
const express = require('express');
const app = express();      //app is like instance of express
const db = require('./db');
const bodyParser = require('body-parser')
app.use(bodyParser.json());    //body-parser is a middleware jo incoming http request hota h vo khud p khud usme se body ko extract krta h jisme json data hota h vo use object bnata h use hum req.body k sath deta h
require('dotenv').config();
const PORT = process.env.PORT || 3000; 


app.get('/',(req,res)=>{
  res.send("welcome to our Hotel...")
})

const personRoute = require('./routes/personRoute');
const menuRoute = require('./routes/menuRoute');

// Use the routers
app.use('/person', personRoute);
app.use('/menu', menuRoute);


app.listen(PORT, ()=>{  
  console.log("listening on port 3000");
});

