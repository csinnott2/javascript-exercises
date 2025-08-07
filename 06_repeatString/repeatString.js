const repeatString = function(string, num) {
    let peanut = ""
    if (num >= 0)
    {
        for (let i = 0; i < num; i++)
        {
            peanut += string
        }
        return peanut
    }
    else
    {
        return 'ERROR'
    };

};

// Do not edit below this line
module.exports = repeatString;
