const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Juan', () => {
    expect(values.firstName).toEqual('Juan');
  });
  test('lastName is Perez', () => {
    expect(values.lastName).toEqual('Perez');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 1998', () => {
    expect(values.birthYear).toEqual(1998);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Juan Perez and I am 28 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Juan Perez', () => {
    expect(values.fullName).toEqual('Juan Perez');
  });
  test('age is 28', () => {
    expect(values.age).toEqual(28);
  });
});
