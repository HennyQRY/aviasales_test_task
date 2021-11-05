import React from 'react';

const sortList = [
  { name: 'Самый дешевый', type: 'price' },
  { name: 'Самый быстрый', type: 'duration' },
];

function Sort({ onChange, sortType }) {
  return (
    <ul className="sort">
      {sortList.map((item, index) => (
        <li
          key={`${index}_${item.name}`}
          className={item.type === sortType ? 'active' : ''}
          onClick={() => onChange(item.type)}
        >
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default Sort;
