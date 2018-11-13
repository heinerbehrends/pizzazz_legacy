function getCombinations(string) {
    var fn = function(active, rest, array) {
        if (!active && !rest)
            return;
        if (!rest) {
            array.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), array);
            fn(active, rest.slice(1), array);
        }
        array = array.filter(word => word.length > 1)
        return [... new Set(array)];
    }
    return fn("", string, []);
}

module.exports = getCombinations
