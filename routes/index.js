var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;

// ClassJs http://acmp.ru/index.asp?main=task&id_task=344

function foundShotPointsLine(numberPoints, pointsArray) {
    const sortArray = [...pointsArray];

    sortArray.sort((i, z) => i - z);

    let minLength = sortArray[1] - sortArray[0];
    let minLengthPoints = [sortArray[0], sortArray[1]];

    sortArray.reduce((prev, current) => {
        if (current - prev < minLength) {
            minLength = current - prev;
            minLengthPoints = [prev, current];
        }

        if (minLength === 0) {
            throw new Error('Zero Length');
        }

        if (minLength === 1) {
            return;
        }
        return current;
    });

    console.log(sortArray);
    console.log(pointsArray);

    return `${ minLength } points: ${ pointsArray.findIndex((item) => item === minLengthPoints[0]) + 1 } ${ pointsArray.findIndex((item) => item === minLengthPoints[1]) + 1 }`;
}

console.log(foundShotPointsLine(5, [10, 3, 6, 2, 5]));
console.log(foundShotPointsLine(5, [10, 1, 6, 12, 11]));
console.log(foundShotPointsLine(5, [100, 77, 15, 22, 99]));
console.log(foundShotPointsLine(5, [12, 88, 15, 99, 79]));
console.log(foundShotPointsLine(5, [100, 77, 55, 22, 11]));
