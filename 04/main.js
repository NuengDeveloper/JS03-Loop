// หาผลรวมตัวเลขทุกตัว

// let sum = 0
// for (i = 1;i <= 100; i++) {
//     sum += i
//     console.log(`${i}:${sum}`)
// }

// หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
let sum = 0
for (i = 1; i <= 100; i++) {
    if ((i % 2) === 0) {
        sum += i
    }
    console.log(`${i}:${sum}`)
}