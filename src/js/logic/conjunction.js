// src/js/logic/conjunction.js

// true if all propositions are true
export default class Conjunction {
  constructor (propositions) {
    this.propositions = propositions
  }

  get val () {
    for (const proposition of this.propositions) {
      if (!proposition.val) {
        return false
      }
    }

    return true
  }
}
