// const sayHello = () => console.log("Hello all");
// const sayHello1 = () => console.log("Hello all 1");

// module.exports = {
//     sayHello,
//     sayHello1
// }

class Hello{
    static sayHello = () => console.log("Hello all");
    static sayHello1 = () => console.log("Hello all 1");
}
// const h = new Hello()
module.exports = Hello