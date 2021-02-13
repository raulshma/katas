//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  const words = str.split(' ');
  const punctuations = ['!', ',', '?'];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (punctuations.includes(word)) continue;
    word = word + word[0] + 'ay';
    words[i] = word.substring(1, word.length);
  }
  return words.join(' ');
}
