import healthLevel from '../level';

test('level healthy', () => {
  const result = healthLevel({ name: 'Маг', health: 90});
  expect(result).toBe('healthy');
});

test('level wounded', () => {
   const result = healthLevel({ name: 'лучник', health: 50});
   expect(result).toBe('wounded');
 });

 test('level critical', () => {
   const result = healthLevel({ name: 'мечник', health: 10});
   expect(result).toBe('critical');
 });