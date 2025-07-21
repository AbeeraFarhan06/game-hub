import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatform'
import Platform from "../entities/Platform";
import usePlat from '../hooks/UsePlat';
import useGameQueryStore from '../store';

const PlatformSelector = () => {

  const {data, error} =usePlatforms();

  const setSelectPlatform = useGameQueryStore(selector => selector.setPlatformId)

  const selectedPlatformId = useGameQueryStore(selector => selector.gameQuery.platformId)
  const selectedPlatform = usePlat(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platform'}</MenuButton>
        <MenuList>
            {data?.results.map((platform: Platform) => <MenuItem onClick={ () => setSelectPlatform(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector