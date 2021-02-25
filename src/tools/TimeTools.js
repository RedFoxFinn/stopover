
import {TIMES} from './Tester';

const secondsInMinute = 60;
const minutesInHour = 60;

export const estimate = (secondsFromMidnight, serviceDay) => {
  const current = process.env.NODE_ENV !== 'production' ? TIMES.TEST_NOW - TIMES.TEST_SERVICEDAY : (Date.now() / 1000) - serviceDay;
  const estimatedArrivalTime = secondsFromMidnight / (secondsInMinute * minutesInHour);
  const estimatedArrivalIn = Math.round(estimatedArrivalTime - (current / (secondsInMinute * minutesInHour)));
  console.log(estimatedArrivalIn);
  return estimatedArrivalIn;
};