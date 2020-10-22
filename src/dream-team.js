const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members))
        return false;
    let res = [];
    for (let i = 0; i < members.length; i++) {
        let j = 0;
        if (typeof members[i] !== "string")
            continue;
        while (members[i][j] === ' ')
            j++
        res.push(members[i][j]);
    }
    res.sort(function(a,b)
    {
        return a.localeCompare(b);
    });
    return res.join('').toUpperCase();
};
