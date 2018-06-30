// @flow

const countNumberDays = (speed: number, speedReading: number, totalWords: number) => {
    return Math.ceil(totalWords / (speed * speedReading));
}

export default countNumberDays;