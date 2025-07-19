import usePlatforms from "./usePlatform";

const usePlat = ( id?: number) => {

    const { data: platforms } = usePlatforms();
    return platforms?.results.find(
      (p) => p.id === id
    );

}

export default usePlat