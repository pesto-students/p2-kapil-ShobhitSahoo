const mathOperations = require('./calculator')


test('1+2 should return 3', () => { 
    expect(mathOperations.sum(1,2)).toBe(3)
});

test('15-10 should return 5', () => { 
    expect(mathOperations.diff(15,10)).toBe(5)
});

test('11*2 should return 22', () => { 
    expect(mathOperations.multiply(11,2)).toBe(22)
});
