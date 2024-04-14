import api from "./api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface GameResponse {
  count: number;
  results: Game[];
}

export default {
  fetchAll: () => {
    return api.get<GameResponse>("/games");
  },
};
