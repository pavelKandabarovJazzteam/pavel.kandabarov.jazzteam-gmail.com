let expect = chai.expect;

describe('Pickle Store', function() {
    beforeEach(function() {
        sinon.stub($, 'ajax').yieldsTo('success', {
            status: 'ok',
            totalResults: 1,
        });
    });
    afterEach(function() {
        $.ajax.restore();
    })
    it('status of getHedline method should return "ok"', function(done) {
        ajax.getHedline();
        expect(ajax.statusHedline).to.equal("ok");
        done();
    });
    it('status of getSource method should return "ok"', function(done) {
        ajax.getSource("science");
        expect(ajax.statusSource).to.equal("ok");
        done();
    });
    it('totalResults of getSource method should return more than 0', function(done) {
        ajax.getSource("science");
        expect(ajax.totalResultsSource).to.be.above(0);
        done();
    });
    it('totalResults of getSource method should return more than 0', function(done) {
        ajax.getCategory("country", "ua");
        expect(ajax.statusCategory).to.equal("ok");
        done();
    });
});
