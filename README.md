## **Object Oriented Programming In JS**
---
-  In order to prepare big applications where we have a lot of data coming here and their, and you want to represent the logic in terms of frontend backend and whereever you are storing it we need to have some blueprinting mechanism. So that we can prepare a logical mental model.

- Once we have the blueprinting then we can start populating values to it and construct real life enities. This blueprinting paradigm is known as *`Object oriented programming`*.

- OOPs can be a bit different from programming language to programming language. Because there are sometimes language based restrictions

- In Javascript the OOPs is completely different maybe the keywords have similarities with other languages but the concept and the usage are different from them

- Preparing the blue print of the mental model of whatever real life entity we have is known as *`class`*

- Once the blueprint is ready we can created multiple real life entity. ex: products. These real life entities are called *`objects`*.

- *`Properties`* of an object helps us to uniquely identify two objects but behaviour is same(ex: Display a product, buy a product etc). In technical term the properties are termed as *`data members`* and the behaviour are called *`member function`*

- Class Demonstration Screenshot:
<p align="center">
  <img width="100%" height="100%" src="./Notes-Screenshots/OOPs.png">
</p>

- In JS we have a *`class`* keyword. Using which we can prepare blueprint.
```Javascript

class <name>{
    // Properties
    // Behaviour
}
```
Using this we can create entities/objects

- Now in order to create and manage the entities we have two new keywords *`new`* and *`this`*

Now these 3 kewords together i.e  *`class`*, *`new`* and *`this`* forms the basis of how we write OOPs in JS

-Syntax to create a  [Class](./Demo/class_Demo.js)
```Javascript
class Product {
    // no need of let var const
    name;
    price;
    discount;
    desc;

    display() {
        // no need to function keyword
    }
    buy(){
        // no need to function keyword
    }
}
```

- Syntax to create an [object](./Demo/class_Demo.js)
```Javascript
const p = new Product();
```
To understand the syntax of object, we need to first understand `this`

---

- [*`this`* ](./Demo/this_demo.js)keyword: except one case `this` always refers to the calling site/context. From what context and what reference we are calling it makes the difference . **this** will not always point to the same object from which we are making the function call 

- The one case where *`this`* doesn't refer to the calling context is when *`arrow function`* is getting used. Inside arrow function this doesn't refer to the calling context. By default in arrow function this is going to be resolved lexically. [Code Demo](./Demo/this_demo2.js)

---

- [*`new`*]() keyword: The sole purpose of *new* keyword is to create a brand new plain javascript empty object nothing more nothing less


---

```Javascript
class Product {
    // no need of let var const
    name;
    price;
    discount;
    desc;

    display() {
        // no need to function keyword
    }
    buy(){
        // no need to function keyword
    }
}
const p = new Product()

```
- When we write the name of the class (and in this case Product) and pairing it up with a pair of parenthesis, this particular syntax is calling a *`constructor`* of the class.

- Now *`what's the constructor`*? -> Whenever we create a object of a class, *`constructor`* is the first function that's actually getting called. 

1. What's the purpose of this constructor?
-> Let's say we are creating a object we want to initialize the object with some corresponding values or let's say setup some connection whatever we want to do which should happen when we are creating a new object all of that logic we put inside the constructor. 

-> It's a *special* method
-> In the above example we have not written any constructor so javascript with use the default constructor. So, whenever we write the **class name** with a pair of **()** it calls the default constructor all together
So, now if we do 
```Javascript
console.log(p);

// Product { name: undefined, price: undefined, desc: undefined }
// there's no error at all it calls the default constructor and since there's no property assigned all of them returns undefined
```

2. Let's say we want to initialize our own constructor. The *new* keyword is creating a brand new plain empty object and then actually we are calling the constructor

3. We can create a constructor using the keyword *constructor(){}*

```Javascript
constructor(){

}
```

4. Now, as we know the *new keyword* creates a brand new empty object and we are calling the *constructor* product(). This constructor is getting called w.r.t to the brand new plain empty object, so this brand new plain empty object is the calling context. Now if we use *this* inside *contructor(){this}*. Then *this* keyword will point to brand new plain empty object. 
Now we can do something like
```Javascript
constructor(n,p,d){
this.name = n;
this.price = p;
this.desc = d;
}
```
So, the contructor is pointing to the plain empty object and we are manually creating a key value pair where the key is name and the value is whatever we pass inside the name.
For example:

```Javascript
const p = new Product("Bag", 100 ,"a cool bag");
// Product { name: 'Bag', price: 100, desc: 'a cool bag' }
```

5. A question might pop that a constructor is a method that means its like a function and in a function we return something but here we are not returning anything. ->> Inside the constructor if we return anything primitive then there's no effect it'll technically just avoid it, because constructor is meant to do something with an object, it's meant to return an object. If we return a primitive the sole purpose of constructor is gone. 

***Important*** We can't do *constructor overloading in JS*

- Function Constructor: Whatever we are doing with class we can achieve it with functions as well and the behaviour is also same, class is just a wrapper over
```Javascript
function Product(n, d, p) {
    this.name = n;
    this.price = p;
    this.desc = d;
}
const p = new Product("Bag", 100, "a cool bag");
console.log(p)
// Product { name: 'Bag', price: 'a cool bag', desc: 100 }
```

----
- What is an *access modifier* ?
-> Access modifier's maintaince what is visible outside and what is not visible outside
Javascript has a shorthand: *`#NameOfTheVariableThatNeedsToBePrivate`*

- Abstraction: 
----
