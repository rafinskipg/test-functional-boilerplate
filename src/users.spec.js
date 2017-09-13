import { expect } from 'chai';
import { users } from './users';

xdescribe('users', () => {
  describe('user finder', () => {
    // Create a function that can find users by it's name. 
    // You can improve it to search by part of it's name
  })

  describe('user aggregation', () => {
    // Aggregate users by some field
  })

  describe('median calculator', () => {
    // Function that calculates the median age of a subset of users
  })

  describe('status median', () => {
    // Aggregate users by status and gets their median age
  })

  describe('banning users', () => {
    // Create a function that receives a subset of users and returns those users banned
  })

  describe('subset of banning', () => {
    // Find all the users with a age between the median +/-3 and get their IPs
    // ban those users and return a list of banned ips
  })

  describe('country', () => {
    // Group all the users by country, get their median age, filter by not banned and return a list of heights
  })
})
