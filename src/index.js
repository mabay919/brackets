module.exports = function check(str, bracketsConfig) {

let key = bracketsConfig.map(item => item.join(""));
for (let i = 0; i < key.length; i += 1) {
  while (str.includes(key[i])) {
    str = str.replace(key[i], "");
    i = 0;
  }
 
}
return str.length === 0;
}
