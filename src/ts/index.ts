/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

// import jquery from "C:/Users/graum/FullStack/typescript/es6modules/node_modules/jquery/dist/jquery.js"

// const $: JQueryStatic = jquery

import { products } from './products.js'

const init = (num:number) => {
  // console.log(`number is ${num}`)
  // (`number is ${num + products.length}`)
  jQuery('body').append(`number is ${num + products.length}`)
}

init(7)