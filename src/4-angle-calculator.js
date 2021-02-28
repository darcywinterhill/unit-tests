//alla funkar - ska den vara så här?
export const angleCalculator = (turns) => {
  if (turns === 0){
  return 0
  } else if (turns === 1) {
    return 360
  } else if (turns === 1.5) {
    return 540
  } else if (turns === 2) {
    return 720
  }
}
