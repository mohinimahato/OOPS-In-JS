const Iphone = {
    name: "Iphone 13 pro",
    price: "100000",
    description: "Newapple Iphone",
    rating: 4.8,
    display: function () {
        const IphoneRed = {
            name: "Iphone Red",
            price: "100000",
            description: "Newapple Iphone Red",
            rating: 4.8,
            print: () => {
                console.log("First Display", this)
            }
        }

        IphoneRed.print()

    }

}
const Macbook = {
    name: "Macbook M2",
    price: "100000",
    description: "New apple Macbook M2",
    rating: 4.5,
    display: function () {
        console.log("Second Display", this)
    }
}
Macbook.display();

// It's getting resolved lexically, the print function doesn't know about this it will go outside and look into the display function if the display function is a normal function it'll know about this and the calling context and if not then it will go out again one function and comes to the global context and in the global context/scope we have global this keyword which is an empty object and that will come as an output
Iphone.display();