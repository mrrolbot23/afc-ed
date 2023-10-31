const {TMDB_TOKEN} = process.env

exports.url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
exports.options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: TMDB_TOKEN,
  },
};

exports.getInfo = (url, options, req, res, route) => {
    fetch(url, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          res.render("error.ejs");
        }
      })
      .then((data) => {
        if (data.results.length === 0) {
          res.render("notFound.ejs")
        }
        res.render(route, { movies: data.results });
      })
      .catch((err) => console.error("error:" + err));
  };
