"use strict";
// ========== GLOBAL VARIABLES ========== //
const _dataRef = _db.collection("sustainabilityData");
let _sustainabilityData;

// 1: data from firebase
// listen for changes on _dataRef
_dataRef.orderBy("year").onSnapshot(snapshotData => {
  _sustainabilityData = []; // reset _sustainabilityData
  snapshotData.forEach(doc => { // loop through snapshotData - like for of loop
    let data = doc.data(); // save the data in a variable
    data.id = doc.id; // add the id to the data variable
    _sustainabilityData.push(data); // push the data object to the global array _sustainabilityData
  });
  console.log(_sustainabilityData);
  appendCarbonFootprint(_sustainabilityData); //call appendCarbonFootprint with _sustainabilityData as function argument
  appendMilkProduction(_sustainabilityData); //call appendMilkProduction with _sustainabilityData as function argument
  appendSelfSuffiency(_sustainabilityData); //call appendMilkProduction with _sustainabilityData as function argument
});

// 2: preparing the data
function prepareSelfSuffiencyData(sustainabilityData) {
  let selfSuffiency = [];
  let years = [];
  sustainabilityData.forEach(data => {
    if (data.region === 'south') { // in this case we only want the data from 'north'
      selfSuffiency.push(data.herdSelfSuffiencyInFeed);
      years.push(data.year);
    }
  });
  return {
    selfSuffiency,
    years
  }
}
//3: appending the chart
function appendSelfSuffiency(sustainabilityData) {
  let data = prepareSelfSuffiencyData(sustainabilityData);
  console.log(data);
  // generate chart
  let chartContainer = document.querySelector('#cows');
  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      datasets: [{
        data: data.selfSuffiency,
        label: 'Self Suffiency in Feed (%)',
        fill: true,
        borderColor: "#ffd000",
        backgroundColor: gradientFill,
        pointBackgroundColor: "#f8b03c",
        pointBorderColor: "#f8b03c",
        pointHoverBackgroundColor: "f8b03c",
        pointHoverBorderColor: "f8b03c",
      }],
      labels: data.years
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 200
          }
        }]
      }
    }
  });
}

// 2: preparing the data
function prepareCarbonFootprintData(sustainabilityData) {
  // prepare data
  let carbonFootprint = [];
  let years = [];
  sustainabilityData.forEach(data => {
    if (data.region === 'south') { // in this case we only want the data from 'north'
      carbonFootprint.push(data.carbonFootprintWholeFarm);
      years.push(data.year);
    }
  });

  return {
    carbonFootprint,
    years
  }
}

//3: appending the chart
function appendCarbonFootprint(sustainabilityData) {
  let data = prepareCarbonFootprintData(sustainabilityData);
  console.log(data);

  // generate chart
  let chartContainer = document.querySelector('#carbonFootprint');
  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      datasets: [{
        data: data.carbonFootprint,
        label: 'Carbon Footprint',
        fill: true,
        borderColor: "#3a4443",
        backgroundColor: gradientFill,
        pointBackgroundColor: "#3a4443",
        pointBorderColor: "#3a4443",
        pointHoverBackgroundColor: "#3a4443",
        pointHoverBorderColor: "#3a4443",
      }],
      labels: data.years
    }
  });
}


// 2: preparing the data
function prepareMilkProductionData(sustainabilityData) {
  // prepare data
  let milkProduction = [];
  let years = [];
  sustainabilityData.forEach(data => {
    if (data.region === 'south') { // in this case we only want the data from 'north'
      milkProduction.push(data.herdMilkProduction);
      years.push(data.year);
    }
  });

  return {
    milkProduction,
    years
  }
}

//3: appending the chart
function appendMilkProduction(sustainabilityData) {
  let data = prepareMilkProductionData(sustainabilityData);
  console.log(data);

  // generate chart
  let chartContainer = document.querySelector('#milkProduction');
  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      datasets: [{
        data: data.milkProduction,
        label: 'Milk Production (liters)',
        fill: true,
        borderColor: "#99bfe6",
        backgroundColor: gradientFill,
        pointBackgroundColor: "#99bfe6",
        pointBorderColor: "#99bfe6",
        pointHoverBackgroundColor: "#99bfe6",
        pointHoverBorderColor: "#99bfe6",
      }],
      labels: data.years
    }
  });
}

var chartContainer = document.getElementById("carbonFootprint").getContext('2d');
var gradientFill = chartContainer.createLinearGradient(0, 0, 0, 800);
gradientFill.addColorStop(0, "rgba(255, 208, 0, 1)");
gradientFill.addColorStop(1, "rgba(255, 208, 0, 0.1)");