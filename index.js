const { emojis } = require("./emojis.json");
const codes = {};
const list = [];
emojis
  .filter(e => e.name)
  .map(e => ({ ...e, order: Number(e.order) || 9999 }))
  .sort((a, b) => (a.order > b.order ? 1 : -1))
  .forEach(e => {
    let key;
    if (e.shortname.slice(0, 5) === ":flag") {
      key = e.shortname.slice(1, 8).replace("-", "_"); // rename flags
    } else {
      if (e.name.match(/^\d+$/)) {
        // prefix numbers with n
        key = `n${e.name}`;
      } else {
        key = e.name;
      }
    }
    codes[key] = e.emoji;
    list.push({ key, emoji: e.emoji, order: Number(e.order) || 9999 });
  });

// const doLog = { emoji, message };

module.exports = new Proxy(
  {},
  {
    get(_, name) {
      return (...message) => {
        if (name === "log") {
          console.log(...message);
        } else if (codes[name]) {
          console.log(`${codes[name]} `, ...message);
        } else {
          console.log(`:${name}: `, ...message);
        }
      };
    }
  }
);

// generate list
// require('fs').writeFileSync('./list.json', Object.entries(codes).map(([key, value]) => `logji.${key}('hi') // ${value} hi`).join('\n'), null, 2, 'utf-8');
