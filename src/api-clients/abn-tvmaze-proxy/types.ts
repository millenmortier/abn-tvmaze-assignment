import { TvShow } from '../tvmaze/types';

export interface GenreTvShowList {
  genre: string;
  tvShows: TvShow[];
}

export type GenreOverview = GenreTvShowList[];
