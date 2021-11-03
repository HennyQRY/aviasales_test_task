import React from 'react';

const sortList = [{ name: 'Самый дешевый' }, { name: 'Самый быстрый' }];

function Sort({ onChange, activeSortItem }) {
  return (
    <ul className='sort'>
      {sortList.map((item, index) => (
        <li
          key={`${index}_${item.name}`}
          className={index === activeSortItem ? 'active' : ''}
          onClick={() => onChange(index)}
        >
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default Sort;
