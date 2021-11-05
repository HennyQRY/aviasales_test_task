import React from 'react';

import Sort from './Sort';

import { sortComparator } from '../utils';
import Ticket from './Ticket';
import Loaders from './Loaders';

function Tickets({ data, isLoading }) {
  const [sortType, setSortType] = React.useState('price');
  const [sliceCondition, setSliceCondition] = React.useState(5);

  const onChange = (nextSortType) => {
    setSortType(nextSortType);
  };

  const addSliceCondidon = () => {
    setSliceCondition(sliceCondition + 5);
  };

  return (
    <div className="tickets">
      <Sort onChange={onChange} sortType={sortType} />
      {!isLoading ? (
        data
          .sort(sortComparator(sortType))
          .map((ticket, index) => (
            <Ticket ticket={ticket} key={`${ticket.price}_${index}`} />
          ))
          .slice(0, sliceCondition)
      ) : (
        <Loaders />
      )}
      <div className="tickets_show" onClick={() => addSliceCondidon()}>
        <p className="tickets_show_more">Показать еще 5 билетов!</p>
      </div>
    </div>
  );
}

export default Tickets;
