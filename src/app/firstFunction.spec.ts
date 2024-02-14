import { addition } from "./firstFunction";

describe('Test suite - addition', () => {
    it('Testing addition function', () => {
        // addition(10, 20) === 30
        expect(addition(10, 20)).toBe(30);
    });
});

describe('String Test suite', () => {
    it('Testing string with toBe', () => {
        const str = 'Hello World'; 
        expect(str).toBe('Hello World');
    });

    it('Testing string with toEqual', () => {
        const str = 'Hello World'; 
        expect(str).toEqual('Hello World');
    });

    it('Testing string with not.toEqual', () => {
        const str = 'Hello World !'; 
        expect(str).not.toEqual('Hello World');
    });

    it('Testing string with toContain', () => {
        const str = 'Hello World'; 
        expect(str).toContain('llo');
    });

    it('Testing string with toMatch', () => {
        const str = 'Hello World'; 
        expect(str).toMatch('llo');
    });
});

xdescribe('Ignored Test suite', () => {
    xit('Ignored test case', () => {
    });
});

describe('Test suite toBe vs toEqual', () => {
    xit('Test case: toBe', () => {
        let a = {value: 10};
        let b = {value: 10};
        expect(a).toBe(b);
    });
    it('Test case: toEqual', () => {
        let a = {value: 10};
        let b = {value: 10};
        expect(a).toEqual(b);
    });
});

describe('Array test suite:', () => {
    it('Test case: Array toEqual', () => {
        let a = [1,2,3];
        let b = [1,2,3];
        expect(a).toEqual(b);
    });

    it('Test case: Array toContain', () => {
        let a = ['A','B','C'];
        let b = 'B';
        expect(a).toContain(b);
    });
});