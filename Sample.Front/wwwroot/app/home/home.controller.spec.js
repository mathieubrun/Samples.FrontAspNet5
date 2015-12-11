describe('Controllers ::', function () {
    beforeEach(module('app.home'));

    describe('Home', function () {
        var ctrl;
       
        beforeEach(inject(function (_$controller_) {
            ctrl = _$controller_('HomeController');
        }));

        it('should be defined', function () {
            expect(ctrl).toBeDefined();
        });

        it('must set title on scope', function () {
            expect(ctrl.title).toBe('Hello from HomeController');
        });
    });
});