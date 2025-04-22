function firstChar(text) {
  // Trim the string to remove leading and trailing spaces
  const trimmedText = text.trim();

  // If the trimmed text is empty, return an empty string
  if (trimmedText === '') {
    return '';
  }

  // Return the first character of the trimmed string
  return trimmedText[0];
}

// Prompt the user for input
const text = prompt("Enter text:")
alert(firstChar(text));
