const movieArray = [];

class Movie {
  constructor(title, actor = "not defined") {
    this.title = title;
    this.actor = actor;
  }

  add() {
    movieArray.push(this);
  }
}

module.exports = { Movie, movieArray };
