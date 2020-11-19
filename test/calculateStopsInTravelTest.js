import chai from 'chai';
const should = chai.should()

import { calculateStopsInTravel } from '../src/js/calculateStopsInTravel.js';

describe('Testing function calculateStopsInTravel', () => {
    it('Should return 9 for millenium falcon information and 1000000 MGLT', () => {
        calculateStopsInTravel(1000000, 75, '2 months').should.be.a('number')
        calculateStopsInTravel(1000000, 75, '2 months').should.be.equals(9)

    })
    it('Should return 74 for Y-wing information and 1000000 MGLT', () => {
        calculateStopsInTravel(1000000, 80, '1 week').should.be.a('number')
        calculateStopsInTravel(1000000, 80, '1 week').should.be.equals(74)

    })
    it('Should return 11 for rebel trasport information and 1000000 MGLT', () => {
        calculateStopsInTravel(1000000, 20, '6 months').should.be.a('number')
        calculateStopsInTravel(1000000, 20, '6 months').should.be.equals(11)

    })
    it('Should return "Unexpected awnser from API" for not date in consumables', () => {
        calculateStopsInTravel(1000000, 80, '1 ano').should.be.a('string')
        calculateStopsInTravel(1000000, 80, '1 ano').should.be.equals('Unexpected awnser from API')
        calculateStopsInTravel(1000000, 80, 1).should.be.equals('Unexpected awnser from API')

    })
})