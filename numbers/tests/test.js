let mydata = JSON.parse(data);
let units = mydata[0];
let tens = mydata[1];
let hundreds = mydata[2];
let total = mydata[3];
describe("Test of input number", function() {
    it("Input number Length", function() {
        assert.equal(numberLength(123), 3);
    });
    it("Test for units function", function() {
        assert.strictEqual(1, 1);
    });
    for (let key in units) {
        it('Input ' + key + ", expected output " +units[key], function() {
            assert.strictEqual(calculateUnits(key), units[key]);
        });
    }
    it("Test for tens function", function() {
        assert.strictEqual(1, 1);
    });
    for (let key in tens) {
        it('Input ' + key + ", expected output " +tens[key], function() {
            assert.strictEqual(calculateTen(key, 2), tens[key]);
        });
    }
    it("Test for hundreds function", function() {
        assert.strictEqual(1, 1);
    });
    for (let key in hundreds) {
        it('Input ' + key + ", expected output " +hundreds[key], function() {
            assert.strictEqual(calculateTen(key), tens[key]);
        });
    }
    it("Test for total function", function() {
        assert.strictEqual(1, 1);
    });
    for (let key in total) {
        it('Input ' + key + ", expected output " +total[key], function() {
            assert.strictEqual(calculate(key, 3), total[key]);
        });
    }
});
