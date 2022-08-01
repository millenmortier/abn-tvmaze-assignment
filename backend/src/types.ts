interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country | null;
  officialSite: string | null;
}

export interface WebChannel {
  id: number;
  name: string;
  country: Country | null;
  officialSite: string;
}

export interface TvShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  } | null;
  rating: { average: number };
  weight: number | null;
  network: Network | null;
  webChannel: WebChannel | null;
  dvdCountry: null;
  externals: { tvrage: number; thetvdb: number; imdb: string } | null;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: { href: string };
    previousepisode: { href: string };
    nextepisode?: { href: string };
  } | null;
}

export interface SearchResult {
  score: number;
  show: TvShow;
}

export interface Season {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: Network | null;
  webChannel: WebChannel | null;
  image: {
    medium: string;
    original: string;
  };
  summary: string | null;
  _links: { self: { href: string } };
}

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: { average: number };
  image: { medium: string; original: string };
  summary: string | null;
  _links: { self: { href: string } };
}
