// test/js/logic.test.js

import Conjunction from '../../../src/js/logic/conjunction.js'
import Disjunction from '../../../src/js/logic/disjunction.js'
import Literal from '../../../src/js/logic/literal.js'
import Not from '../../../src/js/logic/not.js'

test('evaluate a or b', () => {
  const a = new Literal(true)
  const b = new Literal(true)
  const p = new Disjunction([a, b])

  expect(p.val).toBeTruthy()
})

test('evaluate a and b', () => {
  const a = new Literal(true)
  const b = new Literal(true)
  const p = new Conjunction([a, b])

  expect(p.val).toBeTruthy()
})

test('evaluate a and b', () => {
  const a = new Literal(false)
  const p = new Not(a)

  expect(p.val).toBeTruthy()
})

test('evaluate a and b', () => {
  const values = []
  for (let i = 0; i < 100; i++) {
    values.push(new Literal(false))
  }
})
