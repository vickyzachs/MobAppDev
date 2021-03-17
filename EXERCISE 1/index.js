
// Name :Zachawerus, Evano Elmi Vicky

//ARRAY EXERCISES
//for each of the exercises below, assume you are starting with the following people array

//let people = ["Greg", "Mary", "Devon", "James"];

//1. Using a for-loop, iterate through this array and console.log all of the people
/*for (let i =0; i<=3; i ++)
{
    console.log(people[i]);
}
*/

//2. Using a forEach(),  iterate through this array and console.log all of the people.
/*people.forEach(function (name) 
{
    console.log(name);
});
*/

//3. Write the command to remove "Greg" from the array.
/*for (let i =1; i<=3; i ++)
{
    console.log(people[i]);
}
*/

//4. Write the command to remove "James" from the array
/*for (let i=0; i<=2; i++)
{
    console.log(people[i]);
}
*/

//5. Write the command to add "Matt" to the front of the array.
/*
let people = ["Matt", "Greg", "Mary", "Devon", "James"];
for (let i=0; i < people.length ; i++)
{
    console.log(people[i]);
}
*/

//6. Write the command to add your name to the end of the array.
/*
let people = ["Matt", "Greg", "Mary", "Devon", "James", "Evano"];
people.forEach(function (name) 
{
    console.log(name);
});
*/

//7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)
/*
let people = ["Greg", "Mary", "Devon", "James"];
people.forEach(function (name) 
{
    switch(name)
    {
        case "Greg":
            console.log(name);
        break;
        case "Mary":
            console.log(name);
        break;
    }
    
});
*/

//8. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
/*
let people = ["Greg", "Mary", "Devon", "Matt"];
people.map(function (name, index)
{
   if (index % 2 === 0)
   {
    console.log (name);
   }
   else
   {
       //console.log("not include", name)
       console.log()
   }
});
*/

//9. Redefine the people variable with the value you started with. 
    //Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". 
 //   let people = ["Greg", "Mary",["Elizabeth", "Artie"] , "James"];
    //Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
//    console.log(people);

//10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
/*
let withBob = "Bob";
let people = ["Greg", "Mary", "Devon", "Matt", withBob];

console.log(people);
*/


//OBJECT EXERCISES
//For each of the exercises below, assume you are starting with the following programming object.

//1. Write the command to add the language "Go" to the end of the languages array.
/*let languageGo = "Go";
let programming = {
    languages : ["JavaScript", "Python", "Ruby",languageGo],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

console.log(programming.languages);
*/

//2. By using the bracket notation, change the difficulty to the value of 7.
/*
let languageGo = "Go";
let programming = {
    languages : ["JavaScript", "Python", "Ruby",languageGo],
    isChallenging : true,
    isRewarding : true,
    difficulty : [8,7],
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

console.log(programming.difficulty[1]);
*/

//3. Using the delete keyword, write the command to remove the jokes key from the programming object.
/*let languageGo = "Go";
let programming = {
    languages : ["JavaScript", "Python", "Ruby", languageGo],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
console.log(programming.languages);
console.log(programming.isChallenging);
console.log(programming.isRewarding);
console.log(programming.difficulty);
*/

//4. By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
/*
let languageGo = "Go";
let programming = {
    languages : ["JavaScript", "Python", "Ruby",languageGo],
    isChallenging : true,
    isRewarding : true,
    isFun : true,
    difficulty : [8,7],
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//console.log(programming.isFun);
*/

//5. Using a map(), iterate through the languages array and update each element to be 
    //“0 - JavaScript, 1 - Python, … ”, where 0 represents the index of the array, and console.log the output.
/*    
    let languageGo = "Go";
    let programming = {
        languages : ["JavaScript", "Python", "Ruby",languageGo],
        isChallenging : true,
        isRewarding : true,
        difficulty : 8,
        jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
    };

let output = programming.languages;
    output.map(function(name,index){
        console.log(index,name);
    });
*/