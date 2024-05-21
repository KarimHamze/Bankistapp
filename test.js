const str = 'Karim Youssef Hamze';
console.log(str);
const username = str
  .toLowerCase()
  .split(' ')
  .map(function (name) {
    return name[0];
  })
  .join('');
console.log(username);
