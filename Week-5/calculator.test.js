const mathOperations = require('./calculator')

describe('calculator tests', ()=>{
    test("Existence check for sum", () => { 
        expect(mathOperations.sum).not.toBeNull(); 
    });
    test("Existence check for difference", () => {
        expect(mathOperations.diff).toBeDefined();
    });
    test("Existence check for multiply", () => {
        expect(mathOperations.multiply).toBeDefined();
    });    
    test('1+2 should return 3', () => { 
        expect(mathOperations.sum(1,2)).toBe(3)
    });
    test('15-10 should return 2', () => { 
        expect(mathOperations.diff(15,10)).toBe(5)
    })
    test('11*2 should return 22', () => { 
        expect(mathOperations.multiply(11,2)).toBe(22)
    })
});