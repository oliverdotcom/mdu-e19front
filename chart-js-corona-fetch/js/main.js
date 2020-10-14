"use strict";

// 1: data
// Array of objects
let _data = [];

async function getData() {
  let response = await fetch("json/data.json");
  _data = await response.json();
  appendChart();
};

getData();

// 2: prepare data for chart
// seperating the objects to arrays: dates and infected
// why? that's how chart.js reads the data :)
function prepareData(data) {
  // declaring two array to store the data 
  let dates = [];
  let infected = [];
  // looping through the data array
  for (const object of data) {
    // adding the values to the different arrays
    dates.push(object.date);
    infected.push(object.numberOfInfected);
  }
  // returning the two arrays inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    dates,
    infected
  };
}

// 3: create and append the chart
function appendChart() {
  // using prepareData() to get the excact data we want
  let data = prepareData(_data);
  //open the developer console to inspect the result
  console.log(data);
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
    },
    // Configuration options goes here
    // Go to the docs to find more: https://www.chartjs.org/docs/latest/
    options: {
      title: {
        display: true,
        text: 'Number of infected with Corona in DK'
      }
    }

  });
}