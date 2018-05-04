const matchWithBases = (base1, base2, n) => {
  // Iterate possible exponents
  for (let exponent1 = 2; exponent1 < 5; exponent1++) {
    for (let exponent2 = 2; exponent2 < 5; exponent2++) {
      const sum = Math.pow(base1, exponent1) + Math.pow(base2, exponent2)
      if (n === sum) {
        console.log(`${base1}^${exponent1} + ${base2}^${exponent2} = ${Math.pow(base1, exponent1)} + ${Math.pow(base2, exponent2)} = ${n}`)
        return true
      }
    }
  }
  return false
}

const matchPowerNumber = n => {
  // Iterate possible bases
  for (let base1 = 0; base1 < n/2; base1++) {
    for (let base2 = 0; base2 < n/2; base2++) {
      if (matchWithBases(base1, base2, n)) {
        return true
      }
    }
  }
  return false
}

module.exports = (i, r) => {
  let n = 0
  for (let x = i; x <= r; x++) {
    console.log(`Checking matching sums for ${x}`)
    if (matchPowerNumber(x)) {
      n++
    }
  }

  return n
}
