console.log("qwerty!!!")

let second = 1000
loop()
loop2()
loop3()
//---------------------------------------
async function loop() {
  for (let i = 0; i < 10; i++) {
    await waitForMe(second)
    console.log(i)
  }
}

function waitForMe(ms) {
  return new Promise(resolve => {
    setTimeout(() => { resolve('') }, ms)
  })
}
//---------------------------------------
function loop2() {
  for (let i = 0; i < 10; i++) {
    console.log('***')
  }
}
//---------------------------------------
async function loop3() {
  for (let i = 10; i < 20; i++) {
    await waitForMe(second / 2)
    console.log(i)
  }
}

function waitForMe2(ms) {
  return new Promise(resolve => {
    setTimeout(() => { resolve('') }, ms)
  })
}