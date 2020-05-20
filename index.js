import { fifaData } from './fifa.js';
//console.log(fifaData);


console.log('HI JS');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data

(a) Home Team name for 2014 world cup final */
function filterByYear(fifaDataeElem) {
    if (fifaDataeElem.Year === 2014 && fifaDataeElem.Stage === 'Final') {
    return true;
    } else 
    return false;
}
const homeTeamName = fifaData.filter(x => x.Year === 2014 && x.Stage === 'Final').map(x => x['Home Team Name']);
console.log(homeTeamName);

/*
(b) Away Team name for 2014 world cup final
*/
const awayTeamName = fifaData.filter(filterByYear).map(x => x['Away Team Name']);
console.log(awayTeamName);

/*
(c) Home Team goals for 2014 world cup final
*/
const homeTeamGoals = fifaData.filter(filterByYear).map(x => x['Home Team Goals']);
console.log(homeTeamGoals);
/*
(d) Away Team goals for 2014 world cup final
*/
const awayTeamGoals = fifaData.filter(filterByYear).map(x => x['Away Team Goals']);
console.log(awayTeamGoals);
/*
(e) Winner of 2014 world cup final 
*/
function findWinner(fifaDataeElem) {
    if (fifaDataeElem['Home Team Goals'] > fifaDataeElem['Away Team Goals']) {
       return fifaDataeElem['Home Team Name'];
    } else {
        return fifaDataeElem['Away Team Name'];
    }
}
const winner = fifaData.filter(filterByYear).map(findWinner);
console.log(winner);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

// function getFinals(data) {
//     const finalsData = [];
//     for (let i=0; i<data.length; i++) {
//         if (data[i].Stage === 'Final') {
//             finalsData.push(data[i]);
//         }
//     } 
//     return finalsData;
// }

// console.log(getFinals(fifaData));

// function getFinals(data) {
//     const finalsData = data.filter(function(elem) {
//         if(elem.Stage === 'Final') {
//             return true;
//         } else {
//             return false;
//         }
//     });
//     return finalsData;
// }

function getFinals(data) {
    return data.filter(x => x.Stage === 'Final');
}
console.log(getFinals(fifaData));


// /* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(array, getFinals) {
    const finals = getFinals(array);
    const years = finals.map(x => x.Year);
    return years;
}
console.log(getYears(fifaData, getFinals));

// const teamYears = [];
// const getYears2 = fifaData.forEach(function (elem) {
//     return teamYears.push`${elem.Year}`;
// });
// console.log(teamYears);


// /* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */
function getWinners(data, getFinals) {
    const finals = getFinals(data);
    const winners = finals.map(x => x['Home Team Goals'] > x['Away Team Goals'] ? x['Home Team Name'] : x['Away Team Name']);
    return winners;
}
console.log(getWinners(fifaData, getFinals));

function getWinners2(data, getFinals) {
    let winners = [];
    const finals = getFinals(data);
    for (let i = 0; i < finals.length; i++) {
        if (finals[i]["Home Team Goals"] > finals[i]["Away Team Goals"]) {
            winners.push(finals[i]["Home Team Name"]);
        } else {
            winners.push(finals[i]["Away Team Name"]);
        }
    } 
    return winners;
}
console.log(getWinners2(fifaData, getFinals));

// /* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!"

// Parameters:
//  * callback function getWinners
//  * callback function getYears
//  */

function getWinnersByYear(list, getWinners, getYears) {
    const winners = getWinners(list, getFinals); // ['Italy', 'Italy', 'Germany']
    const years = getYears(list, getFinals);// [1930, 1934, 1938]
    const newArray = [];//['In 1930, Italy won the world cup!', 'In 1934, Italy won the world cup!', 'In 1938, Germany won the world cup!']
    for (let i=0; i < winners.length; i++) {
        newArray.push(`In ${years[i]}, ${winners[i]} won the world cup`);
    }
    return newArray;
}

console.log(getWinnersByYear(fifaData, getWinners2, getYears));

// /* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const averageHomeGoals = data.reduce((acc, x) => (acc + x['Home Team Goals']), 0) / data.length;
    const averageAwayGoals = data.reduce((acc, x) => (acc + x['Away Team Goals']), 0) / data.length;
    return [averageHomeGoals.toFixed(2), averageAwayGoals.toFixed(2)];
};
console.log(getAverageGoals(fifaData));

// /// STRETCH 🥅 //

// /* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had.

// Hint: Investigate your data to find "team initials"!
// Hint: use `.reduce` */

// function getCountryWins(/* code here */) {

//     /* code here */

// };

// getCountryWins();


// /* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

// function getGoals(/* code here */) {

//     /* code here */

// };

// getGoals();


// /* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

// function badDefense(/* code here */) {

//     /* code here */

// };

// badDefense();

// /* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
