var assert = require('assert'); // node.js default's
var myModule = require('../modules/MyModule');
 
describe('myModule', function () {
    describe('greet', function () {
        it('It must be a return value as expected', function () {
            assert.equal(myModule.greet('taro'), 'Hello,taro');
        });
    });
});