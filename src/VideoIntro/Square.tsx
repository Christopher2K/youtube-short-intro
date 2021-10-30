import { interpolate } from 'remotion'

export enum Direction {
  fromLeft = 'fromLeft',
  fromRight = 'fromRight',
  fromTop = 'fromTop',
  fromBottom = 'fromBottom',
}

export type SquareProps = {
  size: number
  spacing: number
  x: number
  y: number
  frame: number
  startingFrame: number
  endingFrame: number
  animationDirection: Direction
}

export const Square = ({
  size,
  spacing,
  x,
  y,
  frame,
  startingFrame,
  endingFrame,
  animationDirection,
}: SquareProps) => {
  const innerRectSize = size - spacing * 2
  const opacity = interpolateWithSquareValue([0, 1])

  const realTimeXPosition = interpolateWithSquareValue(
    getXRangeFromAnimationDirection()
  )

  const realTimeYPosition = interpolateWithSquareValue(
    getYRangeFromAnimationDirection()
  )

  function interpolateWithSquareValue(outputRange: [number, number]) {
    return interpolate(frame, [startingFrame, endingFrame], outputRange, {
      extrapolateRight: 'clamp',
    })
  }

  function getXRangeFromAnimationDirection(): [number, number] {
    switch (animationDirection) {
      case Direction.fromLeft:
        return [x - size, x]
      case Direction.fromRight:
        return [x + size, x]
      case Direction.fromTop:
      case Direction.fromBottom:
        return [x, x]
    }
  }

  function getYRangeFromAnimationDirection(): [number, number] {
    switch (animationDirection) {
      case Direction.fromLeft:
      case Direction.fromRight:
        return [y, y]
      case Direction.fromTop:
        return [y - size, y]
      case Direction.fromBottom:
        return [y + size, y]
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        position: 'absolute',
        top: realTimeYPosition,
        left: realTimeXPosition,
        opacity,
      }}
    >
      <rect
        x={spacing}
        y={spacing}
        width={innerRectSize}
        height={innerRectSize}
        fill="#000000"
      />
    </svg>
  )
}
