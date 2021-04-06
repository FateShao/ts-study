//ok 1.使用``可以换行 连接 ${ 变量表达式 }                             
console.log("Note 1");
let name1: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name1 },
I'll be ${ age + 1 } years old next month.`;

//ok 2.var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问 还是使用let更安全
console.log("Note 2");

//ok 3.元组 Tuple 表示一个已知元素数量和类型的数组 超出边界可以为二者的任意类型
console.log("Note 3");
let x: [string, number];

//ok 4.void类型的变量没有什么大用，因为你只能为它赋予undefined和null 
//null和undefined是所有类型的子类型，可以把 null和undefined可以赋值给任何类型 但指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自 尽可能地使用--strictNullChecks
//never类型是任何类型的子类型，也可以赋值给任何类型 没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。