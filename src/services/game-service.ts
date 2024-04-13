import apiClient from "./api-client";

export interface Game {
  id: number;
  name: string;
}

export interface GameResponse {
  count: number;
  results: Game[];
}

export default {
  fetchAll: () => {
    return apiClient.get<GameResponse>("/games");
  },
};
