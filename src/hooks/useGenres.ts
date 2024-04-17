import genres from "../data/genres";

export type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

// const useGenres = () => useData<Genre>("/genres"); // Realtime Genres
const useGenres = () => ({ data: genres, isLoading: false, error: null }); // Cached Genres

export default useGenres;
