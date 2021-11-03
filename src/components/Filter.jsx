import React from 'react';

import CheckboxEnable from '../assets/Checkbox_enable.svg';
import CheckboxDisable from '../assets/Checkbox_disable.svg';

function Filter({ filterHandler, allFilter, onAllFilter }) {
  const [filterList, setFilterList] = React.useState([
    {
      name: 'Без пересадок',
      active: false,
    },
    {
      name: '1 пересадка',
      active: false,
    },
    {
      name: '2 пересадки',
      active: false,
    },
    {
      name: '3 пересадки',
      active: false,
    },
  ]);

  const onSelectFilter = (index) => {
    const newState = [...filterList];
    newState[index].active = !newState[index].active;
    setFilterList(newState);
    filterHandler(index);
  };

  return (
    <div className='filter'>
      <div className='filter_title'>Количество пересадок</div>
      <ul className='filter_list'>
        <li className='filter_list_item' onClick={() => onAllFilter()}>
          <img src={allFilter ? CheckboxEnable : CheckboxDisable} alt='' />
          <div className='filter_list_item_text'>Все</div>
        </li>
        {filterList.map((item, index) => {
          return (
            <li
              className='filter_list_item'
              onClick={() => onSelectFilter(index)}
              key={`${item.name}_${index}`}
            >
              <img
                src={item.active ? CheckboxEnable : CheckboxDisable}
                alt=''
              />
              <div className='filter_list_item_text'>{item.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
