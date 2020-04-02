let mydata = JSON.parse(data);
let units = mydata[0];
let tens = mydata[1];
let hundreds = mydata[2];
let total = mydata[3];
describe("Test of input number", function() {
    it("Input number Length", function() {
        assert.equal(numberLength(123), 3);
    });
    for (let key in units) {
        it('Output ' + key, function() {
            assert.notStrictEqual(calculateUnits(key), key);
        });
    }
    for (let key in tens) {
        it('Output ' + key, function() {
            assert.strictEqual(calculateTen(key, 2), tens[key]);
        });
    }
    for (let key in hundreds) {
        it('Output ' + key, function() {
            assert.strictEqual(calculateTen(key), tens[key]);
        });
    }
    for (let key in total) {
        it('Output ' + key, function() {
            assert.strictEqual(calculate(key, 3), total[key]);
        });
    }
    // it('Output total', function() {
    //     assert.equal(calculate(100, 3), "C");
    // });
});
