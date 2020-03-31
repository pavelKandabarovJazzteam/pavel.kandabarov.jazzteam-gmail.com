let mydata = JSON.parse(data);
let units = mydata[0];
let tens = mydata[1];
describe("Простой пример тестирования:", function() {
    it("Длина вводимого числа", function() {
        assert.equal(numberLength(123), 3);
    });
    for (let key in units) {
        it('Вывод ' + key, function() {
            assert.notStrictEqual(calculateUnits(key), key);
        });
    }
    for (let key in tens) {
        it('Вывод ' + key, function() {
            assert.strictEqual(calculateTen(key, 2), tens[key]);
        });
    }
    it('Вывод сотен', function() {
        assert.equal(calculateHundred(100), "C");
    });


    it('Вывод конечного числа', function() {
        assert.equal(calculate(100, 3), "C");
    });
});
