import test from 'ava'
import foldRight from '../../packages/fold-right'

test('foldRight() passes the combine function the collection item', t => {
  const expected = '4321'
  const actual = foldRight((acc, item) => `${acc}${item}`, '', [1, 2, 3, 4])

  t.is(actual, expected)
})

test('foldRight() passes the combine function the collection index', t => {
  const expected = '3210'
  const actual = foldRight((acc, item, index) => `${acc}${index}`, '', [1, 2, 3, 4])

  t.is(actual, expected)
})

test('foldRight() passes the combine function the collection', t => {
  const expected = 16
  const actual = foldRight((acc, item, index, collection) => acc + collection.length, 0, [1, 2, 3, 4])

  t.is(actual, expected)
})

test('foldRight() loops over an array, applying a combine function and initial value', t => {
  const expected = { even: [4, 2], odd: [3, 1] }
  const actual = foldRight(
    (acc, item) => {
      (item % 2 ? acc.odd : acc.even).push(item)
      return acc
    },
    { even: [], odd: [] },
    [1, 2, 3, 4]
  )

  t.deepEqual(actual, expected)
})

test('foldRight() is curried', t => {
  const expected = '4321'
  const actual = foldRight((acc, item) => `${acc}${item}`)('')([1, 2, 3, 4])

  t.is(actual, expected)
})
