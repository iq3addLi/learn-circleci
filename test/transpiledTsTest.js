var assert = require('assert') // node.js default's
var rewire = require('rewire')

var StringUtil = rewire('../ts/temp/logic.js').__get__("StringUtil")
var NumberUtil = rewire('../ts/temp/logic.js').__get__("NumberUtil")
 
describe('StringUtil', function () {
    describe('add', function () {
        it('It must be a return value as expected', function () {
            var util = new StringUtil()
            assert.equal(util.add("Hello ","World!"), "Hello World!")
        })
    })
})

describe('NumberUtil', function () {
    describe('add', function () {
        it('It must be a return value as expected', function () {
            var util = new NumberUtil()
            assert.equal(util.add(1,2), 3)
        })
    })
})
