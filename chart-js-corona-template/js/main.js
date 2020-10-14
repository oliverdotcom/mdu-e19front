"use strict";

// 1: data
// Array of objects
let _data = [];

// 2: prepare data for chart
function prepareData(data) {

}

// 3: create and append the chart
function appendChart() {


  let chartContainer = document.getElementById('chartContainer');
  let chart = new Chart(chartContainer, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: data.dates, // refering to the data object, holding data from prepareData()
      datasets: [{
        data: data.infected, // refering to the data object, holding data from prepareData()
        label: 'Total number of Infected',
        backgroundColor: 'rgb(172, 198, 201)', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
        borderColor: 'rgb(38, 76, 89)'
      }]
    }
  });
}