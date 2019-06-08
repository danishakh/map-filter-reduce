// JS arrays have several built in functions called higher order functions - filter, map, reduce, forEach

const players = [
    {
        name: 'cristiano ronaldo',
        age: '29',
        club: 'juventus',
        nationality: 'portugal'
    },
    {
        name: 'paulo dybala',
        age: '24',
        club: 'juventus',
        nationality: 'argentina'
    },
    {
        name: 'lionel messi',
        age: '29',
        club: 'barcelona',
        nationality: 'argentina'
    },
    {
        name: 'kylian mbappe',
        age: '22',
        club: 'psg',
        nationality: 'france'
    },
    {
        name: 'paul pogba',
        age: '27',
        club: 'manchester united',
        nationality: 'france'
    },
    {
        name: 'eden hazard',
        age: '29',
        club: 'chelsea',
        nationality: 'belgium'
    },
    {
        name: 'kun aguero',
        age: '28',
        club: 'manchester city',
        nationality: 'argentina'
    },
    {
        name: 'marcus rashford',
        age: '23',
        club: 'manchester united',
        nationality: 'england'
    },
    {
        name: 'mohammad salah',
        age: '26',
        club: 'liverpool',
        nationality: 'egypt'
    },
    {
        name: 'neymar jr',
        age: '28',
        club: 'psg',
        nationality: 'brazil'
    },
    {
        name: 'dele alli',
        age: '25',
        club: 'tottenham',
        nationality: 'england'
    },
    {
        name: 'angel di maria',
        age: '27',
        club: 'psg',
        nationality: 'argentina'
    },
    {
        name: 'ji sung park',
        age: '35',
        club: 'manchester united',
        nationality: 'south korea'
    },
    {
        name: 'wayne rooney',
        age: '33',
        club: 'manchester united',
        nationality: 'england'
    }
]


// ========================
// FILTER
// ========================

// filter is a method that runs on a given collection/array, and filters item based on a function that 
// returns a boolean (true or false) value. And outputs a new array.

// filter is a great way to quickly parse data, leaving only what is relevant to us. 

// Example: create another array with all players from Argentina 
let argentinaPlayers = players.filter(player => {
    return player.nationality === 'argentina';
});
//console.log(argentinaPlayers);

// we can even pass in a named function for our callback
const getArgentinaPlayers = player => player.nationality === 'argentina';

let argentinaPlayers2 = players.filter(getArgentinaPlayers);
//console.log(argentinaPlayers2);




// ========================
// MAP
// ========================

// The map() method creates a new array with the results of calling a provided function on every element in the calling array. 
// Essentially, the map method creates a new array, based on the initial array. 

// Similar to the filter() method structure we must pass a function here as well. 
// But instead of filtering items in the original array, WE TRANSFORM DATA!


// Example: create an array of all the names of the players

// let playerNames = [];
// for(let i = 0; i < players.length; i++){
//     playerNames.push(players[i].name);
// }
// console.log('player names', playerNames);

// better solution than a for loop
let playerNames = players.map(player => {
    return player.name;
    //return player.name.split(' ');
});
//console.log('player names', playerNames);


// Another example
// Convert array of Celcius temps to Farhenheit
const celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
const fahrenheit = celsius.map(t => t * 1.8 + 32);
// console.log(fahrenheit);



// ========================
// REDUCE
// ========================

// The reduce() method applies a function against an accumulator and each element in the array 
// (from left to right) to reduce it to a single value.

// reduce() is like the swiss army knife of list transformations. It can be used to express any transformation! 
// In fact, we can even use reduce() to implement map() and filter().


// Classic Reduce Example: sum up the values of an array
const values = [11, 25, 26, 54, 87, 100];

const sum = values.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);      //initial value for accumulator = 0

//console.log(sum);

// According to the documentation, when no initialValue is supplied, the first element in the array will be used. 
// Although this example works out without supplying an initial value, I recommend getting used to always supplying one. 
// This is going to prevent future bugs, and also require you to think if the reduction you’re trying to do on your array makes sense.



// We can also implement map or filter with reduce

// ************* Map with Reduce *************
const data = [10, 20, 30];

const tripledWithMap = data.map(item => {
  return item * 3;
});

const tripledWithReduce = data.reduce((acc, value) => {
  acc.push(value * 3);
  return acc;
}, []);
//console.log(tripledWithMap, tripledWithReduce);



// ************* Filter with Reduce *************
const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddWithFilter = data2.filter(item => {
  return item % 2 === 1;
})
const oddWithReduce = data2.reduce((acc, value) => {
  if (value % 2 === 1) {
    acc.push(value);
  }
return acc;
}, []);
// console.log(oddWithFilter, oddWithReduce);


// =============================
// More practical uses of reduce
// =============================

// From the players array, list the number of players for each club
const clubCount = players.reduce((acc, player) => {
    acc[player.club] = acc[player.club] + 1 || 1;
    return acc;
}, {})
//console.log(JSON.stringify(clubCount));

