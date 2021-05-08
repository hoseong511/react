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
// onclick = () => ab(2)
// 0. onClickBtn = (choice) => { console.log(choice) }
// 1. onClick = () => onClickBtn(2)
// 2. onClickBtn = (choice) => () => { console.log(choice)}
// 그냥 있는 그대로 이해하면 되는구나.