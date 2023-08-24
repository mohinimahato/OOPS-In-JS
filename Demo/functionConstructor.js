function Product(n, d, p) {
    this.name = n;
    this.price = p;
    this.desc = d;
}
const p = new Product("Bag", 100, "a cool bag");
console.log(p)
// Product { name: 'Bag', price: 'a cool bag', desc: 100 }


