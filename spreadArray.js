// const number = [2, 4, 1, 9, 3, 5, 26, 7];
const number2 = [32, 45, 67];

// const newArrr = [999, ...number,55, ...number2, 888]
//  const newArrr = [ ...number, ...number2]

// console.log(newArrr);


// console.log(Math.min(3, 2, 4, 2))
// console.log(Math.min(...number))
const number = [2, 4, 1, 9, 3, 5, 26, 7];
// const [a,b,,c]=number
// console.log(a,b,c)

const [a, b,,c, ...rest] = number;
console.log(rest)

// const a = [1, 2, 3];
// // const b = a;
// const b = [...a];


// a.push(88)
// a.push(80)
// // console.log(b)




// console.log('a: ', a);
// console.log('b: ', b);


