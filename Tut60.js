"use strict";

// sort() by default sort by assuming values as String(ASCII)

const num = [4, 100, 2, 3];
num.sort();

console.log(num);

// sort() gives first prioprity to uppercase letters cause of their first apperreance in ascii table
const text = ["ANKIT", "AKANSHA", "ankit", "akansha", "yash", "Ankit"];
text.sort();

console.log(text); 
