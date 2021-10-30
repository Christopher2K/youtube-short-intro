export const LETTER_PRIMITIVES = {
  // A letter is a big square
  // The size of this square is 5 subsquare
  baseLetterSize: 300,
  squareDivision: 5,
  squarePadding: 3,

  squareSize: function () {
    return this.baseLetterSize / this.squareDivision + this.squarePadding * 2
  },
  letterSize: function () {
    return this.squareSize() * this.squareDivision
  },
}
