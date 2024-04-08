
let students =
    [
        {
            name: 'Daniel',
            firstScore: 4,
            secondScore: 8
        },
        {
            name: 'Amanda',
            firstScore: 8,
            secondScore: 9
        },
        {
            name: 'Carol',
            firstScore: 5,
            secondScore: 8
        }
    ]

function studentAverage(numberA, numberB) {
    let average = (numberA + numberB) / 2
    return average.toFixed(2);
}


for (let student of students) {
    let average = studentAverage(student.firstScore, student.secondScore);
    let message = `The student's average ${student.name} is: ${average}\n`;
    if (average > 7) {
        message += `Congrats ${student.name}!`;
    } else {
        message += `Not this time, ${student.name} try again!`;
    }
    alert(message);
}
