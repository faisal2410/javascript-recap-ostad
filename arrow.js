// arrow function and default parameters

// function run(x) {
//     // console.log("hello world");
//     return x * 2;
// }
// // const run2=(m)=>m*2
// const run2=m=>m*2

// const add = (x, y) => x * 2;
// const add = (x, y) => {
//     return x + y;
// };
// const add = (x = 4, y = 1) => {
//     const z=x+y;
//     const l=z+5;
//     const m=(z+l)*2;
//     return m;

// };
// const t=add(10,5)
// const a=t/5;
// console.log("test",a)


// console.log(run(5))
// console.log(add(5, 4));
// console.log(add(8, 7));

// const square = x => x * x

const square = x => {
    const result = x.map(item => item ** 2+100)
    return result;
}

// 2^2 =4

// 2*2 = 4

const x = [2, 3, 4]

console.log(square(x));






