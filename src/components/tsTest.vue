<template>
  <div>
    1
  </div>
</template>

<script setup lang="ts">
type addType = (a: number, b: number) => number
let add: addType = (x: number, y: number): number => {
  return x + y
}
console.log(add(1,2))

function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
console.log(reverse(100))

// 相当于type T = arg的类型
function identity<T>(arg: T): T {
  return arg
}
identity<string>('玩转vue 3全家桶') // 这个T就是string，所以返回值必须得是string
identity<number>(1)


interface VueCourse5 {
  name:string,
  price:number
}
type CourseProps = keyof VueCourse5 // 只能是name和price选一个
let k:CourseProps = 'name'
let k1:CourseProps = 'price' // 改成price
console.log(k,k1)


type Courses = 'Vue3'|'QD'
type CourseObj = {
  [k in Courses]:number // 遍历Courses类型作为key
}
// 上面的代码等于下面的定义
// type CourseObj = {
//     玩转Vue 3: number;
//     重学前端: number;
// }

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}

let coursePrice:CourseObj = {
  'Vue3': 321,
  'QD': 321
}

console.log(getProperty(coursePrice, 'QD'))


interface Todo {
  title: string
  desc:string
  done: boolean
}

type Partial1<T> = {
  [K in keyof T]?: T[K]
}

type partTodo = Partial1<Todo>
// 和下面类型一致，鼠标移动到partTodo变量上也能看到
// type partTodo = {
//     title?: string | undefined;
//     desc?: string | undefined;
//     done?: boolean | undefined;
// }

import axios from 'axios'

interface Api{
  '/course/buy': {
    id: Number
  }
  '/course/comment': {
    id: Number,
    message: String
  }
}

interface params{
  name: String,
  id: String,
  show: Boolean
}
function request1(params: params){
  return params
}
request1({name: '1', id: '2', show:true})

function request<T extends keyof Api>(url: T, obj:Api[T]) {
  return axios.post(url,obj)
}

// request('/course/buy',{id:1})
// request('/course/comment',{id:1,message:'嘎嘎好看'})
// request('/course/comment',{id:1}) //如果message必传 怎么类型提醒缺少参数
// request('/course/404',{id:1}) //接口不存在 类型怎么需要报错

interface IPerson {
  name: string;
  age: number;
}

class Person implements IPerson {
  name: string;
  age: number;
}

const obj: IPerson = {
  name: 'lin',
  age: 18
}

interface SayHello {
  (name: string): string;
  (age: number): number
}

const func = (name: string, age: number) => {
  return 'hi'+ name + age
}

console.log(func('lin', 18))

interface IPerson {
  [prop: string]: string | number;
}
const obj1:IPerson = <IPerson>{};
obj.name = 'guang';
obj.age = 18;

enum Transpiler {
  Babel = 'babel',
  Postcss = 'postcss',
  Terser = 'terser',
  Prettier = 'prettier',
  'TypeScriptCompiler' = 'tsc'
}
const transpiler = Transpiler['TypeScriptCompiler'];
console.log(transpiler)

type tuple = [string, number?];
interface IPerson1 {
  readonly name: string;
  age?: number;
}
const obj2:tuple = ['1', 1]
const obj3:IPerson1 = {name: '11',age: 11}
// obj3.name = 'xx'
obj3.age = 22
console.log(obj3)

type First<Tuple extends unknown[]> = Tuple extends [infer T,...infer R] ? T : never;

type res = First<[2,3]>;
const obj4: res = 2



</script>