import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatform";

const apiClient = new APIClient<Game>('/games')
export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number; //whole number
  rating: number //floating-point number
}

const useGames = () => {

  const gameQuery = useGameQueryStore(selector => selector.gameQuery)
  
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games' , gameQuery],
    queryFn : ({pageParam = 1}) => 
      apiClient
      .getAll({
         params: { 
          genres : gameQuery.genreId, 
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        }
      }),

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    
    staleTime: ms('24h')
  })

}
  
export default useGames;