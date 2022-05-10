import {BasicCalculator} from "../app";

describe("Basic calculator testing", () => {
    let calc: BasicCalculator = new BasicCalculator();
    test('should return an instance of a basic calculator', () => {


        expect(calc).toEqual({});
    });
    test('should return the addition of a + b',()=>{
        expect(calc.add(1,4)).toEqual(5)
    })
    test('return a/b',()=>{
        expect(calc.divide(1,3)).toEqual(1/3)
    })
    test('return a*b',()=>{
        expect(calc.multiple(2,3)).toEqual(6)
    })
});
