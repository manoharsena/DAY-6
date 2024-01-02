//1.Class Movie
/*a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.*/

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(input) {
    let out = input.filter((movie) => movie.rating === "PG");
    return out;
  }
}

const film1 = new Movie("Mark Antony", "Mini studios", "PG-16");
console.log(film1);

//output
/*
title: "Mark Antony"
studio: "Mini Studios"
rating: "PG-16" 
*/

//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

const film2 = new Movie("Mark Antony", "Mini Studios");
console.log(film2);

//output
/*
title: "Mark Antony"
studio: "Mini studios"
rating: "PG" 
*/

/*c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.*/

let movie1 = new Movie("Mark Antony", "Mini Studios", "PG-16");
let movie2 = new Movie("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new Movie("Kantara", "KRG Studios", "PG");
let movie4 = new Movie("Vikram", "Raj kamal films", "PG-13");
let movie5 = new Movie("veeram", "Vijaya production", "PG");

let movieArray = [movie1, movie2, movie3, movie4, movie5];
let pgMovies = Movie.getPG(movieArray);
console.log(pgMovies);

// Output:
/*
[ Moviee { title: 'Kantara', studio: 'KRG Studios', rating: 'PG' },
  Moviee { title: 'veeram', studio: 'Vijaya production', rating: 'PG' } ]
  */

/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/

let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log(casinoRoyale);

//OUTPUT:
/*
title: "Casino Royale"
studio: "Eon Productions"
rating: "PG-13"
*/
