const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');


//POST Method to add a menu Item
router.post('/add', async(req,res)=>{
  try{
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(404).json({error: 'Internal Server Error'});
  }
})

router.get('/',async(req,res)=>{
  try{
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(404).json({error: 'Internal Server Error'});
  }
})
router.get('/:taste', async(req,res)=>{
  try{
  const taste = req.params.taste;    //Extract the work type from the URL parameter
  if(taste == 'sweet' || taste == 'sour' || taste == 'spicy'){
    const response = await MenuItem.find({taste: taste});
    console.log("data is fetched acc to taste");
    res.status(200).json(response);
  }
  else{
    res.status(404).json({error: 'Invalid  menu type'});
  }
}catch(err){
  console.log(err);
}})
router.put('/:id', async(req,res)=>{
  try{
     const menuId = req.params.id;       // Extract the id from the URL parameter
     const updatedMenu= req.body;    //Updated data for the person
     const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenu, {
      new: true,              //return the updated document
      runValidators: true,    //Run Mongoose Validation
    })
    if(!response){
      return res.status(404).json({ error: 'Menu not found'});
    }
    console.log('Menu updated')
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Invalid menu type'});

  }
})
router.delete('/:id',async(req,res)=>{
  try{
      const menu_taste = req.params.id;
      const response = await MenuItem.findByIdAndDelete(menu_taste);
      console.log("menu deleted successfully");
      res.status(200).send(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Invalid menu type'});

  }
})

//comment added for testing purposes
module.exports = router;
