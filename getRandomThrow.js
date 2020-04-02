function getRandomThrow() {
    let comp = Math.ceil(Math.random() * 3);
    if (comp === 1) {
        return 'rock';
    } else if (comp === 2) {
        return 'paper';
    } else if (comp === 3) {
        return 'scissors';
    }
}

export default getRandomThrow;

//1 rock 2 paper 3 scissors 