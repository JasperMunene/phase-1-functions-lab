 // Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    let HQ = 42
    if (distance >= HQ ) {
        return distance - HQ
    } else {
        return HQ - distance
    }
}

function distanceFromHqInFeet(value) {
   const distance = distanceFromHqInBlocks(value)
   const feetPerBlock = 264
   return feetPerBlock * distance
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264
    return Math.abs(destination - start) * feetPerBlock
}

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264
    let distance = Math.abs((destination - start) * feetPerBlock);
    if(distance < 400){
        return 0
    }else if(distance >=400 && distance <=2000){
        return Math.abs((distance - 400) * 0.02)
    }else if(distance >=2000 && distance < 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}


