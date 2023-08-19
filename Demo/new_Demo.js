class Product {
    name;
    price;
    desc;
    constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.desc = d;
    }
    display() {
        // print the product
    }
}
const p = new Product("Bag", 100, "a cool bag");
console.log(p)
