const reverseString = function(string) 
{
    let peanut = ""
    const wingnut = string.split("")
    for (let index = string.length-1; index >= 0; index--) 
    {
        peanut += wingnut[index]
    }
    return peanut
};

// Do not edit below this line
module.exports = reverseString;
