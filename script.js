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

// Do not change the code below
// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));
