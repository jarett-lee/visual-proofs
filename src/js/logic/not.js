// src/js/logic/not.js

// true if proposition is not true
export default class Not {
  constructor (proposition) {
    this.proposition = proposition
  }

  get val () {
    return !this.proposition.val
  }
}
