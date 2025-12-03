var x = 10;
let y = 12;

function test() {
  console.log(x); //undef
  console.log(y); //12
  //var x = 2;

  if (true) {
    console.log(x); //2
    var x = 4;
    let y = 22;
    console.log(x); //4
    console.log(y); //11
    var x = 1111;
    console.log(x);
  }

  console.log(x); //4
  console.log(y); //12
}
test();

