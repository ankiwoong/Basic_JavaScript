var names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];
function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return 'Hole-in-one!';
    } else if (strokes <= par - 2) {
        return 'Eagle';
    } else if (strokes == par - 1) {
        return 'Birdie';
    } else if (strokes == par) {
        return 'Par';
    } else if (strokes == par + 1) {
        return 'Bogey';
    } else if (strokes == par + 2) {
        return 'Double Bogey';
    } else {
        return 'Go Home!';
    }
    // Only change code above this line
}

console.log(golfScore(5, 4));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));
