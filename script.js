
// for(let i=1; i<15; i++)
// {
//     let b=i*7;
//     alert(b);
// }


// let a=1;
// while(a<10)
// {
//     let b=a*7;
//     alert(b);
//     a++;
//     if(b==35)
//     {
//         break;
//     }

// }
// function sum(a,b)
// {
//     alert(a+b);
// }
// sum(1,2)

// 

// function cal(a,b,x)
// {
//     if(x=='add')
//     {
//         alert(a+b);
//     }
//     if(x=='sub')
//     {
//         alert(a-b);
//     }
//     if(x=='mul')
//     {
//         alert(a*b);
//     }
//     if(x=='div')
//     {
//         alert(a/b);
//     }
// }
// cal(1,2,'add')
// cal(29984,35467,'sub')
// cal(1,2,'mul')
// cal(1,2,'div')

// function cal(x,a,b)
// switch(x){
//     case 'add':
//         alert(a+b);
//         break;
// }


// let friend = {
//     name: 'sathvi',
//     age:35,
//     gender:'f',
//     country: 'india',
// };

// console.log(friend.name);
// friend.country='Germany';
// console.log(friend.country);
// friend.sex='f';
// console.log(friend.sex);

// let friend1 = {
//     ...friend
// };
// console.log(friend1.age);


const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
 
//***MAP***
//1. Get array of all names

const onlyNames = characters.map((Element) => {
return Element.name;
});

//2. Get array of all heights
const onlyHeight = characters.map((Element) => {
    return Element.height;
});
//3. Get array of objects with just name and height properties


//4. Get array of all first names
 
//***FIND & FINDINDEX***
//1. Find the first character with a height bigger than 100 but smaller than 170
//2. Find the first character with an eye color different from blue
//3. Find the first character's index that is female
//4. Find the first character's index whose name contains "Leia"
 
//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters
 
//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender
 
//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?
 
//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?