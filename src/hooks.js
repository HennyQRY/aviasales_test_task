import React from 'react';
import Api from './api';

export const useTickets = () => {
  const [tickets, setTickets] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getTickets = React.useCallback(async () => {
    try {
      const tickets = await Api.searchRequest();
      setTickets(tickets);
      setIsLoading(false);
    } catch {
      console.log('error');
    }
  }, []);

  React.useEffect(() => {
    getTickets();
  }, [getTickets]);

  return { tickets, isLoading };
};

export const useFilter = ({ data, initialFilters }) => {
  const [filters, setFilters] = React.useState(initialFilters);

  const filtersState = filters.map(({ active }) => active);
  const isAllFiltersActive = filtersState.every((i) => i);
  const isAllFiltersDisabled = filtersState.every((i) => !i);

  const filterHandler = (index) => {
    const current = [...filters];
    current[index].active = !current[index].active;
    setFilters(current);
  };

  const allFiltersHandler = () => {
    setFilters((current) =>
      [...current].map((f) => ({ ...f, active: !isAllFiltersActive }))
    );
  };

  const filteredData = data.filter((item) =>
    item.segments.every((segment) =>
      filters.some((_, index) => {
        const isActive = filters[index].active;
        return isActive ? index === segment.stops.length : false;
      })
    )
  );

  return {
    data: isAllFiltersDisabled ? data : filteredData,
    filters,
    filterHandler,
    allFiltersHandler,
    isAllFiltersActive,
  };
};
