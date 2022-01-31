'use strict';

let numberOfGilms = +prompt('How much films have you alredy watched?');

const personalMovieDB = {
  count: numberOfGilms,
  movie: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilm = prompt('Last film?');
const filmMark = prompt('Mark this film');

personalMovieDB.movie['lastFilm'] = filmMark;
console.log(personalMovieDB);
