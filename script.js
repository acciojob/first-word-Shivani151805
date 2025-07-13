function firstWord(s) {
  // your code here
	s = s.trimStart();
	const index = s.indexOf(' ');
  if (index === -1) {
    return s; // No space found or empty string
  }
  return s.substring(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
