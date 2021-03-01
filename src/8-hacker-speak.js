//funkar

export const hackerSpeak = (words) => {
  if (words === words.toLowerCase()){
  return words.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0).replace(/s/gi, 5)
} else if (words === words.toUpperCase()) {
  return words.replace(/A/gi, 4).replace(/E/gi, 3).replace(/I/gi, 1).replace(/O/gi, 0).replace(/S/gi, 5)
}
}
