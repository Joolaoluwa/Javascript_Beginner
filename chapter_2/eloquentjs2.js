/**
 * A function is defined as a method to wrap a piece of program around a single name or value.
 * This serves as an advantage whereby it gives structure to larger programs, helps reduce repitition, to associate name with subprograms, and to isolate these subprograms from each other.
 * The main purpose of functions is to define new vocabulary, because the words used in programming language seem to precisely defined, creating our own vocabulary is indispensable.
 * In JS a function can be created with the keyword function, which can have a bunch of parameters, a body tghat contain the statement of the program.
 * A function can produce a value or not. For it to produce a value we use a return statement to return a particular value from the function. So when the program is been executed, as soon as the control flow reaches the return statement, it comes out of the function and sends whatever value is being produced to the piece of code that calls our function. Without any expression after the return statement. The function returns undefined 
 * In a program the inner scopes can access the global scope
 * A declaration notation is used to define a funcion in a shorter way. A function does not follow the normal top-to-bottom convention. They are conceptually moved to the top of their scope and can access all the code in the their scope
 * 
 * At every call to a function, new instances of the local bindings are created. So the big question is that what happens to this local bindings when the function executes finish.
 * The ability to reference a specific instance of local variables in an enclosing scope is called a closure
 */

// Lets take an example of a function
/* const square = function(x)
{
    return x*x;
};

console.log(square(15)); */

/*const power = function (base, exponent)
{
    let result = 1;

    for (let count = 0; count < exponent; count++)
    {
       result *= base; 
    }

   return (result);
}; 

const square = x => x * x;  

console.log(square(2,2));

function chicken()
{
    return egg();
}
function egg()
{
    return chicken();
}
console.log(chicken() + " came first. ");
*/

/*function multiplier(factor)
{
    return n => n * factor
}
let twice = multiplier(2);
console.log(twice(6));*/

function findSolution(target)
{
    function find(current,history)
    {
        if(current == target)
            return history;
        else if(current > target)
            return null;
        else
        {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));


