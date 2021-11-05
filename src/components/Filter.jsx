import React from 'react';

import { CheckboxEnable, CheckboxDisable } from '../assets/icons';

function Filter({
  filterHandler,
  filters,
  allFiltersHandler,
  isAllFiltersActive,
}) {
  return (
    <div className="filter">
      <div className="filter_title">Количество пересадок</div>
      <ul className="filter_list">
        <li className="filter_list_item" onClick={allFiltersHandler}>
          {isAllFiltersActive ? <CheckboxEnable /> : <CheckboxDisable />}
          <div className="filter_list_item_text">Все</div>
        </li>
        {filters.map((item, index) => {
          return (
            <li
              className="filter_list_item"
              onClick={() => filterHandler(index)}
              key={`${item.name}_${index}`}
            >
              {item.active ? <CheckboxEnable /> : <CheckboxDisable />}
              <div className="filter_list_item_text">{item.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
