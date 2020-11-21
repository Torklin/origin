
const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?');
const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    const a = prompt('Один из последних фильмов'),
    c = +prompt('Ваша оценка?');
    
    if(a != null && c != null && a != '' && c != '' && a.length < 50) {
        personalMovieDB.movies[a] = c;
    } else {
        console.log('error');
        i--;
    }
    

}
if (personalMovieDB.count < 10) {
    alert ('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 31) { 
    alert ('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert ('Вы киноман');
} else {
    alert ('Произошла ошибка');
}


console.log(personalMovieDB);