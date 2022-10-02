// global scope
// local scope
// block scope

// let x = 10;

{
    // var x = 10;
    // let x = 10;
    // console.log('inside block: ', x);
}

// console.log('outside block: ', x);

function add() {
    let total = 3 + 5;
    console.log('inside function: ', total)
}

add();

console.log(total);
