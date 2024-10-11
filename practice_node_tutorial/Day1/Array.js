const prompt = require("prompt-sync")({sight:true});
const guestList = ['shivani','sarita','shruti','vinita','saniya'];
const name = prompt("Enter your name: ");
// guestList.forEach(guest => {
//   if(guest == name){
//     console.log("Welcome to the party ",name);
//   }
//  });


// <---- 2nd way ---->
if(guestList.includes(name)){
     console.log("Welcome to the party ",name);
}
else{
  console.log("Sorry, you're not on the guest list.");
}
