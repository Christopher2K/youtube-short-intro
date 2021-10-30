import { interpolate } from 'remotion'

export type SquareProps = {
  size: number
  spacing: number
  x: number
  y: number
  frame: number
  startingFrame: number
  endingFrame: number
}

export const Square = ({
  size,
  spacing,
  x,
  y,
  frame,
  startingFrame,
  endingFrame,
}: SquareProps) => {
  const innerRectSize = size - spacing * 2
  const opacity = interpolateWithSquareValue([0, 1])
  const realTimeXPosition = interpolateWithSquareValue([x - size, x])

  function interpolateWithSquareValue(outputRange: [number, number]) {
    return interpolate(frame, [startingFrame, endingFrame], outputRange, {
      extrapolateRight: 'clamp',
    })
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        position: 'absolute',
        top: y,
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
