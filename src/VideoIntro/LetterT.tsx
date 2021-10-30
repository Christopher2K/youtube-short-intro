import { useCurrentFrame, useVideoConfig } from 'remotion'

import { LETTER_PRIMITIVES } from '../config'
import { Direction, Square, SquareProps } from './Square'

export type LetterTProps = {}

export const LetterT = ({}: LetterTProps) => {
  const { width, height, durationInFrames } = useVideoConfig()
  const frame = useCurrentFrame()

  const rootSize =
    LETTER_PRIMITIVES.letterSize() + LETTER_PRIMITIVES.squarePadding * 2

  const animatedFramesForEachSquare = durationInFrames / 9

  const top = height / 2 - rootSize / 2
  const left = width / 2 - rootSize / 2

  const dataStructureDescription: Pick<
    SquareProps,
    'animationDirection' | 'x' | 'y'
  >[] = [
    // HORIZONTAL BAR
    {
      animationDirection: Direction.fromLeft,
      x: LETTER_PRIMITIVES.squarePadding,
      y: LETTER_PRIMITIVES.squarePadding,
    },
    {
      animationDirection: Direction.fromLeft,
      y: LETTER_PRIMITIVES.squarePadding,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize(),
    },
    {
      animationDirection: Direction.fromTop,
      y: LETTER_PRIMITIVES.squarePadding,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2,
    },
    {
      animationDirection: Direction.fromRight,
      y: LETTER_PRIMITIVES.squarePadding,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 3,
    },
    {
      animationDirection: Direction.fromRight,
      y: LETTER_PRIMITIVES.squarePadding,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 4,
    },
    // VERTICAL BAR
    {
      animationDirection: Direction.fromBottom,
      y: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize(),
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2,
    },
    {
      animationDirection: Direction.fromBottom,
      y: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2,
    },
    {
      animationDirection: Direction.fromBottom,
      y: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 3,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2,
    },
    {
      animationDirection: Direction.fromBottom,
      y: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 4,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2,
    },
  ]

  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        width: rootSize,
        height: rootSize,
        border: '1px solid red',
        boxSizing: 'content-box',
      }}
    >
      {dataStructureDescription.map((description, index) => (
        <Square
          key={index}
          frame={frame}
          size={LETTER_PRIMITIVES.squareSize()}
          spacing={LETTER_PRIMITIVES.squarePadding}
          startingFrame={animatedFramesForEachSquare * index - 1}
          endingFrame={animatedFramesForEachSquare * (index + 1) - 1}
          {...description}
        />
      ))}
    </div>
  )
}
