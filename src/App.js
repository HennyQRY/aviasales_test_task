import React from 'react';

import Filter from './components/Filter';
import Tickets from './components/Tickets';
import { useTickets, useFilter } from './hooks';
import { Logo } from './assets/icons';

const initialFilters = [
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
];

function App() {
  const { tickets, isLoading } = useTickets();

  const {
    data,
    filters,
    filterHandler,
    allFiltersHandler,
    isAllFiltersActive,
  } = useFilter({
    data: tickets,
    initialFilters,
  });

  return (
    <div className="wrapper">
      <div className="logo">
        <Logo />
      </div>
      <div className="content">
        <Filter
          filterHandler={filterHandler}
          allFiltersHandler={allFiltersHandler}
          filters={filters}
          isAllFiltersActive={isAllFiltersActive}
        />
        <Tickets data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
