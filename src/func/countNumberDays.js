const countNumberDays = (speed, speedReading, totalWords) => {
    return Math.ceil(totalWords / (speed * speedReading));
}

export default countNumberDays;