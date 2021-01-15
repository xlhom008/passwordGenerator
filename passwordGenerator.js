const Password = {
  part1 () {
    let password;
    const nums = [...Array(5).keys()];
    const randNum1 = Math.floor(Math.random() * 5);
    const randNum2 = Math.floor(Math.random() * 5);
    const maxRand = Math.max(randNum1, randNum2);
    const minRand = Math.min(randNum1, randNum2);
    console.log(minRand, maxRand);
    const order = Math.floor(Math.random() * 5);
    const a = nums.slice(0, minRand);
    const b = nums.slice(minRand, maxRand);
    const c = nums.slice(maxRand, nums.length);
    console.log(order)
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
    }
  }
}