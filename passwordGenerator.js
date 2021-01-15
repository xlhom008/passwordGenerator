const Password = {
  part1 () {
    let password;
    const nums = [];
    for (let i in [...Array(5)]) {
      nums.push(Math.floor(Math.random() * 10))
    };
    const randNum1 = Math.floor(Math.random() * 5);
    const randNum2 = Math.floor(Math.random() * 5);
    const maxRand = Math.max(randNum1, randNum2);
    const minRand = Math.min(randNum1, randNum2);
    const order = Math.floor(Math.random() * 5);
    const a = nums.slice(0, minRand);
    const b = nums.slice(minRand, maxRand);
    const c = nums.slice(maxRand, nums.length);
    switch (order) {
      case 0:
        password = c.concat(b).concat(a);
        break;
      case 1:
        password = a.concat(c).concat(b);
        break;
      case 2:
        password = b.concat(a).concat(c);
        break;
      case 3:
        password = b.concat(c).concat(a);
        break;
      case 4:
        password = c.concat(a).concat(b);
        break;  
    };
    return password.join('');
  },
  
  part2 (password) {
    let password2 = [];
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i in [...Array(5)]) {
      const randIn = Math.floor(Math.random() * letters.length);
      const randChar = letters[randIn];
      password2.push(randChar);
    };
    return password + password2.join('')
  }
}