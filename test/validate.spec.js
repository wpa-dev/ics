const assert = require('assert')
const { expect } = require('chai')
const { validate } = require('../src/validate')

describe('ics', () => {
  describe('#validate()', () => {
    it('has defaults that get overwritten', () => {
      expect(validate({ productId: 'abcdabc'}).value.title).to.equal('Untitled event')
      expect(validate({ productId: 'abcdabc', title: 'Adam'}).value.title).to.equal('Adam')
    })      
    it('returns false when productId length GT 10', () => {
      expect(validate({productId: 'abc'}).error).to.exist
      expect(validate({productId: 'abc'}).value).not.to.exist
    })
  })
})
