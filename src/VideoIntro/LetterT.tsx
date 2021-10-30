import { useCurrentFrame, useVideoConfig } from 'remotion'

import { LETTER_PRIMITIVES } from '../config'
import { Direction, Square } from './Square'

export type LetterTProps = {}

export const LetterT = ({}: LetterTProps) => {
  const { width, height, fps, durationInFrames } = useVideoConfig()
  const frame = useCurrentFrame()

  const rootSize =
    LETTER_PRIMITIVES.letterSize() + LETTER_PRIMITIVES.squarePadding * 2

  const animatedFramesForEachSquare = durationInFrames / 9

  const top = height / 2 - rootSize / 2
  const left = width / 2 - rootSize / 2

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
      {/* HORIZONTAL BAR */}
      <Square
        animationDirection={Direction.fromLeft}
        frame={frame}
        startingFrame={0}
        endingFrame={animatedFramesForEachSquare - 1}
        x={LETTER_PRIMITIVES.squarePadding}
        y={LETTER_PRIMITIVES.squarePadding}
        size={LETTER_PRIMITIVES.squareSize()}
        spacing={LETTER_PRIMITIVES.squarePadding}
      />

      <Square
        animationDirection={Direction.fromLeft}
        frame={frame}
        startingFrame={animatedFramesForEachSquare - 1}
        endingFrame={animatedFramesForEachSquare * 2 - 1}
        y={LETTER_PRIMITIVES.squarePadding}
        x={LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize()}
        size={LETTER_PRIMITIVES.squareSize()}
        spacing={LETTER_PRIMITIVES.squarePadding}
      />
      <Square
        animationDirection={Direction.fromTop}
        frame={frame}
        startingFrame={animatedFramesForEachSquare * 2 - 1}
        endingFrame={animatedFramesForEachSquare * 3 - 1}
        y={LETTER_PRIMITIVES.squarePadding}
        x={LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2}
        size={LETTER_PRIMITIVES.squareSize()}
        spacing={LETTER_PRIMITIVES.squarePadding}
      />
      <Square
        animationDirection={Direction.fromRight}
        frame={frame}
        startingFrame={animatedFramesForEachSquare * 3 - 1}
        endingFrame={animatedFramesForEachSquare * 4 - 1}
        y={LETTER_PRIMITIVES.squarePadding}
        x={LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 3}
        size={LETTER_PRIMITIVES.squareSize()}
        spacing={LETTER_PRIMITIVES.squarePadding}
      />
      <Square
        animationDirection={Direction.fromRight}
        frame={frame}
        startingFrame={animatedFramesForEachSquare * 4 - 1}
        endingFrame={animatedFramesForEachSquare * 5 - 1}
        y={LETTER_PRIMITIVES.squarePadding}
        x={LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 4}
        size={LETTER_PRIMITIVES.squareSize()}
        spacing={LETTER_PRIMITIVES.squarePadding}
      />

      <Square
        animationDirection={Direction.fromBottom}
        frame={frame}
        startingFrame={animatedFramesForEachSquare * 5 - 1}
        endingFrame={animatedFramesForEachSquare * 6 - 1}
        y={LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize()}
        x={LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2}
        size={LETTER_PRIMITIVES.squareSize()}
        spacing={LETTER_PRIMITIVES.squarePadding}
      />
      <Square
        animationDirection={Direction.fromBottom}
        frame={frame}
        startingFrame={animatedFramesForEachSquare * 6 - 1}
        endingFrame={animatedFramesForEachSquare * 7 - 1}
        y={LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2}
        x={LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2}
        size={LETTER_PRIMITIVES.squareSize()}
        spacing={LETTER_PRIMITIVES.squarePadding}
      />
      <Square
        animationDirection={Direction.fromBottom}
        frame={frame}
        startingFrame={animatedFramesForEachSquare * 7 - 1}
        endingFrame={animatedFramesForEachSquare * 8 - 1}
        y={LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 3}
        x={LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2}
        size={LETTER_PRIMITIVES.squareSize()}
        spacing={LETTER_PRIMITIVES.squarePadding}
      />
      <Square
        animationDirection={Direction.fromBottom}
        frame={frame}
        startingFrame={animatedFramesForEachSquare * 8 - 1}
        endingFrame={animatedFramesForEachSquare * 9 - 1}
        y={LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 4}
        x={LETTER_PRIMITIVES.squarePadding + LETTER_PRIMITIVES.squareSize() * 2}
        size={LETTER_PRIMITIVES.squareSize()}
        spacing={LETTER_PRIMITIVES.squarePadding}
      />
    </div>
  )
}
