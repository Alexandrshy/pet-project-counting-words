// @flow

const randomIndex = (min: number, max: number) => {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

export default randomIndex;