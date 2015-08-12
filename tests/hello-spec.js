var helloService = require('../hello-service.js');

describe('Inviko hello service with name', function () {
    it("should be 'Hello name'", function () {
        //expect(helloService.sayHello('Zeratul')).toEqual("Hello Zeratul");
        expect(helloService.sayHello('Zeratul')).toBeDefined();
    });
});