import { useCurrentFrame } from 'remotion'

import {
  getOrigin,
  trueOrigin,
  letterSize,
  squareSize,
  squarePadding,
} from '../../config'
import { LetterProps } from '../../types'

import { Container } from './Container'
import { Direction, Square, SquareProps } from './../Square'

export const N = ({ lastFrame }: LetterProps) => {
  const frame = useCurrentFrame()

  const dataStructureDescription: Pick<
    SquareProps,
    'animationDirection' | 'x' | 'y'
  >[] = [
    // LEFT BAR
    {
      animationDirection: Direction.fromBottom,
      x: trueOrigin,
      y: getOrigin({ after: 4 }),
    },
    {
      animationDirection: Direction.fromBottom,
      x: trueOrigin,
      y: getOrigin({ after: 3 }),
    },
    {
      animationDirection: Direction.fromBottom,
      x: trueOrigin,
      y: getOrigin({ after: 2 }),
    },
    {
      animationDirection: Direction.fromBottom,
      x: trueOrigin,
      y: getOrigin({ after: 1 }),
    },
    {
      animationDirection: Direction.fromBottom,
      x: trueOrigin,
      y: trueOrigin,
    },
    // RIGHT BAR
    {
      animationDirection: Direction.fromTop,
      x: getOrigin({ after: 4 }),
      y: trueOrigin,
    },
    {
      animationDirection: Direction.fromTop,
      x: getOrigin({ after: 4 }),
      y: getOrigin({ after: 1 }),
    },
    {
      animationDirection: Direction.fromTop,
      x: getOrigin({ after: 4 }),
      y: getOrigin({ after: 2 }),
    },
    {
      animationDirection: Direction.fromTop,
      x: getOrigin({ after: 4 }),
      y: getOrigin({ after: 3 }),
    },
    {
      animationDirection: Direction.fromTop,
      x: getOrigin({ after: 4 }),
      y: getOrigin({ after: 4 }),
    },
    // MIDDLE
    {
      animationDirection: Direction.fromLeft,
      x: getOrigin({ after: 1 }),
      y: getOrigin({ after: 1 }),
    },
    {
      animationDirection: Direction.fromRight,
      x: getOrigin({ after: 3 }),
      y: getOrigin({ after: 3 }),
    },
    {
      animationDirection: Direction.fromBottom,
      x: getOrigin({ after: 2 }),
      y: getOrigin({ after: 2 }),
    },
  ]

  const animatedFramesForEachSquare =
    lastFrame / dataStructureDescription.length

  return (
    <Container size={letterSize}>
      {dataStructureDescription.map((description, index) => (
        <Square
          key={index}
          frame={frame}
          size={squareSize}
          spacing={squarePadding}
          startingFrame={animatedFramesForEachSquare * index - 1}
          endingFrame={animatedFramesForEachSquare * (index + 1) - 1}
          {...description}
        />
      ))}
    </Container>
  )
}
