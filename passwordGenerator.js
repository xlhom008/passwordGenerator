const Password = {
  shouffle(nums) {
    let password;
    const randNum1 = Math.floor(Math.random() * nums.length);
    const randNum2 = Math.floor(Math.random() * nums.length);
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
    return password;
  },
  
  part1() {
    const nums = [];
    for (let i in [...Array(5)]) {
      nums.push(Math.floor(Math.random() * 10))
    };
    const password = this.shouffle(nums);
    return password;
  },
  
  part2 (password) {
    let password2 = [];
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i in [...Array(5)]) {
      const randIn = Math.floor(Math.random() * letters.length);
      const randChar = letters[randIn];
      password2.push(randChar);
    };
    const shouffledPassword = this.shouffle(password.concat(password2));
    return shouffledPassword;
  },

  part3 (password) {
    let breaks = Math.floor(Math.random() * (password.length) / 3)
    while (breaks) {
      let randIn = Math.floor(Math.random() * (password.length - 2) + 1);
      password.splice(randIn, 0, '-')
      breaks--;
    };
    return password.join('')
  },

  makePass () {
    console.log(`Your random password is :  ${this.part3(this.part2(this.part1()))}.`)
  }
}

Password.makePass();