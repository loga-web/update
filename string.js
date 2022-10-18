const characters = [
    {
        first_name: 'Luke',
        last_name: 'Skywalker',
        eye_color: 'blue',
        gender: 'male',
        email: 'Luke@hotmail.com'
    },
    {
        first_name: 'Darth',
        last_name: 'Vader',
        eye_color: 'yellow',
        gender: 'male',
        email: 'Darth@hotmail.com'
    },
    {
        first_name: 'Leia',
        last_name: 'Organa',
        eye_color: 'brown',
        gender: 'female',
        email: 'Leia@hotmail.com'
    },
    {
        first_name: 'Leo',
        last_name: 'Skywalker',
        eye_color: 'blue',
        gender: 'male',
        email: 'Leo@hotmail.com'
    },
];
 
 
// *** charAt ***
// 1. Get an array of First Alphabet of all the last names
const newChar = characters.map((single) => {
return single.last_name.charAt(0);
})
console.log(newChar);
// 2. Get an array of all the names that starts with L


// 3. Get an array of all the names that ends with R
 
// *** concat ***
// 1. Get an array of full name by combining first_name and last_name
// 2. Create an array of a Sentence in the form "Max Kyle is a Male and has Green coloured eyes"
 
// *** toUpperCase/toLowerCase ***
// 1. Get an array of eye color in uppercase
const colorUppercase = characters.map((character) => {
    return character.eye_color.toUpperCase();
});
console.log(colorUppercase);
// 2. Get an array of full name in lowercase
const colorLowercase = characters.map((character) => {
    return character.first_name.toLowerCase();
    
});
console.log(colorLowercase);
 
// *** replace ***
// 1. Get an array of emails, and replace "hotmail" with "gmail"
 
 
// *** substr/charAt ***
// 1. Get an array of first three alphabets of first name
// 2. Get an array of last three alphabets of last name
// 3. Get an array of subject part of every email (e.g. Leo in Leo@gmail.com)