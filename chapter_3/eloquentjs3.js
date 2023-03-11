let day1 = 
{
    squirrel: false,
    events: ["work","touched tree","pizza","running"]
};

console.log(day1.squirrel);
// -> false
console.log(day1.wolf);
// -> undefined
day1.wolf = false;
console.log(day1.wolf);
// -> false
delete day1.wolf;
console.log(day1.wolf);
/**
 * The binary in operator, when applied to a string and an object 
 * tells us whether the object has a particular property.
 * To find out the property that an object has we can
 * use the function "Object.keys" function.
 * You give it an object and it returns the properties in an array of strings
 * We can use the "Object.assign" to copy properties
 * entirely from one object into another object
 * Arrays can also be defined as a kind of object to store 
 * sequences of things
 * There are also methods for removing and
 * adding things to the start of an array
 */ 
console.log("wolf" in day1);
console.log("squirrel" in day1);
console.log(Object.keys({name: "josh", level: 200,
hobbies:["football","playing drums","listening to music"]}));

let bags = 
{
    name: "gucci"
}
Object.assign(bags, {brand: "Lui Vuitton", bagNo: 1345, shop: "ICM"});
console.log(bags);
// -> {name: gucci, brand: Lui Vuitton,
// bagNo: 1345, shop: ICM}
console.log(typeof([]));

// let todoList = [];
// function remember (task)
// {
//     todoList.push(task);
// }
// function getTask()
// {
//     return todoList.shift();
// }
// function rememberUrgently(task)
// {
//     todoList.unshift(task);
// }

// console.log(["a","b","c","d","e","f"].indexOf("d"));
// console.log(["a","b","c","d","e","f"].lastIndexOf("d"));
// console.log(["a","b","c","d","e","f"].slice(2, 5));
// function remove(array,index)
// {
//     return array.slice(0,index)
//         .concat(array.slice(index + 1));
// }
// console.log(remove(["a","b","c","d","e","f"] , 2));

// console.log("nutmeg".slice(0 , 4));
// console.log("nutmeg".indexOf("meg"));
// console.log(" thirty-two \n".trim());
// console.log(String(10).padStart(10, "2"));

let sentence = "Your focus is not about where you are it is about who you are.";
let words = sentence.split(" ");
console.log(words);
/* -> [
  'Your', 'focus', 'is',
  'not',  'about', 'where',
  'you',  'are',   'it',
  'is',   'about', 'who',
  'you',  'are.'
] 
*/
// console.log(words.join(". "));
/**
 * Your. focus. is. not. about. where. you. are. it. is. about. who. you. are.
 */

// console.log("Lay".repeat(2));

/**
 * It can be quite useful to give a bunch of parameters
 * to a function, such as the Math.max function that
 * returns the larger digit of all the values it is
 * given.
 * For writing such a function, you put three dots before
 * the function last parameter, like this:
 * When we call such a function the "rest parameter" is
 * bound to an array containing all further arguments
 * We can spread out an array into a new array using the 
 * rest parameter
 * This rest parameter is used to take arguments and store
 * them in the array format, so we can easily access the content
 * of the array i.e the parameter.
 * The Math object serves as an namespace to avoid unnecessary
 * bindings in the global scope
 * There is a Math.random function that return a pseudorandom
 * number between 0 and 1 when it is called.
 * Math.floor helps to round down a certain number to the nearest
 * whole number
 * Math.ceil helps to round up to a certain number to the nearest
 * whole number
 * Math.ceil helps to round a number the nearest whole number
 */

// let set = (x) => {
//     return (x * x);
// }

function max(...numbers)
{
    let result = -Infinity;

    for (let number of numbers)
    {
        if (number > result)
            result = number;
    }
    return result;
}
console.log(max(3,5,6,7));
// -> 7
// console.log(set(5));
// -> 25

let letters = ["a"];
console.log(["Be", ...letters, "Ok"]);

let [n00, n01, n10]  = ["chemistry","physics","maths"];
let best = " is my best subject";
console.log(n00 + best);

let string = JSON.stringify({squirrel: false,
events: ["weekend"]});

console.log(string);
console.log(JSON.parse(string).events);

