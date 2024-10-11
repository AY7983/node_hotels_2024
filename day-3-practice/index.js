const express = require('express');
const app = express();
 
app.get('/',(req,res)=>{
  res.end("Hello World");
})
app.get('/weather',(req,res)=>{
   const weather = {
    temp: 36,
    condition: 'rainy',
    city: 'muradnagar'
   } 
   res.send(weather);
})
app.listen(3000, (err)=>{
   if(err){
    console.log(err);

   }
   else{
    console.log("server is in running on 3000");
   }
})





// <------- day-4  -------->
// db.students.insertOne({'name':'anju','age': 34 , 'grade': 'A'});
// db.employees.updateOne({'name':'John'},{$set: { 'age': 30 }});
// db.products.deleteOne({'name':"Product A" });
// db.orders.find({'totalamount': { $gt: '$100'}});
