# ABN TVMaze Back-end

This is a very tiny, very simple proxy server between our front-end and the
TVMaze API. Because the front-end requires data in a certain format that the
API doesn't support, we put this tiny server in between, so the front-end
doesn't have to make an excessive amount of API calls or computations.

The features this back-end exposes are very minimal. To support the "view shows
by genre" and "view shows by rating" functionalities of the front-end, this
server exposes two endpoints (`GET /genre_tv_shows` and `GET /shows_by_rating`,
respecively) that provide exactly the necessary data.

## Setup

- Install dependencies: `npm i`
- `npm run dev` will run the server on port 9088 by default

## Limitations and future additions

Due to the very short amount of time the the entire application was built, there
are numerous obvious shortcomings and short-cuts in the design of the
application.

- At the moment, the server uses a pre-saved JSON file of shows as it's data
  source (the results of TVMaze's Show Index API, pages 0 through 4).
- Because this server is currently so tiny, there's is hardly any use of
  patterns or structure. As the application grows, it should of course be kept
  in mind that the application should grow in a scalable and maintainable way.
