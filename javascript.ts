class UIAdaptor {
  item: any;

  constructor(item) {
    this.item = item;
  }

  adaptor(property, adaptorFunction) {
    this.item[property] = adaptorFunction(this.item[property]);
  }

  addProperty(property, adaptorFunction) {
    this.item[property] = adaptorFunction(this.item);
  }
}

function handleClick(item) {
  const adaptorConfig = new UIAdaptor(item);

  adaptorConfig.adaptor("textContent", function (content) {
    return content.toUpperCase();
  });
}

function changeColor(item) {
  const adaptorConfig = new UIAdaptor(item.style);

  adaptorConfig.adaptor("color", function (color) {
    return "red";
  });
}

function tooltipText(item) {
  const adaptorConfig = new UIAdaptor(item);

  adaptorConfig.addProperty("title", function (item) {
    return item.textContent.toUpperCase();
  });
}

class Percent {
  private _value: number;

  constructor(percent: number) {
    this._value = percent / 100;
  }

  get percent() {
    return this._value;
  }

  set percentValue(value: number) {
    this._value = value;
  }
}

function percent(value: number) {
  let test = new Percent(value);
  return test;
}

function percentFn() {
  console.log(percent(50));
}

function isNumber(value: any): value is number {
  return typeof value === "number" && Number(value) == value;
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

const input: unknown = "Hello, TypeScript!";

if (isString(input)) {
  console.log(input.toUpperCase()); // ✅ Safe: input is treated as string
} else {
  console.error("Not a string");
}

// function isInstanceof<T>(value: unknown): value is T {
//     return typeof value === typeof T;
// }

// Example usage:
class ExampleClass {
  constructor(public name: string) {}
}

const exampleInstance = new ExampleClass("example");

// if (isInstanceof<ExampleClass>(exampleInstance)) {
//     console.log("exampleInstance is an instance of ExampleClass");
// } else {
//     console.error("exampleInstance is not an instance of ExampleClass");
// }
