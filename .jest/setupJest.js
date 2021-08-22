import "@testing-library/jest-dom/extend-expect";

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
})

// this gets around the 'auth0-spa-js must run on a secure origin' error
global.crypto.subtle = {}


