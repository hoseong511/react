const ab = function (x) {
  return function (y) {
    return x * y
  }
}
const c = ab(2)
console.log(c(3)) // 합성함수에 대한 이해!!