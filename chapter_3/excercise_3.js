// Range of numbers
// function range(start,end)
// {
//     let array = [];
//     for (let count = start; count <= end; count++)
//     {
//         array.push(count);
//     }
//     return (array);
// }

// console.log(range(1, 5));

// Sum of a range of numbers
// function sum(...numbers)
// {
//     let value = 0;

//     for (let number of numbers )
//     {
//         value += number;
//     }

//     return (value);
// }

// let sumValue = sum(1,2,3,4,5,6,7,8,9,10);
// console.log(sumValue);

// Range of numbers with a step
// function range(start, end, step)
// {
//     let array = [];

//     for (let count = start; count <= end;)
//     {
//         if (step == undefined)
//         {
//             step = 1;
//         }

//         array.push(count);
//         count += step;
//     }

//     for (let value = start; value >= end;)
//     {
//         if (step == undefined)
//         {
//             step = -1;
//         }

//         array.push(value);
//         value += step;
//     }
//     return (array);
// }

// let rangeOfPositiveNumbers = range(1, 5);
// let rangeOfNegativeNumbers = range(5, 2, );

// console.log(rangeOfPositiveNumbers);
// console.log(rangeOfNegativeNumbers);

// // REVERSING AN ARRAY
// function reverseArray(array)
// {
//    let newArray = [];
//    let revValue;

//     for (let value = array.length - 1; value >= 0; value--)
//     {
//         newArray.push(array[value]);
//     }
//     return (newArray);
// }

// console.log(reverseArray(["let","your","light","shine"]));


// function reverseArrayInPlace(array)
// {
//     for (let count = 0; count < Math.floor(array.length / 2); count++)
//     {
//         let value = array[count];

//         array[count] = array[array.length - 1 - count];
//         array[array.length - 1 - count] = value;
//     }
//     return (array);
// }

// let arrayValue = reverseArrayInPlace([1,2,3,4]);
// let oldValue = ["let","your","light","shine"];
// console.log(arrayValue);
// console.log(reverseArrayInPlace(oldValue));

// function arrayToList(array)
// {
//     let list;

//     for (let i = array.length - 1; i >= 0; i--)
//     {
//         let arrayValue = array[i];

//         list = {
//             value: arrayValue,
//             rest: list
//         };
//     }
//     return (list);  
// }

// let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arrayToList(arrayValue));

