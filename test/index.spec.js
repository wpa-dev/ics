const { expect } = require('chai')
const { createEvent } = require('../src/index')

describe('ics', () => {
  describe('#createEvent', () => {
    it('returns a string when passed proper attributes', () => {
      const { error, value } = createEvent({ productId: 'hoorayyy' })
      expect(value).to.be.a('string')
      expect(error).not.to.exist
    })
    xit('returns an error when no arguments are passed', () => {
      let event = createEvent()
      expect(event.error).to.exist
    })
    it('contains a formatted VCALENDAR entity', () => {
      const { error, value } = createEvent({ productId: 'hoorayyy' })
      expect(value).to.contain('BEGIN:VEVENT')
      expect(value).to.contain('END:VEVENT')
    })
  })
})