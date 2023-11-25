
# 基本遍历 for
```js
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
```


# 遍历数组 for...of

```js
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

```

# 遍历对象 for...in

```js
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"


```



参考:
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in