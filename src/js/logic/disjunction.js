// src/js/logic/disjunction.js

// true if at least one propositions is true
export default class Disjunction {
  constructor (propositions) {
    this.propositions = propositions
  }

  get val () {
    for (const proposition of this.propositions) {
      if (proposition.val) {
        return true
      }
    }

    return false
  }
}
