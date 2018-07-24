// @flow

const countNumberDays = (speed: number, speedReading: number, totalWords: number) => (
  Math.ceil(totalWords / (speed * speedReading))
);

export default countNumberDays;
