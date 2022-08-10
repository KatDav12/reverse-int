module.exports = function reverse (n) {
  let m = Math.abs(n);
  str = m.toFixed(0);
  // let a = Math.abs(n / 100);  
  // let b = Math.abs(((n % 100)/10));
  // let c = Math.abs((n % 10));
  return (str[2] + (str[1])+ (str[0]));
}
