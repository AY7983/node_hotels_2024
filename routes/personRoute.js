const express = require('express');
const router = express.Router();
const  Person = require('../models/Person');


//POST route to add a person
router.post('/add', async (req,res)=>{
try{
   const data  = req.body; //Assuming the request body contains the present data
   
   //Create a new  Person document using the mongoose model.
   const newPerson = new Person(data);

  //Save the new Person to the database
    const response = await newPerson.save();
    console.log('data saved successfully');
    res.status(200).json(response);
}
catch(err){
   console.log(err);
   res.status(500).json({error: 'Internal Server Error'});
}
})
//Get Method to get the person.
router.get('/',async (req,res)=>{
  try{
     const data = await Person.find();    // Person.find n person collection k sare data ko de diya.
     console.log('data fetched');
     res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})
router.get('/:workType', async(req,res)=>{
  try{
  const workType = req.params.workType;    //Extract the work type from the URL parameter
  if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
    const response = await Person.find({work: workType});
    console.log("data is fetched acc to worktype");
    res.status(200).json(response);
  }
  else{
    res.status(404).json({error: 'Invalid work type'});
  }
}catch(err){
  console.log(err);
}})
router.put('/:id', async(req,res)=>{
  try{
     const personId = req.params.id;       // Extract the id from the URL parameter
     const updatedPersonData = req.body;    //Updated data for the person
     const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
      new: true,              //return the updated document
      runValidators: true,    //Run Mongoose Validation
    })
    if(!response){
      return res.status(404).json({ error: 'Person not found'});
    }
    console.log('data updated')
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Invalid work type'});

  }
})
router.delete('/:id',async(req,res)=>{
  try{
      const personId = req.params.id;
      const response = await Person.findByIdAndDelete(personId);
      console.log("person deleted successfully");
      res.status(200).send(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Invalid work type'});

  }
})

module.exports = router;