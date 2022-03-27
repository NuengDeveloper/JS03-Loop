let balance = 100000;

for (i = 1; i <= 10; i++) {
  let interest = balance * 0.025;
  balance += interest;
  console.log(`${i}:${balance}`);
}