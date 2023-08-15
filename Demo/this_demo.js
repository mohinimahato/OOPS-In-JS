let Iphone = {
    name: "Iphone 13 pro",
    price: "100000",
    description: "Newapple Iphone",
    rating: 4.8,
    display() {
        console.log("First Display", this)
    }
}
let Macbook = {
    name: "Macbook M2",
    price: "100000",
    description: "New apple Macbook M2",
    rating: 4.5,
    display() {
        console.log("Second Display", this)
    }
}
// Calling context, we are calling display in the context of iPhone
Iphone.display();
/*
{
  name: 'Iphone 13 pro',
  price: '100000',
  description: 'Newapple Iphone',
  rating: 4.8,
  display: [Function: display]
}
*/

// If we do Macbook.display() it will show the display in context of Macbook