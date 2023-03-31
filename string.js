//1.charAt(x)
var myString = 'AajQuery FTW!!!';  //starts from 0
console.log(myString.charAt(7));

//2.charCodeAt(x)
console.log(myString.charCodeAt(1))

//3.Concat(v1,v2,...)
console.log(myString.concat(" is Important.", " Learn It"))

//4. fromCharCode(c1, c2);
console.log(String.fromCharCode(97, 98, 99, 100, 120));
console.log(String.fromCharCode(72,69,76,76,79))

//5. String.indexOf()  --->> Error wil return -1.
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'DOG';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(indexOfFirst);
console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);

//6.String.lastIndexOf()
console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);

//7..match()
const regex = /[A-Z]/g; //shows all Uppercase latter in entire string
const found = paragraph.match(regex);

console.log(found);

//8. .replace()
console.log(paragraph.replace('dog', 'monkey'));

//9. .search()
// Any character that is not a word character or whitespace
const regex1 = /[^\w\s]/g;

console.log(paragraph.search(regex1));
console.log(paragraph[paragraph.search(regex1)]);

//10. .slice();
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(4));
console.log(str.slice(4,19));
console.log(str.slice(-4));
console.log(str.slice(-9, -5));

//11. .Split()
// console.log(str.split(''))
const words = str.split(' ')  //By (' ') it will select words
console.log("split", words[5])

const wrd = str.split('');
console.log("char", wrd[10])

const strcopy = str.split();
console.log(strcopy)

//13. substring()  ==> from the start index up to and excluding the end index
console.log( str.substring(1,9))

//14. toLowecase()
console.log(str.toLowerCase());

//15 .toUppercase()
console.log(str.toUpperCase());

//16. .includes()
const check = "brown"
console.log(str.includes(check));

//17. .endsWith()
const str1 = 'Cats are the best!';
console.log(str1.endsWith("best!"))

//18. repeat()
const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`);

//19. valueOf()    ---> It is used to return the primitive value of a String object.
const strObj = new String("foo");
console.log(strObj)
console.log(strObj.valueOf())

//20. trim()  -->>This function removes whitespace from both ends of a string.
const str2 = "     Hello Edureka!     ";

console.log(str2.trim())