const ab = (x) => (y) => {
    console.log(x, y)
    return (
      x * y
      )
  }


// const c = ab(2)
// console.log(c(3))

// onclickBtn = (choice) => () => 
const c = ab(2)
console.log(c(3)) // 합성함수에 대한 이해!!
