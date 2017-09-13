import { expect } from 'chai';
import { level3Function } from './exercise1';

const numbers = [2, 3, 4, 5, 6]

xdescribe('level3Function', () => {
  it('should return a first, second and rest properties ', () => {
    let result = level3Function(numbers)
    expect(result).to.have.property('first')
    expect(result).to.have.property('second')
    expect(result).to.have.property('rest')
  })

  it('first and second should be numbers', () => {
    let result = level3Function(numbers)
    expect(result.first).to.be.a('number')
    expect(result.second).to.be.a('number')
  })

  it('rest should be an array', () => {
    let result = level3Function(numbers)
    expect(result.rest).to.be.an('array')
  })

  it('the first value should be ten times the double of the first item of the array', () => {
    // TODO
  })

  it('the second value should be ten times the double of the second item of the array', () => {
    // TODO
  })

  it('the rest values should be ten times the value of the remaining values after the 2 firsts', () => {
    // TODO
  })
})
