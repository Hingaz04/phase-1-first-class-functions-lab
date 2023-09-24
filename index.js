const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(driversArray){
 return driversArray.slice(0, 2);
}

function returnLastTwoDrivers(driversArray){
  return driversArray.slice(-2);
 }

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const firstTwoDrivers = selectingDrivers[0](drivers);
  const lastTwoDrivers = selectingDrivers[1](drivers);

  function createFareMultiplier(multiplier){
  return function(fare){
    return fare * multiplier
  };
  }

  function fareDoubler(fare){
  return fare * 2;
  }

  function fareTripler(fare){
    return fare * 3;
  }

  function selectDifferentDrivers(driversArray, driverSelector) {
    return driverSelector(driversArray);
}

// Code your solution in this file!
