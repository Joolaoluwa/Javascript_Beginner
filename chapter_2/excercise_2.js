/**
 * This is an excercise to test all I have learnt on functions.
 * I. min - This function returns the minimum value between two numbers.
 * @val_1: first parameter
 * @val_2: second parameter
 * Return: minimu(success)
 * 
 * II. isEven - This function returns whether a positive value is even or odd
 * @value: positive parameter
 * Return: return boolean
 * 
 * III. countBS - a function that indicates how many uppercase B's are in a string
 */

/**I */
/* function min(val_1,val_2)
{
    if(val_1 < val_2)
        return (val_1);
    else if(val_2 < val_1)
        return (val_2);
    else
        return ("They are equal.")
}

console.log(min(99,99));
*/

/**II */
function isEven(value)
{
    if(value < 0)
    {
        return ("Please,input a positive integer."); 
    }
    if(value == 0)
    {
        return (true);
    }
    else if(value == 1)
    {
        return (false);
    }
    else
    {
        return isEven(value - 2);
    }
}

console.log(isEven(-1));

/**III */
/*function countBs(bean)
{
    let result = 0;

    for (let count = 0; count <= bean.length - 1; count++)
    {
        if(bean[count] == 'B')
            result += 1;
    }
    return result;
} */


/**IIIa */
/*function countChar(str, char)
{
    let result = 0;
    
    for (let count = 0; count <= str.length - 1; count++)
    {
        if(str[count] == char)
            result += 1;
    }
    return result;
}*/

/*function countBs()
{
    return countChar('BABA dUDU','B');
}

console.log(countBs());*/