const sum = require('./sum');
const are = require('./areaSquare');
const isleafyear = require('./IsLeafYear');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('areaSqueae 3 to equal 9', () => {
    expect(are(3)).toBe(9);
  });
test('IsLeafYear 2020 to equal true',()=>{
  expect(isleafyear(2020)).toBe(true);
});