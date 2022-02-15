const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const {
  addFilm,
  list,
  updateFilm,
  deleteFilm,
} = require("./Movies/movieMethod");
const argv = yargs(hideBin(process.argv)).argv;

const app = async () => {
  if (argv.add) {
    const filmObj = {
      name: argv.name,
      actor: argv.actor,
    };
    await addFilm(filmObj);
  } else if (argv.list) {
    await list();
  } else if (argv.update) {
    await updateFilm(
      {
        name: argv.name,
        actor: argv.actor,
        rating: argv.rating,
        year: argv.year,
      },
      { name: argv.old }
    );
  } else if (argv.delete) {
    await deleteFilm({ name: argv.film});
  }
};

app();
