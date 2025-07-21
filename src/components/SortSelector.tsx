import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../store';


const SortSelector = () => {

  const sortOrders = [
    {value: '', label: 'Relevence'},
    {value: '-added', label: 'Date Added'},
    {value: 'name', label: 'Name'},
    {value: '-released', label: 'Release Date'},
    {value: '-metacritic', label: 'Popularity'},
    {value: '-rating', label: 'Rating'},
  ];

  const setSelectSortOrder = useGameQueryStore(selector => selector.setSortOrder)

  const sortOrder = useGameQueryStore(selector => selector.gameQuery.sortOrder)
  const currentSortOrder = sortOrders.find(o => o.value === sortOrder);

  return (
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
          Order By: {currentSortOrder?.label || 'Relevence'}
          </MenuButton>
          <MenuList>
            {sortOrders.map(order => 
            <MenuItem onClick={() => setSelectSortOrder(order.value)} key={order.value} value={order.value}>
                {order.label}
            </MenuItem>)}
          </MenuList>
      </Menu>
    )
}

export default SortSelector