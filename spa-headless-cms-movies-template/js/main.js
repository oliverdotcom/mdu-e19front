"use strict";

// =========== Movie SPA functionality =========== //

//global variable
let _movies = [];

// fetch all movies from WP
async function getMovies() {
  // TODO: fetch movies from wp headless and call appendMovies
  // https://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed
  let response = await fetch("https://movie-api.cederdorff.com/wp-json/wp/v2/posts");
  let data = await response.json();
  console.log(data);
  _movies = data;
  appendMovies(_movies);
}

getMovies();

// append movies to the DOM
function appendMovies(movies) {
  // TODO: append movies to #movies-container

  let html = "";
  console.log(movies);

  for (const movie of movies) {
    html += /*html*/`
      <article>
        <h2>${movie.title.rendered} (${movie.acf.year})</h2>
        <img src="${movie.acf.img}">
        ${movie.content.rendered}
        <a class="button" href="${movie.acf.trailer}">Watch Trailer</a>
      </article>
    `;
  }
  console.log(html);
  document.querySelector("#movies-container").innerHTML = html;
  showLoader(false);
}

// search functionality
function search(value) {
  // TODO: search functionality
}

// fetch all genres / categories from WP
function getGenres() {
  // TODO: get categories from wp headless
  // https://movie-api.cederdorff.com/wp-json/wp/v2/categories
}

// append all genres as select options (dropdown)
function appendGenres(genres) {
  // TODO: append categories to #select-genre
}

// genre selected event - fetch movies by selected category
function genreSelected(genreId) {
  // TODO: fetch movies matching the given genreId
  // `https://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=${genreId}`
}

// append movies by genre
function appendMoviesByGenre(moviesByGenre) {
  // TODO: append movies using a for-of loop
}


// =========== Loader functionality =========== //

function showLoader(show) {
  let loader = document.querySelector('#loader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }
}