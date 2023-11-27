/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

import { products } from './products.js'

const init = (num:number) => {
  // console.log(`number is ${num}`)
  // (`number is ${num + products.length}`)
  jQuery('body').append(`number is ${num + products.length}`)
}

init(7)
