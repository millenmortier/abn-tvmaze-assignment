import express from "express";
import getGenreTvShows from "./getGenreTvShows";
import getShowsByRating from "./getShowsByRating";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 9088;

app.use(cors());

app.get("/genre_tv_shows", async (req, res) => {
  res.json(await getGenreTvShows());
});

app.get("/shows_by_rating", async (req, res) => {
  res.json(await getShowsByRating());
});

app.listen(PORT, () => {
  console.error(`Server is listening on port ${PORT}`);
});
