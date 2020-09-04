"use strict";

// =========== Movie SPA functionality =========== //

let _movies = [];

// fetch all movies from WP
async function getMovies() {
  let response = await fetch("https://movie-api.cederdorff.com/wp-json/wp/v2/posts");
  let data = await response.json();
  console.log(data);
  _movies = data;
  appendMovies(data);
  showLoader(false);
}

getMovies();

// append movies to the DOM
function appendMovies(movies) {
  let htmlTemplate = "";

  for (let movie of movies) {
    htmlTemplate += /*html*/ `
      <article>
        <h2>${movie.title.rendered} (${movie.acf.year})</h2>
        <img src="${movie.acf.img}">
        <p>${movie.acf.description}</p>
        <iframe src="${movie.acf.trailer}"></iframe>
      </article>
    `;
  }

  document.querySelector('#movies-container').innerHTML = htmlTemplate;
}

// search functionality
function search(value) {
  let searchQuery = value.toLowerCase();
  let filteredMovies = [];
  for (let movie of _movies) {
    let title = movie.title.rendered.toLowerCase();
    if (title.includes(searchQuery)) {
      filteredMovies.push(movie);
    }
  }
  appendMovies(filteredMovies);
}

// fetch all genres / categories from WP
async function getGenres() {
  let response = await fetch("https://movie-api.cederdorff.com/wp-json/wp/v2/categories");
  let data = await response.json();
  console.log(data);
  appendGenres(data);
}

getGenres();

// append all genres as select options (dropdown)
function appendGenres(genres) {
  let htmlTemplate = "";
  for (let genre of genres) {
    htmlTemplate += /*html*/ `
      <option value="${genre.id}">${genre.name}</option>
    `;
  }
  document.querySelector('#select-genre').innerHTML += htmlTemplate;
}

// genre selected event - fetch movies by selected category
async function genreSelected(genreId) {
  console.log(`Genre ID: ${genreId}`);
  if (genreId) {
    showLoader(true);
    let response = await fetch(`https://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=${genreId}`)
    let data = await response.json();
    console.log(data);
    appendMoviesByGenre(data);
    showLoader(false);
  } else {
    document.querySelector('#movies-by-genre-container').innerHTML = /*html*/ `
      <p>Please, select genre</p>
    `;
  }
}

// append movies by genre
function appendMoviesByGenre(moviesByGenre) {
  let htmlTemplate = "";
  for (let movie of moviesByGenre) {
    htmlTemplate += /*html*/ `
      <article>
        <h2>${movie.title.rendered} (${movie.acf.year})</h2>
        <img src="${movie.acf.img}">
        <p>${movie.acf.description}</p>
        <iframe src="${movie.acf.trailer}"></iframe>
      </article>
    `;
  }

  // if no movies, display feedback to the user
  if (moviesByGenre.length === 0) {
    htmlTemplate = /*html*/ `
      <p>No Movies</p>
    `;
  }

  document.querySelector('#movies-by-genre-container').innerHTML = htmlTemplate;
}


// =========== Loader functionality =========== //

function showLoader(show = true) {
  let loader = document.querySelector('#loader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }
}

showLoader();
showLoader(true);
showLoader(false);