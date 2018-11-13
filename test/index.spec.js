const { expect } = require('chai')
const { createEvent } = require('../src/index')

describe('ics', () => {
  describe('#createEvent()', () => {
    it('exists', () => {
      let evnt = createEvent({productId: 'hooray'})
      console.log('foo', evnt)
      expect(evnt.value.productId).to.equal('hooray')
      expect(evnt.value.error).not.to.exist
    })
  })
})