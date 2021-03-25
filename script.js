let computerPlay = () => {
    let computerChoice = Math.random();
    if (computerChoice <= 0.33) {
        console.log('rock')
    } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        console.log('paper')
    } else {
        console.log('scissors')
    }
} 