const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    it('should correctly perform the SUM operation', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should correctly perform the SUBTRACT operation', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should correctly perform the DIVIDE operation', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" for DIVIDE operation when dividing by 0', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" for invalid type of operation', () => {
        expect(calculateNumber(5, 1, 4)).to.equal('Error');
        expect(calculateNumber('plus', 1, 4)).to.equal('Error');
    });
});

