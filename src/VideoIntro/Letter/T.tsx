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

export const T = ({ lastFrame }: LetterProps) => {
  const frame = useCurrentFrame()

  const dataStructureDescription: Pick<
    SquareProps,
    'animationDirection' | 'x' | 'y'
  >[] = [
    // HORIZONTAL BAR
    {
      animationDirection: Direction.fromLeft,
      x: trueOrigin,
      y: trueOrigin,
    },
    {
      animationDirection: Direction.fromLeft,
      y: trueOrigin,
      x: getOrigin({ after: 1 }),
    },
    {
      animationDirection: Direction.fromTop,
      y: trueOrigin,
      x: getOrigin({ after: 2 }),
    },
    {
      animationDirection: Direction.fromRight,
      y: trueOrigin,
      x: getOrigin({ after: 3 }),
    },
    {
      animationDirection: Direction.fromRight,
      y: trueOrigin,
      x: getOrigin({ after: 4 }),
    },
    // VERTICAL BAR
    {
      animationDirection: Direction.fromBottom,
      y: getOrigin({ after: 1 }),
      x: getOrigin({ after: 2 }),
    },
    {
      animationDirection: Direction.fromBottom,
      y: getOrigin({ after: 2 }),
      x: getOrigin({ after: 2 }),
    },
    {
      animationDirection: Direction.fromBottom,
      y: getOrigin({ after: 3 }),
      x: getOrigin({ after: 2 }),
    },
    {
      animationDirection: Direction.fromBottom,
      y: getOrigin({ after: 4 }),
      x: getOrigin({ after: 2 }),
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
