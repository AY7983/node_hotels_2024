const products = [
  {
    name: 'phone' ,
    price: 12000 ,
    inStock: false
  },
  {
    name: 'LED' ,
    price: 120000 ,
    inStock: true
  },
  {
    name: 'WS' ,
    price: 15000 ,
    inStock: false
  }
]
products.forEach(product => {
  console.log(product);
});