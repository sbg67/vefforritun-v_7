/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdðfghjklmnpqrstvwxzþ'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  // Útfæra
  if (str === undefined || !isString(str)) {
    return null;
  }
  if (isString(str)) {
    const words = split(str);
    let longestWord = '';
    
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
    }
  }
  return longestWord;
}
}
console.assert(longest('a bb ccc dddd') === 'dddd', 'longest: finnur lengsta orð í einföldum streng');
console.assert(longest(false) === null, 'longest: ef ekki strengur, skila null.');

function shortest(str) {
  // Útfæra
  if (str === undefined || !isString(str)) {
    return null;
  }
  if (isString(str)) {
    const words = split(str);
    
    if (words.length === 0) {
      return '';
    }
    
    let shortestWord = words[0];
    
    for (let word of words) {
      if (word.length < shortestWord.length) {
        shortestWord = word;
    }
  }
  return shortestWord;
}
}
console.assert(shortest('a bb ccc dddd') === 'a', 'shortest: finnur stysta orð í einföldum streng');
console.assert(shortest(false) === null, 'shortest: ef ekki strengur, skila null.');

function reverse(str) {
  // Útfæra
  if (isString(str)) {
    const split = str.split('');
    const reversed = split.reverse();
    return reversed.join('');
  }
  return null;
}
console.assert(reverse('hallo') === 'ollah', 'reverse: snýr við einföldum streng');
console.assert(reverse(false) === null, 'reverse: ef ekki strengur, skila null.');

function palindrome(str) {
  // Útfæra
  if (isString(str)) {
    const split = str.split('');
    const filtered = split.filter(char => char !== ' '); 
    const normalizedStr = filtered.join('').toLowerCase();
    const reversedStr = filtered.reverse().join('').toLowerCase();
    
    return normalizedStr === reversedStr;
  }
  return false;
}
console.assert(palindrome('raksápupáskar') === true, 'palindrome: Skilar `true` ef `str` er samhverfur.');
console.assert(palindrome('halló') === false, 'palindrome: Skilar `false` ef strengur er ekki samhverfur.');
console.assert(palindrome(12345) === false, 'palindrome: Skilar `false` ef ekki strengur.');

function vowels(str) {
  // Útfæra
  if (!isString(str)) return 0;

  const lagstafirStr = str.toLowerCase().split('');
  let fjoldi = 0;

  for (let char of lagstafirStr) {
    if (VOWELS.includes(char)) {
      fjoldi++;
    }
  }

  return fjoldi;
}
console.assert(vowels('Halló') === 2, 'vowels: skilar fjölda sérhljóða í streng');
console.assert(vowels(12345) === 0, 'vowels: skilar 0 ef inntak er ekki strengur');

function consonants(str) {
  // Útfæra
  if (!isString(str)) return 0;

  const lagstafirStr = str.toLowerCase().split('');
  let fjoldi = 0;

  for (let char of lagstafirStr) {
    if (CONSONANTS.includes(char)) {
      fjoldi++;
    }
  }

  return fjoldi;
}
console.assert(consonants('þaðan') === 3, 'consonants: skilar fjölda samhljóða í streng');
console.assert(consonants(12345) === 0, 'consonants: skilar 0 ef inntak er ekki strengur');

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
  alert("Vinsamlegast ritið inn streng, forritið mun gefa eftirfarandi upplýsingar um strenginn:\n" +
    "1. Lengsta orðið\n" +
    "2. Stysta orðið\n" +
    "3. Strengurinn afturábak\n" +
    "4. Fjöldi sérhljóða\n" +
    "5. Fjöldi samhljóða\n" +
    "6. Hvort strengurinn sé samhverfur");

  let input = prompt("Skrifið inn streng:");

  if (input !== null && input.trim() !== "") {
    let longestWord = longest(input);
    let shortestWord = shortest(input);
    let reversedString = reverse(input);
    let vowelCount = vowels(input);
    let consonantCount = consonants(input);
    let isPalindrome = palindrome(input);

    alert(
      `Niðurstöður:\n` +
      `Lengsta orð: ${longestWord}\n` +
      `Stysta orð: ${shortestWord}\n` +
      `Öfugur strengur: ${reversedString}\n` +
      `Fjöldi sérhljóða: ${vowelCount}\n` +
      `Fjöldi samhljóða: ${consonantCount}\n` +
      `Strengur er samhverfur 'true'= já 'false'= nei: ${isPalindrome}`
    );

    if (confirm("Mætti bjóða yður niðurstöður fyrir annan streng?")) {
      start();
    }
  } else {
    alert("Ekkert inntak, hættti keyrslu");
  }
}
