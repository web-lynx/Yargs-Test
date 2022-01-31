const yargs = require("yargs");
const { Movie, movieArray } = require("./utils");

const app = (args) => {
  if (args.add) {
    const movie = new Movie(args.movie, args.actor);
    movie.add();
    console.log(movieArray);
  } else if (args.addMany) {
    console.log("Adding many");
  } else {
    console.log("Incorrect command.");
  }
};

app(yargs.argv);
