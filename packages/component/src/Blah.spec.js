import inputtableKey from './Utils/TypeFocusSink/inputtableKey';

describe('some tests', () => {
  it('input key', () => {
    expect(inputtableKey('Add')).toBe('+');
  });
});
