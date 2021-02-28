export const firstLast = (items) => {

  if (items.length <= 2) { //verkar funka
  return `First: ${items[0]}, Last: ${items[1]}`
  
} else if (items.length > 2) { //verkar funka
  return `First: ${items[0]}, Last: ${items[items.length -1]}`


} else if (items.length === 1) { //funkar inte
  return `Only item: ${items[0]}`

} else if (items.length === 0) { //funkar inte
  return `No items!`
}
}
