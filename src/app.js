const yargs = require("yargs");
const { Movie, movieArray, Book, bookArray } = require("./utils");

// const movieApp = (args) => {
//   if (args.add) {
//     const movie = new Movie(args.movie, args.actor, args.genre, args.rating);
//     movie.add();
//     console.log(movieArray);
//   } else if (args.addmany) {
//     console.log("Adding many");
//   } else {
//     console.log("Incorrect command.");
//   }
// };

// movieApp(yargs.argv);

const bookApp = (args) => {
  if (args.add) {
    const book = new Book(args.title, args.author, args.genre, args.rating);
    book.add();
    console.log(bookArray);
  } else if (args.addmany) {
    const book1 = new Book(args.title, args.author, args.genre, args.rating);
    const book2 = new Book(
      args.title2,
      args.author2,
      args.genre2,
      args.rating2
    );
    book1.add();
    book2.add();
    console.log(bookArray);
  } else {
    console.log("Incorrect command.");
  }
};

bookApp(yargs.argv);
