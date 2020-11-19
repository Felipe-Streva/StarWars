export function calculateStopsInTravel(mgltToTravel, mgltSpeedSchip, consumables){

    if(consumables === 'unknown' && mgltSpeedSchip === 'unknown') return 'Speed and Consumables not informed'

    if(consumables === 'unknown') return 'Consumables not informed'

    if(mgltSpeedSchip === 'unknown') return 'Speed not informed'


    const consumablesInHour = consumablesToHour(consumables)

    if(!isNumeric(consumablesInHour)) return consumablesInHour

    const hoursToTravel = mgltToTravel/mgltSpeedSchip

    let stops = 0

    let hoursAlreadyTravel = consumablesInHour

    while(hoursAlreadyTravel <= hoursToTravel){
        stops++
        hoursAlreadyTravel += consumablesInHour
        if(stops > 1000000) return 'More then 1000000'
    }

    return stops

}

function consumablesToHour(consumables){
    if(typeof(consumables) !== 'string'){
        return 'Unexpected awnser from API'
    } 

    let [number, time] = consumables.split(' ')

    const hourInDay = 24
    const hourInWeek = 7*hourInDay
    const hourInMonth = 30*hourInDay
    const hourInYear = 12*hourInMonth

    if (time === 'year' || time === 'years') {
        return number*hourInYear
    }

    if(time === 'month' || time === 'months') return number*hourInMonth

    if(time === 'week' || time === 'weeks') return number*hourInWeek

    if(time === 'day' || time === 'days') return number*hourInDay

    if(time === 'hour' || time === 'hours') return number

    return 'Unexpected awnser from API'

}

// from https://gist.github.com/pinalbhatt/9672790
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export async function request(page){
    return await fetch(`https://swapi.dev/api/starships/?page=${page}`)
}