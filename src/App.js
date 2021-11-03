import React from 'react';

import axios from 'axios';

import { ReactComponent as Logo } from './assets/Logo.svg';

import Filter from './components/Filter';
import Tickets from './components/Tickets';
import { useFilter } from './useFilter';

function App() {
  const [ticketsData, setTicketsData] = React.useState([]);
  const [allFilter, setAllFilter] = React.useState(false);

  const getData = async (list) => {
    try {
      await axios
        .get(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${list.searchId}`
        )
        .then(({ data }) =>
          data.stop ? setTicketsData(data.tickets) : getData(list)
        );
    } catch (err) {
      getData(list);
    }
  };

  React.useEffect(() => {
    axios
      .get('https://front-test.beta.aviasales.ru/search')
      .then(({ data }) => {
        getData(data);
      });
  }, []);

  const onAllFilter = () => {
    setAllFilter(!allFilter);
  };

  const { data, filterHandler } = useFilter({
    data: ticketsData,
    initialFilters: [],
    allFilter: allFilter,
  });
  console.log(filterHandler);

  return (
    <div className='wrapper'>
      <div className='logo'>
        <Logo />
      </div>
      <div className='content'>
        <Filter
          filterHandler={filterHandler}
          allFilter={allFilter}
          onAllFilter={onAllFilter}
        />
        <Tickets data={data} />
      </div>
    </div>
  );
}

export default App;
