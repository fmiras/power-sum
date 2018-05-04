const test = require('ava')
const powerSum = require('../src')

test('PowerSum 20 and 25, return 3', t => {
  const result = powerSum(20, 25)
  t.is(result, 3)
})

test('PowerSum 25 and 30, return 2', t => {
  const result = powerSum(25, 30)
  t.is(result, 5)
})

test('PowerSum 20 and 20, return 1', t => {
  const result = powerSum(20, 20)
  t.is(result, 1)
})
