// Flattening
let x = [];
let flat = [];
let array2 = [[1,2], [3,4], [5,6]];

let item = array2.reduce((count, [element1, element2,]) => 
{
    x.push(element1);
    x.push(element2);
    return (x);
}, 0);

console.log(flat.concat(item));

// My own loop
function loop(value, test, update, body)
{
    for (let start = value; test(start); start = update(start))
    {
        body(start);
    }      
}
console.log(loop(0, n => n <= 10, l => ++l, console.log));
// the idea is that value == value, test = value <= 10,
// update == value++, body == console.log(value)
// The problem with this is that "How do i repeat the same
// process over and over again"

// function recursion(value)
// {
//     if (value == 1)
//     {
//         return (value);
//     }
//     else
//     {
//         return (value + recursion(value - 1));
//     }
// }
// loop(value, )
// console.log(recursion(5)); 

// Generated from the Unicode 10 database and https://en.wikipedia.org/wiki/Script_(Unicode)

var SCRIPTS = [
    {
      name: "Adlam",
      ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
      direction: "rtl",
      year: 1987,
      living: true,
      link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
    },
    {
      name: "Caucasian Albanian",
      ranges: [[66864, 66916], [66927, 66928]],
      direction: "ltr",
      year: 420,
      living: false,
      link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
    },
    {
      name: "Ahom",
      ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
      direction: "ltr",
      year: 1250,
      living: false,
      link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
    },
    {
      name: "Arabic",
      ranges: [[1536, 1541], [1542, 1548], [1549, 1563], [1564, 1565], [1566, 1567], [1568, 1600], [1601, 1611], [1622, 1648], [1649, 1757], [1758, 1792], [1872, 1920], [2208, 2229], [2230, 2238], [2260, 2274], [2275, 2304], [64336, 64450], [64467, 64830], [64848, 64912], [64914, 64968], [65008, 65022], [65136, 65141], [65142, 65277], [69216, 69247], [126464, 126468], [126469, 126496], [126497, 126499], [126500, 126501], [126503, 126504], [126505, 126515], [126516, 126520], [126521, 126522], [126523, 126524], [126530, 126531], [126535, 126536], [126537, 126538], [126539, 126540], [126541, 126544], [126545, 126547], [126548, 126549], [126551, 126552], [126553, 126554], [126555, 126556], [126557, 126558], [126559, 126560], [126561, 126563], [126564, 126565], [126567, 126571], [126572, 126579], [126580, 126584], [126585, 126589], [126590, 126591], [126592, 126602], [126603, 126620], [126625, 126628], [126629, 126634], [126635, 126652], [126704, 126706]],
      direction: "rtl",
      year: 400,
      living: true,
      link: "https://en.wikipedia.org/wiki/Arabic_script"
    },
    {
      name: "Imperial Aramaic",
      ranges: [[67648, 67670], [67671, 67680]],
      direction: "rtl",
      year: 800,
      living: false,
      link: "https://en.wikipedia.org/wiki/Aramaic_alphabet"
    },
    {
      name: "Armenian",
      ranges: [[1329, 1367], [1369, 1376], [1377, 1416], [1418, 1419], [1421, 1424], [64275, 64280]],
      direction: "ltr",
      year: 405,
      living: true,
      link: "https://en.wikipedia.org/wiki/Armenian_alphabet"
    },
    {
      name: "Avestan",
      ranges: [[68352, 68406], [68409, 68416]],
      direction: "rtl",
      year: 400,
      living: false,
      link: "https://en.wikipedia.org/wiki/Avestan_alphabet"
    },
    {
      name: "Balinese",
      ranges: [[6912, 6988], [6992, 7037]],
      direction: "ltr",
      year: 1000,
      living: true,
      link: "https://en.wikipedia.org/wiki/Balinese_script"
    },
    {
      name: "Bamum",
      ranges: [[42656, 42744], [92160, 92729]],
      direction: "ltr",
      year: 1896,
      living: true,
      link: "https://en.wikipedia.org/wiki/Bamum_script"
    },
    {
      name: "Bassa Vah",
      ranges: [[92880, 92910], [92912, 92918]],
      direction: "ltr",
      year: 1950,
      living: false,
      link: "https://en.wikipedia.org/wiki/Bassa_alphabet"
    }
];
// function characterScript(code)
// {
//     for (let script of SCRIPTS)
//     {
//         if (script.ranges.some(([from, to]) =>
//             {
//                 return (code >= from && code < to);
//             }))
//             {
//                 return script;
//             }
//     }
//     return null;
// }

// console.log(characterScript(68353));

// function every(array, test)
// {
//     for (let element of array)
//     {
//         if (!test(element))
//         {
//             return (false);
//         }
//     }

//     return (true);
// }

// let value = 6
// console.log(every([1, 3, 25], (a) => 
//     {
//         return a < 20;
//     }))

// let array = [[1, 5], [6, 10], [7, 11]];
// let result = array.every(([item1, item2]) => {
//     return (item1 <= 7 && item2 >= 4);
// })
// console.log(result);
// let result;
// for (let element of array)
// {
//     let [item1, item2] = element;
//     if (7 >= item1 && 7 < item2)
//     {
//         result = true;
//     }
// }
// console.log(result);
// let result;
// for(let item of array)
// {
//     let [item1, item2] = item;
//     if(!(item1 <= 7 && item2 >= 7))
//     {
//         console.log(false);
//     }
//     else
//     {
//         console.log(true);
//     }
// }
// console.log(result);

// function every2(arr, predicate)
// {
//     let c = [];
//     let result = !arr.some((i) =>
//     {
//         return (!predicate(i));
//     })

//     return (result);
//     // return (result);
// }
// console.log(every2([1, 5, 6, 3, 7, 1], (a) =>
// {
//     return (a < 23);
// }))

// let array = [[1, 5], [6, 10], [7, 11]];
// let result;
// for (let item of array)
// {
//     let [item1, item2] = item;
//     if ((item1 <= value && item2 >= value) == false)
//     {
//         result = false;
//     }
//     else
//     {
//         result = true;
//     }
// }

// let arr = [1, 5, 6, 30, 7, 1];

// result = !arr.some(a => 
//   {
//     return (!(a < 8));
//   })
// console.log(result);