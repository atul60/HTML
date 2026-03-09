function* generator() {
  let id = 0;
  while (true) {
    let x = yield ++id;
    if (x) {
      id = x + id;
    }
  }
}

const gen = generator();
console.log("gen", gen.next());
console.log("gen", gen.next(10));
console.log("gen", gen.next());
// console.log("gen", gen.next());
// console.log("gen", gen.next());
// console.log("gen", gen.next());
// console.log("gen", gen.next());
// console.log(gen.next());
// console.log(gen.next());

function outerClick() {
  console.log("Red");
}

function middleClick(e) {
  e.stopPropagation();
  console.log("yellow");
}

function innerClick(e) {
  e.stopPropagation();
  console.log("green");
}
