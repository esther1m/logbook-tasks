// Prompt the user to enter three names
let name1 = prompt("What's your name? ");       
let name2 = prompt("What's your name? ");       
let name3 = prompt("What's your name? ");       


// Store the names in an array
let names = [name1, name2, name3];

// Display each name and its length on the page
document.write("Hello " + names[0] + " there are " + names[0].length + " letters in your name <br>");
document.write("Hello " + names[1] + " there are " + names[1].length + " letters in your name <br>");
document.write("Hello " + names[2] + " there are " + names[2].length + " letters in your name <br>");

// Sort the names alphabetically
let alphabeticalNames = names.sort();

// Show sorted names in an alert box
console.log(alert("Here's a list of names in alphabetical order: \n" + alphabeticalNames.join("\n")));

// Reverse the sorted list and show it in an alert
let reverseNames = alphabeticalNames.reverse();
console.log(alert("Here's a list of names in reverse alphabetical order: \n" + reverseNames.join("\n")));


