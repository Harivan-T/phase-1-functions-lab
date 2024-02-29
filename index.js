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
        return 0; 
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02; 
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far'; 
    }
}

// Testing the function
console.log(calculatesFarePrice(34, 38)); 
console.log(calculatesFarePrice(34, 42)); 
console.log(calculatesFarePrice(34, 50)); 

// Testing the functions
console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInFeet(50));   
console.log(distanceTravelledInFeet(34, 38));
