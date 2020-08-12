// @Component
// @Selector
// @useState('asas')

// Factory
// function Logger(prefix: string) {
//   return (target) => {
//     console.log(`${prefix} - ${target}`)
//   }
// }

// @Logger('awesome')
// class Foo {}

// Class decorator

// function setAPIVersion(apiVersion: string) {
//   return (constructor) => {
//     return class extends constructor {
//       version = apiVersion
//     }
//   }
// }

// // decorator - anotar a versão da API
// @setAPIVersion('1.0.0')
// class API {}

// console.log(new API())

// Property decorator

// function minLength(length: number) {
//   return (target: any, key: string) => {
//     let val = target[key]

//     const getter = () => val

//     const setter = (value: string) => {
//       if (value.length < length) {
//         console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}.`)
//       } else {
//         val = value
//       }
//     }

//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//     })
//   }
// }

// class Movie {
//   // validação - se for menor que 5 - error
//   @minLength(50)
//   title: string;

//   constructor(t: string) {
//     this.title = t
//   }
// }

// const movie = new Movie('Interstellar')
// console.log(movie.title) // Não pode criar title com tamanho menor que 50.

// Method decorator

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      console.log(`Esperando ${ms}...`)
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms)

      return descriptor;
    }
  }
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g
  }

  // esperar um tempo e aí vai rodar o método (ms)
  @delay(2000)
  greet() {
    console.log(`Hello! ${this.greeting}!`)
  }
}

const pessoinha = new Greeter('Pessoinha')
pessoinha.greet()

// Parameter decorator
// Acessor decorator
