const jsonData = '{"product": "laptop", "price": 999.99}';
const jsonObject = JSON.parse(jsonData);
console.log(jsonObject.product);

const objectToConvert = { "name": "Bob" , "age": 30 };
console.log(objectToConvert)
const jsonString = JSON.stringify(objectToConvert);
console.log(jsonString);
