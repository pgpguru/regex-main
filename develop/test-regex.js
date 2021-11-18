let sentence = "quick brown fox jumped of the lazy dog."
let regex = /the/
let myString = "Hello, regex";
let myRegex = /Hello/
let result = myRegex.test(myString);
console.log(result);
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let results = extractStr.match(codingRegex);
console.log(result);
let crowd = 'bruhmoment';
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
let username = "bruh";
let userCheck = /^[A-Za-z]{2,}\d*$/;
let result = userCheck.test(username);
let sampleWord = 'astronaut';
let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);
let repeatNum = "42, 42, 42";
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);
let huhText = "onfonem grave.";
let fixRegex = /good/;
let replaceText ="okie-dokie";
let result = huhText.replace(fixRegex, replaceText);
let hello = "  Hello, Regex  "
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, '');
console.log(result)
