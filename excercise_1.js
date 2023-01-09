
// for (let i = '#'; i <= "#######"; i += "#")
// {
//     console.log(i);
// }

// for (let i = 1; i <= 100; i += 1)
// {   
//     if ((i % 3 == 0) && (i % 5 == 0))
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }

// CHESSBOARD
let empty = "";

for(let i = 1; i <= 8; i++)
{
    for(let j = 1; j <= 8; j++)
    {
        let position = i + j;
        
        if(position % 2 == 0)
        {
            empty += " ";
        }
        else
        {
            empty += "#";
        }
    }
    empty += '\n'; 
}
console.log(empty);