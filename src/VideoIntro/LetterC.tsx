import { useCurrentFrame, useVideoConfig } from 'remotion'

import { LETTER_PRIMITIVES } from '../config'
import { Direction, Square, SquareProps } from './Square'

export type LetterCProps = {}

export const LetterC = ({}: LetterCProps) => {
  const { width, height, durationInFrames } = useVideoConfig()
  const frame = useCurrentFrame()

  const rootSize =
    LETTER_PRIMITIVES.letterSize() + LETTER_PRIMITIVES.squarePadding * 2

  const top = height / 2 - rootSize / 2
  const left = width / 2 - rootSize / 2

  const dataStructureDescription: Pick<
    SquareProps,
    'animationDirection' | 'x' | 'y'
  >[] = [
    // VERTICAL BAR
    {
      animationDirection: Direction.fromLeft,
      x: LETTER_PRIMITIVES.squarePadding,
      y: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2,
    },
    {
      animationDirection: Direction.fromBottom,
      x: LETTER_PRIMITIVES.squarePadding,
      y: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize(),
    },
    {
      animationDirection: Direction.fromTop,
      x: LETTER_PRIMITIVES.squarePadding,
      y: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 3,
    },
    // TOP BAR
    {
      animationDirection: Direction.fromLeft,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize(),
      y: LETTER_PRIMITIVES.squarePadding,
    },
    {
      animationDirection: Direction.fromLeft,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2,
      y: LETTER_PRIMITIVES.squarePadding,
    },
    {
      animationDirection: Direction.fromLeft,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 3,
      y: LETTER_PRIMITIVES.squarePadding,
    },
    {
      animationDirection: Direction.fromLeft,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 4,
      y: LETTER_PRIMITIVES.squarePadding,
    },
    // BOTTOM BAR
    {
      animationDirection: Direction.fromRight,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 4,
      y: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 4,
    },
    {
      animationDirection: Direction.fromRight,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 3,
      y: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 4,
    },
    {
      animationDirection: Direction.fromRight,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2,
      y: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 4,
    },
    {
      animationDirection: Direction.fromRight,
      x: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize(),
      y: LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 4,
    },
  ]

  const animatedFramesForEachSquare =
    durationInFrames / dataStructureDescription.length

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
