//TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`🧠 Assertion Passed: ${actual} === ${expected}. 🧠`);
  } else {
    return (`💩 Assertion Failed: ${actual} !== ${expected}. 💩`);
  }
};

//FUNCTION
const findKey = (object, callback) => {
 keys = Object.keys(object);
  for (x in object) {
    if (callback(object[x]) === true) {
      console.log(x)
      break;
    }
  }
};

//EXAMPLE
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "Dennys":    { stars: 2 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)

//Test
console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "Dennys":    { stars: 2 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "Dennys");