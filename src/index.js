module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) return false; //if the array is odd, then return the answer "false"
  let iter = str.length / 2; //number of iterations to search

  let conf = []; //get pairs for comparison
  bracketsConfig.forEach((el) => {
    conf.push(el.join(''));
  });

  let cnt = str.length;

  while (iter > 0) {
    conf.forEach((el) => {
      str = str.replace(el, ''); //remove all occurrences of pairs
    });

    if (cnt === str.length) {
      break; //if there are no matches, then stop the search
    } else {
      cnt = str.length;
      iter--;
    }
  }

  return str.length === 0; //if the received array contains elements, then return the answer "false"
};
