import {formatCurrency} from "../../scripts/utils/money.js"
describe('test suite : formatCurrency',()=>{
    it("converts cents into dollars",()=>{
        expect(formatCurrency(2065)).toEqual('20.65');
    });

    it('works with 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('working with nearset round offs',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    })
});