function getCombinations(string) {
  const fn = (active, rest, array) => {
    if (!active && !rest) {
      return undefined;
    } if (!rest) {
      array.push(active);
    } else {
      fn(active + rest[0], rest.slice(1), array);
      fn(active, rest.slice(1), array);
    }
    const resultArray = array.filter(word => word.length > 1);
    return [...new Set(resultArray)];
  };
  return fn('', string, []);
}

module.exports = getCombinations;
