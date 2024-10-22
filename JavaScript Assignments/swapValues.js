function swapVal(a,b) {
    console.log("Before swapping the values are: a =", a, ", b =", b);
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("After swapping the values are: a =", a, ", b =", b);
}
let a=5;
let b=10;
swapVal(a, b);
