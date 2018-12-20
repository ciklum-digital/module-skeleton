import * as publicApi from '../publicApi'
import publicApiJson from '../publicApi.json'

describe('[Public API]', () => {
  describe('WHEN: Module imported', () => {
    it('THEN: module provides "demoFunction"', () => {
      expect(typeof publicApi.demoFunction).toBe(publicApiJson.demoFunction)
    })
  })
})
