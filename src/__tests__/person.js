import personHealth from '../person';

test.each(
  [['red', 10, 'critical'],
    ['yellow', 17, 'wounded'],
    ['green', 60, 'healthy']],
)(' Testing personHealth function with %s color %i health', (color, value, expected) => {
  const result = personHealth({ name: 'personName', health: value });
  expect(result).toBe(expected);
});
