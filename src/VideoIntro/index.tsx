import { letterSize, logoWidth } from '../config'

import * as Letter from './Letter'

export const VideoIntro = () => {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2D2D2D',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: logoWidth,
        }}
      >
        <Letter.T lastFrame={120} />
        <Letter.C lastFrame={120} />
        <Letter.N lastFrame={120} />
      </div>
    </div>
  )
}
