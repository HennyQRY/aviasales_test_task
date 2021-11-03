import React from 'react';

import Sort from './Sort';

import dayjs from 'dayjs';
import Loader from './Loader';

function Tickets({ data }) {
  const [activeSortItem, setActiveSortItem] = React.useState(0);
  const [sliceCondition, setSliceCondition] = React.useState(5);

  const onChange = (index) => {
    setActiveSortItem(index);
  };

  const addSliceCondidon = () => {
    setSliceCondition(sliceCondition + 5);
  };

  return (
    <div className='tickets'>
      <Sort onChange={onChange} activeSortItem={activeSortItem} />

      {data.length
        ? data
            .sort((a, b) =>
              activeSortItem
                ? a.segments[0].duration +
                  a.segments[1].duration -
                  (b.segments[0].duration + b.segments[1].duration)
                : a.price - b.price
            )
            .map((item, index) => (
              <div className='tickets_form' key={`${item.price} ${index}`}>
                <div className='tickets_form_header'>
                  <p>{item.price} Р</p>
                  <img
                    src={`https://pics.avs.io/99/36/${item.carrier}.png`}
                    alt='avialogo'
                  />
                </div>
                <div className='tickets_form_main'>
                  {item.segments.map((el) => {
                    const durationFormat =
                      el.duration < 1440 ? 'Hч mм' : 'Dд Hч mм';
                    let tranfers;
                    switch (el.stops.length) {
                      case 1:
                        tranfers = '1 пересадка';
                        break;
                      case 2:
                        tranfers = '2 пересадки';
                        break;
                      case 3:
                        tranfers = '3 пересадки';
                        break;
                      default:
                        tranfers = 'Без пересадок';
                        break;
                    }
                    return (
                      <div
                        className='tickets_form_main_data'
                        key={`${el.duration} ${index}`}
                      >
                        <ul className='up'>
                          <li>
                            {el.origin} – {el.destination}
                          </li>
                          <li>В пути</li>
                          <li>{tranfers}</li>
                        </ul>
                        <ul className='down'>
                          <li>
                            {dayjs(el.date).format('HH:mm')} -{' '}
                            {dayjs(el.date)
                              .add(el.duration, 'minute')
                              .format('HH:mm')}
                          </li>
                          <li>
                            {dayjs('2021-01-01T00:00:00.000Z')
                              .hour(-24)
                              .minute(el.duration)
                              .format(durationFormat)}
                          </li>
                          <li>{el.stops.join(', ')}</li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
            .slice(0, sliceCondition)
        : Array(5)
            .fill(0)
            .map((_, index) => <Loader key={index} />)}
      <div className='tickets_show' onClick={() => addSliceCondidon()}>
        <p className='tickets_show_more'>Показать еще 5 билетов!</p>
      </div>
    </div>
  );
}

export default Tickets;
