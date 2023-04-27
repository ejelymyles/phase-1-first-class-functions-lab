const names = [`Antonia`, `Nuru`, `Amari`, `Mo`]

const returnFirstTwoDrivers = function(names){
    return names.slice(0,2);
}

const returnLastTwoDrivers = function(names){
    return names.slice (2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier){
    return function(fare){
        return fare * multiplier
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(names, option){
    return option(names);
}