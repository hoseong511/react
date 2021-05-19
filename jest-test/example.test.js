describe('',() => {
  it('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3);
  });
  it('{ age: 39 } to equal { age: 39 }', () => {
    expect({ age: 39 }).toEqual({ age: 39 });
  });
  it('.toHaveLength', () => {
    expect('hello').toHaveLength(5);
  });
  it('.toHaveProperty', () => {
    expect({ name: 'Ho' }).toHaveProperty('name');
    expect({ name: 'Ho' }).toHaveProperty('name', 'Ho');
  });
  it('.toBeDefined', () => {
    expect({ name: 'Ho' }.name).toBeDefined(); // 정의되어있는지 확인
  });
  it('.toBeFalsy', () => {
    expect(false).toBeFalsy();
    expect(null).toBeFalsy();
    expect(0).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });
  it('.toBeGreaterThan', () => {
    expect(10).toBeGreaterThan(9);
  });
  it('.toBeGreaterThanOrEqual', () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });
  it('.toBeInstanceOf', () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  })
});