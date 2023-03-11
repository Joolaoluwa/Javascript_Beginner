/**
 * Large programs involve complexity, the complexity 
 * comes from size and time to build them.
 * 
 * ABSTRACTION
 * Abstractions hide details and give us to talk about
 * problems at higher (or more abstract) level. When programming
 * we can't rely on all the words we need to be waiting for us
 * in the dictionary. It is useful skill to know when you are working
 * at a low level of abstraction.
 * 
 * HIGHER ORDER FUNCTIONS
 * Functions that operate on other functions either by taking
 * them as arguments or returning them are known as 
 * higher order functions.
 * Higher order functions can abstract over actions, e.g
 * to create a function from a pre existing one
 */

// function repeat(n, action)
// {
//     for (let i = 0; i <= n; i++)
//     {
//         action(i);
//     }
// }
// repeat(3, console.log);

// function lessThan(n)
// {
//     return (m => {
//         return n < m;
//     });
// }

// let lessThan4 = lessThan(3);
// console.log(lessThan4(4));

// function noisy(f)
// {
//     return ((...args) =>
//     {
//         console.log("Called with ", args);
//         let result = f(...args);
//         console.log("Called with ", args, " , returned ", result);
//         return result;
//     })
// }
// noisy(Math.min)(3,2,1);

[1, 2, 3, 4].forEach(c => console.log(c));

let desc = {
    name: "joshua",
    class: 2024,
    dept: "electrical engineering"
};
console.log(desc.name);


