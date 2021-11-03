import React from 'react';

export const useFilter = ({ data, initialFilters, allFilter }) => {
  const [filters, setFilters] = React.useState(initialFilters);

  console.log(filters);

  const filterHandler = (index) => {
    const nextState = [...filters];
    if (nextState.indexOf(index) > -1)
      setFilters(nextState.filter((item) => item !== index));
    else {
      nextState.push(index);
      setFilters(nextState);
    }
  };

  if (allFilter || !filters?.length) return { data, filterHandler };
  const filteredData = data.filter((item) =>
    item.segments.every((segment) =>
      filters.some((condition) => condition === segment.stops.length)
    )
  );
  return { data: filteredData, filterHandler };
};
