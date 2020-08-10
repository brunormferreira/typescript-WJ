// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 20.3

// array (type[])
let items: string[]
items = ['foo', 'bar', '3']

let values: Array<number>
values = [1, 2, 3]

// tuple 
let title: [number, string, string]
title = [1, 'foo', 'bar']

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// any (qualquer coisa) its not cool!
let wtf: any
wtf = [2, 4, [], {}]

// void (vazio)
function logger(): void {
  console.log('foo')
}

// null | undefined
type Bla = string | undefined

// never
function error(): never {
  throw new Error('ERROR')
}

// object
let cart: object

cart = {
  key: 'bah!'
}

// Type Inference
let msg = 'defined message'
msg = 'new string'

window.addEventListener('click', (e) => { // e: Mouse Event infered
  console.log(e.target)
})