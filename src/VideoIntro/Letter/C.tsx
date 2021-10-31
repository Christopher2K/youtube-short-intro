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

export const C = ({ lastFrame }: LetterProps) => {
  const frame = useCurrentFrame()

  const dataStructureDescription: Pick<
    SquareProps,
    'animationDirection' | 'x' | 'y'
  >[] = [
    // VERTICAL BAR
    {
      animationDirection: Direction.fromLeft,
      x: trueOrigin,
      y: getOrigin({ after: 2 }),
    },
    {
      animationDirection: Direction.fromBottom,
      x: trueOrigin,
      y: getOrigin({ after: 1 }),
    },
    {
      animationDirection: Direction.fromTop,
      x: trueOrigin,
      y: getOrigin({ after: 3 }),
    },
    // TOP BAR
    {
      animationDirection: Direction.fromLeft,
      x: getOrigin({ after: 1 }),
      y: trueOrigin,
    },
    {
      animationDirection: Direction.fromLeft,
      x: getOrigin({ after: 2 }),
      y: trueOrigin,
    },
    {
      animationDirection: Direction.fromLeft,
      x: getOrigin({ after: 3 }),
      y: trueOrigin,
    },
    {
      animationDirection: Direction.fromLeft,
      x: getOrigin({ after: 4 }),
      y: trueOrigin,
    },
    // BOTTOM BAR
    {
      animationDirection: Direction.fromRight,
      x: getOrigin({ after: 4 }),
      y: getOrigin({ after: 4 }),
    },
    {
      animationDirection: Direction.fromRight,
      x: getOrigin({ after: 3 }),
      y: getOrigin({ after: 4 }),
    },
    {
      animationDirection: Direction.fromRight,
      x: getOrigin({ after: 2 }),
      y: getOrigin({ after: 4 }),
    },
    {
      animationDirection: Direction.fromRight,
      x: getOrigin({ after: 1 }),
      y: getOrigin({ after: 4 }),
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
