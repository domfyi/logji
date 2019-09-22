const logji = require("./index");

logji.joy("emojis");
logji.fire("are");
logji.fire("for");
logji.computer("programmers");
logji.cocktail("too");
logji.log("-");
logji.joy({ object: "here" });
logji.fire(["array1", "array 2"]);
logji.computer(42);
logji.cocktail("multiple", "args");

logji.nomatch("hi");

// 😂  emojis
// 🔥  are
// 🔥  for
// 💻  programmers
// 🍸  too
//     -
// 😂  { object: 'here' }
// 🔥  ['array1', 'array 2']
// 💻  42
// 🍸  multiple args

// : nomatch: hi
