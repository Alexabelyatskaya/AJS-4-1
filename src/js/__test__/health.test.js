import health from '../health';

test('function health', () => {
  expect(health({ name: 'Test', health: 75 })).toBe('healthy');
  expect(health({ name: 'Test', health: 25 })).toBe('wounded');
  expect(health({ name: 'Test', health: 5 })).toBe('critical');
});
