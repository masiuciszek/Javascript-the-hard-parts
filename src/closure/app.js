const foo = x => {
  const xs = [1, 2, 3, 4, 5, 6]
  return () => {
    return xs.reduce((a, b) => a + b, x)
  }
}

// const a = foo(5)()
// console.log(a)

// const b = foo(10)()
// console.log(b)

// const c = foo(-10)()
// console.log(c)
