const baseLetterSize = 300
const squareDivision = 5 // How many squares we can have in row / column of a letter

export const squarePadding = 3
export const squareSize = baseLetterSize / squareDivision + squarePadding * 2
export const letterSize = squareSize * squareDivision + squarePadding * 2

export const trueOrigin = squarePadding // We need this because we are starting to draw square after applying a padding to them

export function getOrigin({ after }: { after: number }): number {
  return trueOrigin + squareSize * after
}
