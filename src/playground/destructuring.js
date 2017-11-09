// const person = {
//   name: 'Andrew',
//   age: 34,
//   location: {
//     city: 'Brussel',
//     temp: 14
//   }
// };
//
// const { name: firstName = "anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location
//
// if(city && temperature){
//   console.log(`It's ${temperature} in ${city}`);
// }
//
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Pinguin'
//   }
// }
// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);
//

// Array destrucuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];
//
// const [, city, state = 'New York'] = address;
//
// console.log(`You are in ${city} ${state}`);

const item = ['coffee (iced)', '$2.00', '$3.50', '$2.75' ];
const [menuItem, , medium] = item;
console.log(`A Medium ${menuItem} costs ${medium}.`);
