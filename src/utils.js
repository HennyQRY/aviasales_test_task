import dayjs from 'dayjs';

export const sortComparator = (sortType) => (curr, next) => {
  if (sortType === 'duration') {
    const [currTo, currFrom] = curr.segments;
    const [nextTo, nextFrom] = next.segments;
    return (
      currTo.duration + currFrom.duration - nextTo.duration - nextFrom.duration
    );
  }
  return curr.price - next.price;
};

export const declOfNum = (number, forms) => {
  if (number > 10 && number < 20) return forms[2];
  if (number % 10 > 1 && number % 10 < 5) return forms[1];
  if (number % 10 === 1) return forms[0];
  return forms[2];
};

export const durationFormatter = ({ date: segmentDate, duration }) => {
  const date = dayjs(segmentDate);
  const timeStart = date.format('HH:mm');
  const timeEnd = date.add(duration, 'minute').format('HH:mm');
  return `${timeStart} - ${timeEnd}`;
};

// TODO refactor
export const durationInTimeFormatter = (duration) => {
  const durationMinutes = duration % 60;
  const durationHours = Math.floor((duration % 1440) / 60);
  const durationDays = Math.floor(duration / 1440);
  const durationFormat =
    duration < 1440
      ? `${durationHours}ч ${durationMinutes}м`
      : `${durationDays}д ${durationHours}ч ${durationMinutes}м`;
  return durationFormat;
};
