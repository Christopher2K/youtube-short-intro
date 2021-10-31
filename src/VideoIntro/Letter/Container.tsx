import { PropsWithChildren } from 'react'

export type ContainerProps = PropsWithChildren<{
  size: number
}>

export const Container = ({ size, children }: ContainerProps) => {
  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
      }}
    >
      {children}
    </div>
  )
}
