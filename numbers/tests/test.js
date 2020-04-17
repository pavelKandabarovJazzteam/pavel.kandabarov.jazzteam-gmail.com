describe("Test of input number", function() {
    it("Input number - 88888, expected output IƆƆƆCCIƆƆCCIƆƆCCIƆƆIƆƆCIƆCIƆCIƆDCCCLXXXVIII", function() {
        assert.equal(calculate(88888, String(88888).length), "IƆƆƆCCIƆƆCCIƆƆCCIƆƆIƆƆCIƆCIƆCIƆDCCCLXXXVIII");
    });
});
