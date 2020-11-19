const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?');
const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних фильмов'),
c = +prompt('Ваша оценка?'),
b = prompt('Один из последних фильмов'),
d = +prompt('Ваша оценка?');
personalMovieDB.movies[a] = c;
personalMovieDB.movies[b] = d;

console.log(personalMovieDB);