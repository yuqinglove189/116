let sinon = require("sinon");
let main = require("../lib/main");

describe('main()', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        expect(console.log.args.join()).toBe("1.add student\n" +
            "2.Produce a report card\n" +
            "3.exit\n" +
            "Please enter your choice(1~3):");
    });

});