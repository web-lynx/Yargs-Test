const movieArray = [];

class Movie {
  constructor(title, actor, genre, rating = "not defined") {
    this.title = title;
    this.actor = actor;
    this.genre = genre;
    this.rating = rating;
  }

  add() {
    movieArray.push(this);
  }
}

const bookArray = [];

class Book {
  constructor(title, author, genre, rating = "not defined") {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.rating = rating;
  }

  add() {
    bookArray.push(this);
  }
}

module.exports = { Movie, movieArray, Book, bookArray };
