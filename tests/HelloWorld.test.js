let HelloWorld = require('../models/HelloWorld');


it('Should return hello!', done => {
		let greeting = "Hello!";
		expect(HelloWorld.greet()).toBe(greeting)
		done();
});
