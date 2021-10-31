import { letterSize, squareSize } from '../config'

import * as Letter from './Letter'

export const VideoIntro = () => {
  const fullLogoWidth = letterSize * 3 + squareSize * 2

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: fullLogoWidth,
        }}
      >
        <Letter.T lastFrame={120} />
        <Letter.C lastFrame={120} />
        <Letter.N lastFrame={120} />
      </div>
    </div>
  )
}
