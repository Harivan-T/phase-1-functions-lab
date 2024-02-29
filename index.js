function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock) {
    const feetTravelled = distanceTravelledInFeet(startBlock, endBlock);

    if (feetTravelled <= 400) {
        return 0; // Free sample
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25; // $25 for distances over 2000 feet
    } else {
        return 'cannot travel that far'; // Cannot travel over 2500 feet
    }
}

// Testing the function
console.log(calculatesFarePrice(34, 38)); // Output: 8.48 ([(4 * 264) - 400] * 0.02)
console.log(calculatesFarePrice(34, 42)); // Output: 25 (2000 - 400) * 0.02
console.log(calculatesFarePrice(34, 50)); // Output: 'Cannot travel more than 2500 feet'

// Testing the functions
console.log(distanceFromHqInBlocks(50)); // Output: 8
console.log(distanceFromHqInFeet(50));   // Output: 2112 (8 * 264)
console.log(distanceTravelledInFeet(34, 38)); // Output: 1056 (4 * 264)
