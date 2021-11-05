import React from 'react';

import {
  declOfNum,
  durationFormatter,
  durationInTimeFormatter,
} from '../utils';

const transferForms = ['пересадка', 'пересадки', 'пересадок'];
const noStopsForm = 'Без пересадок';

function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket;
  return (
    <div className="tickets_form">
      <div className="tickets_form_header">
        <p>{price} Р</p>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="avialogo" />
      </div>
      <div className="tickets_form_main">
        {segments.map((segment, index) => {
          const { length: stops } = segment.stops;
          const tranfers = stops
            ? `${stops} ${declOfNum(stops, transferForms)}`
            : noStopsForm;
          return (
            <div
              className="tickets_form_main_data"
              key={`${segment.duration} ${index}`}
            >
              <ul className="up">
                <li>
                  {segment.origin} – {segment.destination}
                </li>
                <li>В пути</li>
                <li>{tranfers}</li>
              </ul>
              <ul className="down">
                <li>{durationFormatter(segment)}</li>
                <li>{durationInTimeFormatter(segment.duration)}</li>
                <li>{segment.stops.join(', ')}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ticket;
