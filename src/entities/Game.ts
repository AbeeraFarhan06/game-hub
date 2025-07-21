import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publishers";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[]
  publishers: Publisher[]
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number; //whole number
  rating: number; //floating-point number
}
